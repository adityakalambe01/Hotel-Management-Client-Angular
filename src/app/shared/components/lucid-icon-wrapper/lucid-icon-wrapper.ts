import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LucideAngularModule} from 'lucide-angular';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-lucid-icon-wrapper',
  imports: [LucideAngularModule, CommonModule],
  template:'<lucide-icon [name]="iconName" [size]="iconSize" [ngClass]="[className, defaultIconClass]" [strokeWidth]="strokeWidth" [absoluteStrokeWidth]="absoluteStrokeWidth"></lucide-icon>',
  styleUrl: './lucid-icon-wrapper.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LucidIconWrapper implements OnChanges, DoCheck{
  @Input() iconName: any;
  @Input() iconSize: number = 16;
  @Input() className: string = 'text-gray-500 dark:text-gray-400';
  @Input() strokeWidth:number = 2;
  @Input() absoluteStrokeWidth:boolean = false;
  protected readonly defaultIconClass = 'my-icon';
  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {
  }
}
