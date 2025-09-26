import {Component, ViewChild} from '@angular/core';
import {CardModule} from '../../shared/ui/card/card.module';
import {LucidIconWrapper} from '../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {icons} from '../../core/constants';
import {CommonModule} from '@angular/common';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexGrid,
  ApexYAxis,
  NgApexchartsModule,
  ApexMarkers
} from "ng-apexcharts";
import {RevenueContributorsChart} from '../../shared/components/revenue-contributors-chart/revenue-contributors-chart';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels?: ApexDataLabels;
  stroke?: ApexStroke;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  title?: ApexTitleSubtitle;
  grid?: ApexGrid;
  markers?: ApexMarkers;
};




@Component({
  selector: 'app-dashboard-component',
  imports: [CardModule, LucidIconWrapper, CommonModule, NgApexchartsModule, RevenueContributorsChart],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public revenueChartOptions = {
    series: [
      {
        name: "Revenue",
        data: [175000, 195000, 225000, 180000, 240000, 290000],
      },
    ],
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
    },
    title: {
      text: "Monthly Revenue Trends",
      style: { fontWeight: "600", fontSize: "14px" },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    grid: { borderColor: "#e5e7eb" },
  } as ChartOptions;

  public tenantChartOptions = {
    series: [
      {
        name: "Tenants",
        data: [45, 52, 59, 47, 65, 72],
      },
    ],
    chart: {
      type: "line",
      height: 300,
      toolbar: { show: false },
    },
    stroke: { curve: "smooth", width: 2 },
    markers: { size: 5 },
    title: {
      text: "Tenant Growth",
      style: { fontWeight: "600", fontSize: "14px" },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    grid: { borderColor: "#e5e7eb" },
  } as ChartOptions;

  protected readonly icons = icons;
  dashStats = [
    {
      title: 'Total Tenants',
      value: '1,247',
      change: '+12 from last month',
      trend: 'up',
      iconName: icons.sidebar.users,
    },
    {
      title: 'Active Hotels',
      value: '3,892',
      change: '+8 from last month',
      trend: 'up',
      iconName: icons.sidebar.hotels,
    },
    {
      title: 'Monthly Revenue',
      value: '2.4M',
      change: '+23% from last month',
      trend: 'up',
      iconName: icons.sidebar.revenue,
    },
    {
      title: 'Monthly Revenue',
      value: '18.2%',
      change: '+2.1% from last month',
      trend: 'up',
      iconName: icons.trending.up,
    },
  ];





  // Dummy roles data
  roles = [
    { name: 'Admin', status: 'active', userCount: 3 },
    { name: 'Manager', status: 'active', userCount: 5 },
    { name: 'Editor', status: 'inactive', userCount: 2 },
    { name: 'Viewer', status: 'active', userCount: 10 },
  ];

  // Dummy users data
  users = [
    { name: 'Alice', status: 'active' },
    { name: 'Bob', status: 'inactive' },
    { name: 'Charlie', status: 'active' },
    { name: 'Dave', status: 'active' },
  ];

  // Dummy permissions data
  permissions = [
    { name: 'Read' },
    { name: 'Write' },
    { name: 'Delete' },
    { name: 'Manage Users' },
  ];

  permissionStats = [
    {
      title: 'Total Roles',
      value: this.roles.length,
      subtitle: `${this.roles.filter(r => r.status === 'active').length} active roles`,
      icon: icons.sidebar.shield,
    },
    {
      title: 'Total Users',
      value: this.roles.reduce((sum, role) => sum + role.userCount, 0),
      subtitle: 'Across all roles',
      icon: icons.sidebar.users,
    },
    {
      title: 'Active Users',
      value: this.users.filter(u => u.status === 'active').length,
      subtitle: 'Currently active',
      icon: icons.userCheck,
    },
    {
      title: 'Permissions',
      value: this.permissions.length,
      subtitle: 'Available permissions',
      icon: icons.key,
    },
  ];
}
