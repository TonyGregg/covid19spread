import { Component, OnInit } from '@angular/core';
import { Tracker } from 'src/app/shared/model/tracker';
import { DailyTrackerService } from 'src/app/shared/services/daily-tracker.service';

interface Day {
  value: number;
  viewValue: String;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  country = '';
  tracker: Tracker;
  indiaTracker: Tracker;
  width = '78%';
  height = 400;
  type = 'msline';
  dataFormat = 'json';
  // Chart Configuration
  public dataSource: any;
  public indiaDataSource: any;
  showUsChart = true;
  usTotalConfirmedCases = 0;
  indiaTotalConfirmedCases = 0;
  usNewCasesToday = 0;
  indiaNewCasesToday = 0;
  daysArray: Day[] = [
    {value: 1, viewValue: '0'},
    {value: 2, viewValue: '1'},
    {value: 3, viewValue: '2'},
    {value: 4, viewValue: '3'},
    {value: 5, viewValue: '4'},
    {value: 6, viewValue: '5'},
    {value: 7, viewValue: '6'},
    {value: 8, viewValue: '7'},
  ];
  nDays = 1;
  showEstimatedCount = false;
  estimatedCount = 0;
  todaysProjectedCount = 0;

  constructor(private dailyTrackerService: DailyTrackerService) {
  }

  ngOnInit(): void {
    this.country = 'US';
    console.log('Country selected ' + this.country);
    this.dailyTrackerService.getDailyTracker(this.country).subscribe(returnedTracker => {
      this.tracker = returnedTracker;
      this.usTotalConfirmedCases = this.tracker.cumulativeValues[this.tracker.cumulativeValues.length - 1].value;
      this.usNewCasesToday = this.tracker.newValues[this.tracker.newValues.length - 1].value;
      // console.log('Returned tracker ' + JSON.stringify(this.tracker));
      const dataSource = {
        chart: {
          // Set the chart caption
          caption: 'Number of cases in ' + this.country,
          yaxisname: '# of cases',
          decimals: 2,
          thousandSeparatorPosition: '2,3',
          subcaption: 'Since 02/27',
          showhovereffect: '1',
          drawcrossline: '1',
          plottooltext: '$seriesName : <b>$value</b>',
          theme: 'fusion'
        },
        categories: [
          {
            category: returnedTracker.labels
          }
        ],
        dataSet: [
          {
            seriesName: 'Cumulative Cases',
            data: returnedTracker.cumulativeValues
          },
          {
            seriesName: 'New Cases',
            data: returnedTracker.newValues
          }
        ]
      };
      this.dataSource = dataSource;
    }); // end of US

    this.dailyTrackerService.getDailyTracker('in').subscribe(returnedTracker => {
      this.indiaTracker = returnedTracker;
      // console.log('Returned tracker ' + JSON.stringify(this.tracker));
      this.indiaTotalConfirmedCases = this.indiaTracker.cumulativeValues[this.indiaTracker.cumulativeValues.length - 1].value;
      this.indiaNewCasesToday = this.indiaTracker.newValues[this.indiaTracker.newValues.length - 1].value;
      const indiaDataSource = {
        chart: {
          // Set the chart caption
          caption: 'Number of cases in India' ,
          yaxisname: '# of cases',
          subcaption: 'Since 03/03',
          showhovereffect: '1',
          drawcrossline: '1',
          orientation: 'right',
          plottooltext: '$seriesName : <b>$value</b>',
          theme: 'fusion'
        },
        categories: [
          {
            category: returnedTracker.labels
          }
        ],
        dataSet: [
          {
            seriesName: 'Cumulative Cases',
            data: returnedTracker.cumulativeValues
          },
          {
            seriesName: 'New Cases',
            data: returnedTracker.newValues
          }
        ]
      };
      this.indiaDataSource = indiaDataSource;
    });
  }
  onUSCountryClick() {
    console.log('US is selected');
    this.country = 'US';
    this.showUsChart = true;

  }
  onIndiaCountryClick() {
    console.log('Selected India');
    this.country = 'India';
    this.showUsChart = false;
  }
  getEstimatedCount(): number {
    /**
     * Estimated Count Formula Y = a * (b^x);
     * a - Last available total count
     * b - Growth Factor
     * x - # of days from today the projection to be made.
     */
    let tracker;
    if (this.showUsChart) {
       tracker = this.tracker;
    } else {
       tracker = this.indiaTracker;
    }
    const lastCumulativeCount = tracker.cumulativeValues[tracker.cumulativeValues.length - 2].value;
    const lastNewValueCount = tracker.newValues[tracker.newValues.length - 2].value;

    // console.log('value a : total count latest ' + lastCumulativeCount);
    let dayGf = 0.0;
    let gfTotal = 0.0;
    for (let i = tracker.newValues.length - 2; i > 0; i--) {
      dayGf = tracker.newValues[i].value / tracker.newValues[i - 1].value;
      // console.log('i = ' + i + ' cum[i] ' + tracker.cumulativeValues[i].value +
      //   ' cum[i-1] ' + tracker.cumulativeValues[i - 1].value + ' day G.F ' + dayGf);
      gfTotal +=  dayGf;
    }
    const gf = (gfTotal / (tracker.newValues.length - 1) - 0.35); // average
    // console.log( 'G.F Total ' + gfTotal + ' G.F ' + gf);
    const projectedCount =  lastNewValueCount * (Math.pow(gf, this.nDays));
    // console.log('projected count ' + projectedCount);
    this.estimatedCount = lastCumulativeCount + projectedCount;
    return this.estimatedCount;
  }
  dayValueChanged(ob: any) {
    this.nDays = ob.target.value;
    // console.log('day value got changed ' + this.nDays);
    this.getEstimatedCount();
  }
}
