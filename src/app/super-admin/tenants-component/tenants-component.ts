import { Component } from '@angular/core';
import {CardModule} from '../../shared/ui/card/card.module';
import {LucidIconWrapper} from '../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {icons} from '../../core/constants';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tenants-component',
  imports: [
    CardModule,
    LucidIconWrapper,
    CommonModule
  ],
  templateUrl: './tenants-component.html',
  styleUrl: './tenants-component.css'
})
export class TenantsComponent {
  stats = [
    {
      title: 'Active Tenants',
      value: '1,247',
      change: '+12%',
      iconName: icons.sidebar.users,
      color: 'text-emerald-600',
      changeColor: 'text-emerald-600'
    },
    {
      title: 'Total Hotels',
      value: '3,892',
      change: '+8%',
      iconName: icons.sidebar.hotels,
      color: 'text-blue-600',
      changeColor: 'text-blue-600'
    },
    {
      title: 'Paid Subscriptions',
      value: '1,156',
      change: '+15%',
      iconName: icons.sidebar.card,
      color: 'text-purple-600',
      changeColor: 'text-purple-600'
    },
    {
      title: 'Pending Issues',
      value: '23',
      change: '-5%',
      iconName: icons.alert.triangle,
      color: 'text-orange-600',
      changeColor: 'text-orange-600'
    },
  ];
}
