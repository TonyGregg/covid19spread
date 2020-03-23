import { Component, OnInit } from '@angular/core';
import { IpFetchService } from 'src/app/shared/services/ip-fetch.service';
import { GeoHolder } from 'src/app/shared/model/geo/geo-holder';
import { GeoServiceService } from 'src/app/shared/services/geo-service.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
  ipAddress: String;
  geoHolder: GeoHolder;

  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type = 'bar';
  public chart2Type = 'pie';
  public chart3Type = 'line';
  public chart4Type = 'radar';
  public chart5Type = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: '#1'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: '#2'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: '#3'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors: Array<any> = [

  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };

  constructor(private ipService: IpFetchService, private geoService: GeoServiceService) {
    console.log('Inside constructor');
    
    this.getGeoHolder();
  }

  ngOnInit() {
    console.log('inside ngOnInit hook');
    
    // this.getGeoHolder();
  }

  getGeoHolder()  {
    this.ipService.getIpAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
      console.log('IP Address : ' + this.ipAddress);
      this.geoService.getGeoHolder(this.ipAddress).subscribe(geoHolder => {
        this.geoHolder = geoHolder;
        console.log('GeoHolder :: ' + JSON.stringify(geoHolder));
      });
    });
  }
}
