import {Component, OnInit} from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend,
  ApexDataLabels,
  ApexTooltip, NgApexchartsModule
} from 'ng-apexcharts';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {CardModule} from '../../../shared/ui/card/card.module';

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  colors: string[];
  legend: ApexLegend;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-revenue-contributors-chart',
  imports: [NgApexchartsModule, CurrencyPipe, CommonModule, CardModule],
  templateUrl: './revenue-contributors-chart.html',
  styleUrl: './revenue-contributors-chart.css'
})
export class RevenueContributorsChart implements OnInit{
  public pieChartOptions!: Partial<PieChartOptions>;

  revenueLabels = [
    { name: 'Luxury Hotels Group', value: 45000, color: '#10b981' },
    { name: 'City Center Hotels', value: 38000, color: '#3b82f6' },
    { name: 'Resort Paradise', value: 32000, color: '#8b5cf6' },
    { name: 'Business Suites', value: 28000, color: '#f59e0b' },
    { name: 'Others', value: 67000, color: '#6b7280' },
  ];

  ngOnInit(): void {
    this.pieChartOptions = {
      series: this.revenueLabels.map(r => r.value),
      chart: {
        type: 'pie',
        height: 280,
      },
      labels: this.revenueLabels.map(r => r.name),
      colors: this.revenueLabels.map(r => r.color),
      dataLabels: {
        enabled: true,
        formatter: (val: number) => `${val.toFixed(0)}%`,
      },
      tooltip: {
        enabled: false,  // <-- disables tooltip completely
      },
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 768, // below 768px screen width
          options: {
            chart: {
              height: 200, // reduce chart height
            },
            dataLabels: {
              enabled: false // hide data labels for smaller screens
            }
          }
        },
        {
          breakpoint: 480, // below 480px screen width
          options: {
            chart: {
              height: 180,
            },
          }
        }
      ]
    };
  }

}
