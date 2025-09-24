import { HttpInterceptorFn } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/dev';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const isAbsolute = /^http/.test(req.url);
  const clonedRequest = req.clone({
    url: isAbsolute ? req.url : `${baseUrl}${req.url}`
  })
  return next(clonedRequest);
};
