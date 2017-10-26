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
  }

}
