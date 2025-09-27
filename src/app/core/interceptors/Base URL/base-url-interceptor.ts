import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

const baseUrl = environment.API_URL;

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const isAbsolute = /^http/.test(req.url);
  const clonedRequest = req.clone({
    url: isAbsolute ? req.url : `${baseUrl}${req.url}`
  })
  return next(clonedRequest);
};
