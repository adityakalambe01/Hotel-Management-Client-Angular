import { Injectable } from '@angular/core';
import {HttpClientService} from '../http-client-service';
import {Observable} from 'rxjs';
import {IHttpSuccessResponse} from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class AmenityService extends HttpClientService{
  private amenityPrefixURL = '/amenity';

  getAmenities(): Observable<IHttpSuccessResponse<any>>{
    return this.get<IHttpSuccessResponse<any>>('/amenity/grouped');
  }

  getAmenityCategories(): Observable<IHttpSuccessResponse<any>>{
    return this.get<IHttpSuccessResponse<any>>(`${this.amenityPrefixURL}-category`);
  }

}
