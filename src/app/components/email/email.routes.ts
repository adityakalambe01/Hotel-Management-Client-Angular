import {Routes} from '@angular/router';
import {VarificationComponent} from './varification-component/varification-component';

export const emailRoutes : Routes = [
  {
    path: 'verify-email',
    component: VarificationComponent
  },
  {
    path: 'resend-verification',
    component: VarificationComponent
  }
]
