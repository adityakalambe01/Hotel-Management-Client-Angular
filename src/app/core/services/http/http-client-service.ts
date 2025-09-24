import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, Subscription, throwError} from 'rxjs';
import {IHttpErrorResponse} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private baseUrl = 'http://localhost:3000/api/dev';
  constructor(private http: HttpClient) {
  }

  protected get<TResponse>(url: string) : Observable<TResponse>{
    return this.http.get<TResponse>(url).pipe(catchError(this.handleError));
  }

  protected post<TRequest, TResponse>(url:string, data:TRequest) : Observable<TResponse>{
    return this.http.post<TResponse>(url, data).pipe(catchError(this.handleError));
  }

  protected put<TRequest, TResponse>(url:string, data:TRequest) : Observable<TResponse>{
    return this.http.put<TResponse>(url, data).pipe(catchError(this.handleError));
  }

  protected delete<TResponse>(url:string) : Observable<TResponse>{
    return this.http.delete<TResponse>(url).pipe(catchError(this.handleError));
  }

  protected patch<TRequest, TResponse>(url:string, data:TRequest) : Observable<TResponse>{
    return this.http.patch<TResponse>(url, data).pipe(catchError(this.handleError));
  }


  private handleError(err: HttpErrorResponse) {
    const backendError = err.error as IHttpErrorResponse;
    return throwError(() => backendError);
  }

  unsubscribe(...subscriptions:Subscription[]){
    for(const subscription of subscriptions){
      if(subscription){
        subscription.unsubscribe();
      }
    }
  }
}
