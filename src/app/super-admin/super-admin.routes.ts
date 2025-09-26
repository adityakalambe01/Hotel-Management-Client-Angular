import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard-component/dashboard-component';
import {AnalyticsComponent} from './analytics-component/analytics-component';
import {HotelsComponent} from './hotels-component/hotels-component';
import {RevenueComponent} from './revenue-component/revenue-component';
import {SubscriptionsComponent} from './subscriptions-component/subscriptions-component';
import {TenantsComponent} from './tenants-component/tenants-component';
import {PermissionComponent} from './permission-component/permission-component';
import {ThemeComponent} from './theme-component/theme-component';

export const superAdminRoutes:Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'revenue',
    component: RevenueComponent
  },
  {
    path: 'settings',
    children:[
      {
        path: 'system',
        loadComponent: () => import('./settings/system-settings-component/system-settings-component').then(m => m.SystemSettingsComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./settings/profile-settings-component/profile-settings-component').then(m => m.ProfileSettingsComponent)
      },
      {
        path: 'permissions',
        component: PermissionComponent
      },
      {
        path: 'theme',
        component: ThemeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'system',
      }
    ]
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent
  },
  {
    path: 'tenants',
    component: TenantsComponent
  }
];
