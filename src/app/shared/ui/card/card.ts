import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  template: `
    <div
      [ngClass]="[className, defaultClasses]"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class Card {
  @Input() className = '';
  protected defaultClasses:string = "flex flex-col gap-6 rounded-xl bg-white py-6 shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700";
  val = 'max-w-sm p-6'

}

@Component({
  selector: 'app-card-action',
  standalone: false,
  template: `
    <div
      class="col-start-2 row-span-2 row-start-1 self-start justify-self-end"
      [ngClass]="className"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardAction {
  @Input() className = '';

}


@Component({
  selector: 'app-card-content',
  standalone: false,
  template: `
    <div class="px-6" [ngClass]="className">
      <ng-content></ng-content>
    </div>
  `
})
export class CardContent {
  @Input() className = '';

}

@Component({
  selector: 'app-card-description',
  standalone: false,
  template: `
    <div class="text-gray-500 dark:text-gray-400 text-sm" [ngClass]="className">
      <ng-content></ng-content>
    </div>
  `
})
export class CardDescription {
  @Input() className = '';

}

@Component({
  selector: 'app-card-footer',
  standalone: false,
  template: `
    <div class="flex items-center px-6 border-t pt-6" [ngClass]="className">
      <ng-content></ng-content>
    </div>
  `

})
export class CardFooter {
  @Input() className = '';

}

@Component({
  selector: 'app-card-header',
  standalone: false,
  template: `
    <div
      [ngClass]="(className || defaultClasses) + ' gap-1.5 px-6 pb-6'"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardHeader {
  @Input() className = '';
  protected defaultClasses:string = "grid auto-rows-min grid-rows-[auto_auto] items-start border-b";

}

@Component({
  selector: 'app-card-title',
  standalone: false,
  template: `
    <div [ngClass]="className || defaultClass">
      <ng-content></ng-content>
    </div>
  `
})
export class CardTitle {
  @Input() className = '';
  protected defaultClass:string = "leading-none font-semibold";

}

