import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/http/auth/auth-service';

export const noAuthGuard: CanActivateChildFn = (childRoute, state) => {
  const authService:AuthService = inject(AuthService);
  const router:Router = inject(Router);
  if (authService.isAuthenticated()) {
    return router.createUrlTree(['/']);
  }
  return true;
};
