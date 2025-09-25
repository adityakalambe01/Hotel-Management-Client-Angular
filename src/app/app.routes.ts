import { Routes } from '@angular/router';
import {AUTH_ROUTES} from './auth/auth.routes';
import {AuthWrapperComponent} from './auth/auth-wrapper-component/auth-wrapper-component';
import {authGuard} from './core/guard/auth/auth-guard';
import {noAuthGuard} from './core/guard/noAuth/no-auth-guard';
import {superAdminRoutes} from './super-admin/super-admin.routes';
import {SuperAdmin} from './super-admin/super-admin';

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
    component: SuperAdmin,
    canActivate: [authGuard],
    children:[
      ...superAdminRoutes
    ]
  },
];
