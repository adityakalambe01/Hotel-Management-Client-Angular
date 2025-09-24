import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/http/auth/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService:AuthService = inject(AuthService);
  const router:Router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigateByUrl('/auth/login');
    return false;
  }
  return true;
};
