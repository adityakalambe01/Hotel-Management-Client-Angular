import { Injectable } from '@angular/core';
import {HttpClientService} from '../http-client-service';
import {Observable} from 'rxjs';
import {IHttpSuccessResponse} from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class HotelService extends HttpClientService{
  private hotelPrefixURL = '/hotel';
  private hotelCategoryPrefixURL = '/hotel-category';

  // Hotel routes
  createHotel(data:any): Observable<IHttpSuccessResponse<any>>{
    return this.post<typeof data, IHttpSuccessResponse<any>>(`${this.hotelPrefixURL}`, data);
  }

  // Hotel Categories
  getHotelCategories(): Observable<IHttpSuccessResponse<any>>{
    return this.get<IHttpSuccessResponse<any>>(`${this.hotelCategoryPrefixURL}`);
  }

  allHotelCategories(): Observable<IHttpSuccessResponse>{
    return this.get<IHttpSuccessResponse>(`${this.hotelCategoryPrefixURL}/all`);
  }
}
