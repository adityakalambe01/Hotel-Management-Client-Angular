import { Component } from '@angular/core';
import {CardModule} from '../../shared/ui/card/card.module';
import {LucidIconWrapper} from '../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {CommonModule, NgForOf} from '@angular/common';
import {icons} from '../../core/constants';

@Component({
  selector: 'app-subscriptions-component',
  imports: [
    CardModule,
    LucidIconWrapper,
    CommonModule
  ],
  templateUrl: './subscriptions-component.html',
  styleUrl: './subscriptions-component.css'
})
export class SubscriptionsComponent {
  subscriptionPlans = [
    { name: 'Basic', subscribers: 120, revenue: 2400 },
    { name: 'Standard', subscribers: 300, revenue: 9000 },
    { name: 'Premium', subscribers: 80, revenue: 6400 },
  ];

  activePlans = this.subscriptionPlans.slice(0, 2); // first two plans are active

  subStats = [
    {
      title: 'Total Plans',
      value: this.subscriptionPlans.length,
      subtitle: `${this.activePlans.length} active plans`,
      icon: icons.sidebar.card,
    },
    {
      title: 'Total Subscribers',
      value: this.subscriptionPlans.reduce((sum, plan) => sum + plan.subscribers, 0),
      subtitle: 'Across all plans',
      icon: icons.sidebar.users,
    },
    {
      title: 'Monthly Revenue',
      value: '$' + this.subscriptionPlans
        .reduce((sum, plan) => sum + plan.revenue, 0)
        .toLocaleString(),
      subtitle: '+12% from last month',
      icon: icons.sidebar.revenue,
    },
    {
      title: 'Avg Revenue per User',
      value: '$' + Math.round(
        this.subscriptionPlans.reduce((sum, plan) => sum + plan.revenue, 0) /
        this.subscriptionPlans.reduce((sum, plan) => sum + plan.subscribers, 0)
      ),
      subtitle: 'Per subscriber',
      icon: icons.sidebar.revenue,
    },
  ];
}
