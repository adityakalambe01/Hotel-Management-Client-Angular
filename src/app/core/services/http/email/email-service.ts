import { Injectable } from '@angular/core';
import {HttpClientService} from '../http-client-service';
import {Observable} from 'rxjs';
import {IHttpSuccessResponse} from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class EmailService extends HttpClientService{

  verifyEmail(token:{token:string}):Observable<IHttpSuccessResponse>{
    return this.get<IHttpSuccessResponse>(`/verify-email`, token);
  }

  resendVerification(email:{email:string}):Observable<IHttpSuccessResponse>{
    return this.post<typeof email, IHttpSuccessResponse>(`/resend-verification`, email);
  }

}
