import { Routes } from '@angular/router';
import {AUTH_ROUTES} from './auth/auth.routes';
import {AuthWrapperComponent} from './auth/auth-wrapper-component/auth-wrapper-component';
import {authGuard} from './core/guard/auth/auth-guard';
import {noAuthGuard} from './core/guard/noAuth/no-auth-guard';
import {SidebarComponent} from './dashboard/sidebar-component/sidebar-component';
import {dashboardRoutes} from './dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthWrapperComponent,
    canActivateChild: [noAuthGuard],
    children:[
      ...AUTH_ROUTES
    ]
  },
  {
    path: '',
    component: SidebarComponent,
    canActivate: [authGuard],
    children:[
      ...dashboardRoutes
    ]
  },
];
