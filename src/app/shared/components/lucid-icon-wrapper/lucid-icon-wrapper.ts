import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-lucid-icon-wrapper',
  imports: [LucideAngularModule],
  template:'<lucide-icon [name]="iconName" [size]="iconSize"></lucide-icon>',
  styleUrl: './lucid-icon-wrapper.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LucidIconWrapper implements OnChanges, DoCheck{
  @Input() iconName: any;
  @Input() iconSize: number = 16;
  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {
  }
}
