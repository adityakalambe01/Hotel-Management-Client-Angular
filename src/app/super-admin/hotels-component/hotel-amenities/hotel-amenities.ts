import {Component, OnDestroy, OnInit} from '@angular/core';
import {IHttpErrorResponse, IHttpSuccessResponse} from '../../../core/models';
import {AmenityService} from '../../../core/services/http/amenity/amenity-service';
import {Subscription} from 'rxjs';
import {CardModule} from '../../../shared/ui/card/card.module';
import {icons} from '../../../core/constants';
import {LucidIconWrapper} from '../../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {Utils} from '../../../core/utils/utils';

@Component({
  selector: 'app-hotel-amenities',
  imports: [CardModule, LucidIconWrapper],
  templateUrl: './hotel-amenities.html',
  styleUrl: './hotel-amenities.css'
})
export class HotelAmenities implements OnInit, OnDestroy {
  protected readonly icons = icons;

  protected amenities:any[] = [];
  protected amenityCategories:any[] = [];

  private amenitySubscription!:Subscription;
  private amenityCategorySubscription!:Subscription;

  constructor(private amenityService:AmenityService, private utils:Utils) {
  }

  ngOnInit() {
    this.amenitySubscription = this.amenityService.getAmenities().subscribe({
      next: (response: IHttpSuccessResponse)=>{
        this.amenities = response.data;
      },
      error: (error: IHttpErrorResponse)=>{
        console.log(error)
      },
      complete: ()=>{

      }
    });

    this.amenityCategorySubscription = this.amenityService.getAmenityCategories().subscribe({
      next: (response: IHttpSuccessResponse)=>{
        this.amenityCategories = response.data.results;
      },
      error: (error: IHttpErrorResponse)=>{
        console.log(error)
      },
      complete: ()=>{

      }
    })
  }

  ngOnDestroy() {
    this.amenityService.unsubscribe(this.amenitySubscription, this.amenityCategorySubscription)
  }

  getIcon(categoryName: string, amenityName?: string) {
    // @ts-ignore
    const categoryObj = icons.amenityCategory.categories[categoryName];

    if (!categoryObj) {
      return icons.amenityCategory.base; // fallback global base
    }

    // if amenity exists inside the category
    if (amenityName && categoryObj.amenities[amenityName]) {
      return categoryObj.amenities[amenityName];
    }

    // fallback to category base
    return categoryObj.base;
  }


}
