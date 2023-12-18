import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-money-statistics',
  templateUrl: './money-statistics.component.html',
  styleUrls: ['./money-statistics.component.scss']
})
export class MoneyStatisticsComponent implements OnInit {
  apiURL: any = '';
  moneyStatistics: any = {};

  

  constructor(private http: HttpClient, private appComponent: AppComponent) { 
    this.apiURL = this.appComponent.apiUrlData;

  }

  ngOnInit() {
    this.getData();
    this.createChartColumn();
  }

    getData(){
      this.http.get(this.apiURL).subscribe ((res: any)=>{
        this.moneyStatistics = res.money_statistics;
       
       
      })
    }

    private createChartColumn(): void {
  
      const chart = Highcharts.chart('chart-column' as any, {
        chart: {
          type: 'column'
      },
      title: {
          text: '',
          align: 'left'
      },
     
      xAxis: {
          categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          crosshair: true,
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
      },
      tooltip: {
          valueSuffix: ' (1000 MT)'
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [
          {
              name: 'Total Income',
              data: [40629, 26000, 10700, 6830, 2750, 14500,40629, 26000, 10700, 6830, 2750, 14500]
          },
          {
            name: 'Total Expense',
            data: [40629, 26000, 10700, 6830, 2750, 14500,5186, 13600, 550, 14100, 10718, 7700]
        },
          {
              name: 'Total Invesment',
              data: [5186, 13600, 550, 14100, 10718, 7700, 40629, 26000, 10700, 6830, 2750, 14500]
          }
      ]
      } as any);
  
      
    }


}
