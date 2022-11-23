import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
})
export class ChartCardComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line',
      backgroundColor: '#ffffff00',
    },
    title: {
      text: 'Day Temperatures',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'line',
        name: 'Temperature',
        data: [19, 23, 22, 23, 24, 23, 20, 18, 18, 18, 16, 16],
      },
    ],
  });

  constructor() {}

  ngOnInit(): void {}
}
