import { Injectable } from '@angular/core';
import {HttpClientService} from '../http-client-service';
import {Observable} from 'rxjs';
import {IHttpSuccessResponse, IUser} from '../../../models';

interface ILoginData {
  token: string;
  user: IUser
}

interface IRegisterData {
   name: string;
   email: string;
   phone: string;
   password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpClientService{
    protected url = 'http://localhost:3000/api/dev';
    login(data:any):Observable<IHttpSuccessResponse<ILoginData>>{
      return this.post<typeof data, IHttpSuccessResponse<ILoginData>>(`${this.url}/auth/login`, data);
    }

    register(data:IRegisterData):Observable<IHttpSuccessResponse<IUser>>{
      return this.post<typeof data, IHttpSuccessResponse<IUser>>(`${this.url}/auth/register`, data);
    }

}
