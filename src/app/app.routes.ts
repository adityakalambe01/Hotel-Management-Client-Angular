import { Routes } from '@angular/router';
import {AUTH_ROUTES} from './auth/auth.routes';
import {AuthWrapperComponent} from './auth/auth-wrapper-component/auth-wrapper-component';
import {DashboardComponent} from './dashboard/dashboard-component/dashboard-component';
import {authGuard} from './core/guard/auth/auth-guard';
import {noAuthGuard} from './core/guard/noAuth/no-auth-guard';

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
    component: DashboardComponent,
    canActivate: [authGuard]
  },
];
