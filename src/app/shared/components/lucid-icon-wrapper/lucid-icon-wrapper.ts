import {Component, DoCheck, Input, input, OnChanges, SimpleChanges} from '@angular/core';
import {LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-lucid-icon-wrapper',
  imports: [LucideAngularModule],
  templateUrl: './lucid-icon-wrapper.html',
  styleUrl: './lucid-icon-wrapper.css'
})
export class LucidIconWrapper implements OnChanges, DoCheck{
  @Input() icon: any;
  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {
  }


}
