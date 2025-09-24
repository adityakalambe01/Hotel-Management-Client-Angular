import {inject, Injectable} from '@angular/core';
import {HttpClientService} from '../http-client-service';
import {Observable} from 'rxjs';
import {IHttpSuccessResponse, IUser} from '../../../models';
import {LocalStorage} from '../../storage/local-storage';

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
    private localStorageService:LocalStorage = inject(LocalStorage);

    login(data:any):Observable<IHttpSuccessResponse<ILoginData>>{
      return this.post<typeof data, IHttpSuccessResponse<ILoginData>>(`/auth/login`, data);
    }

    register(data:IRegisterData):Observable<IHttpSuccessResponse<IUser>>{
      return this.post<typeof data, IHttpSuccessResponse<IUser>>(`/auth/register`, data);
    }

    setToken(token:string){
      this.localStorageService.setItem('token', token);
    }

    getToken(){
      return this.localStorageService.getItem('token');
    }

    isAuthenticated(){
      return !!this.getToken();
    }

    logout(){
      this.localStorageService.removeItem('token');
    }

}
