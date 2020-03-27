import { Component, OnInit } from '@angular/core';
import { Tracker } from 'src/app/shared/model/tracker';
import { DailyTrackerService } from 'src/app/shared/services/daily-tracker.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  country = '';
  tracker: Tracker;
  width = '85%';
  height = 400;
  type = 'msline';
  dataFormat = 'json';
  // Chart Configuration
  public dataSource: any;
  public indiaDataSource: any;
  showUsChart = true;

  constructor(private dailyTrackerService: DailyTrackerService) {
  }

  ngOnInit(): void {
    this.country = 'US';
    console.log('Country selected ' + this.country);
    this.dailyTrackerService.getDailyTracker(this.country).subscribe(returnedTracker => {
      this.tracker = returnedTracker;
      // console.log('Returned tracker ' + JSON.stringify(this.tracker));
      const dataSource = {
        chart: {
          // Set the chart caption
          caption: 'Number of cases in ' + this.country,
          yaxisname: '# of cases',
          subcaption: 'Last 30 days',
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
      this.tracker = returnedTracker;
      // console.log('Returned tracker ' + JSON.stringify(this.tracker));
      const indiaDataSource = {
        chart: {
          // Set the chart caption
          caption: 'Number of cases in India' ,
          yaxisname: '# of cases',
          subcaption: 'Last 30 days',
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
    // this.chart.chartType('bar2d');
  }

}
