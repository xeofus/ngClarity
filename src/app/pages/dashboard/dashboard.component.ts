import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HichartsExporting from 'highcharts/modules/exporting';
import * as Hicharts3d from 'highcharts/highcharts-3d.js';

HichartsExporting(Highcharts);
Hicharts3d(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Highcharts.chart('chart1', {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 10,
          viewDistance: 25,
          depth: 40
        }
      },
      title: {
        text: 'Schedules work progress'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['line 1', 'line 2', 'line 3', 'line 4'],
        labels: {
          skew3d: true,
          style: {
            fontSize: '16px'
          }
        }
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Total count',
          skew3d: true
        }
      },
      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          depth: 40,
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
          }
        }
      },
      series: [
        {name: 'Left', data: [10, 58, 23, 8]},
        {name: 'Done', data: [27, 98, 44, 65]},
        {name: 'Alert', data: [8, 4, 65, 78]}
      ]
    });

    Highcharts.chart('chart2', {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: 'Browser market shares at a specific website, 2014'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
          ['Firefox', 45.0],
          ['IE', 26.8],
          {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
          },
          ['Safari', 8.5],
          ['Opera', 6.2],
          ['Others', 0.7]
        ]
      }]
    });
  }

}
