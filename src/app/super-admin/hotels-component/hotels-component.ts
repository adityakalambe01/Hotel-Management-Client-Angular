import { Component } from '@angular/core';
import {CardModule} from '../../shared/ui/card/card.module';
import {LucidIconWrapper} from '../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {icons} from '../../core/constants';
import {TabsModule} from '../../shared/ui/tabs/tabs.module';
import {HotelCategory} from './hotel-category/hotel-category';
import {HotelAmenities} from './hotel-amenities/hotel-amenities';

@Component({
  selector: 'app-hotels-component',
  imports: [
    CardModule,
    LucidIconWrapper,
    TabsModule,
    HotelCategory,
    HotelAmenities
  ],
  templateUrl: './hotels-component.html',
  styleUrl: './hotels-component.css'
})
export class HotelsComponent {

  protected readonly icons = icons;
}
