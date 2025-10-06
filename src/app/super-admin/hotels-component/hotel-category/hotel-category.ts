import {Component, OnDestroy, OnInit} from '@angular/core';
import {HotelService} from '../../../core/services/http/hotel/hotel-service';
import {IHttpErrorResponse, IHttpSuccessResponse} from '../../../core/models';
import {CardModule} from '../../../shared/ui/card/card.module';
import {LucidIconWrapper} from '../../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {icons} from '../../../core/constants';
import {Subscription} from 'rxjs';
import {Utils} from '../../../core/utils/utils';

@Component({
  selector: 'app-hotel-category',
  imports: [CardModule, LucidIconWrapper],
  templateUrl: './hotel-category.html',
  styleUrl: './hotel-category.css'
})
export class HotelCategory implements OnInit, OnDestroy{
  protected icons = icons
  protected hotelCategories: any[] = [];
  private hotelCategorySubscription!:Subscription;
  constructor(private hotelService: HotelService, private utils:Utils) {
  }
  ngOnInit() {
    this.hotelCategorySubscription = this.hotelService.allHotelCategories().subscribe({
      next: (response: IHttpSuccessResponse)=>{
        this.hotelCategories = response.data;
      },
      error: (error: IHttpErrorResponse)=>{
        console.log(error)
      },
      complete: ()=>{

      }
    })
  }

  getIcon(name: string) {
    return this.utils.getIcon(icons.hotelCategory, name)
  }


  ngOnDestroy() {
    this.hotelService.unsubscribe(this.hotelCategorySubscription)
  }

}
