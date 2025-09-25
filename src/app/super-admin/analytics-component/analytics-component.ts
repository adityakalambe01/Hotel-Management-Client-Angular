import { Component } from '@angular/core';
import {CardModule} from '../../shared/ui/card/card.module';
import {LucidIconWrapper} from '../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {icons} from '../../core/constants';

@Component({
  selector: 'app-analytics-component',
  imports: [
    CardModule,
    LucidIconWrapper
  ],
  templateUrl: './analytics-component.html',
  styleUrl: './analytics-component.css'
})
export class AnalyticsComponent {

  protected readonly icons = icons;
}
