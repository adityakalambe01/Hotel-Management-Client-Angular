import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  Output,
  EventEmitter,
  QueryList
} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  template: `
    <li class="me-2" role="presentation">
        <button
            class="inline-block p-4 border-b-2 rounded-t-lg"
            [ngClass]="{
                'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500': active,
                'text-gray-500 border-gray-100 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:border-gray-700 dark:hover:text-gray-300': !active
            }"
            type="button"
            role="tab"
            (click)="selectTab()"
        >
            {{ label }}
        </button>
    </li>
  `
})
export class Tab {
  @Input() id!: string;
  @Input() label!: string;
  @Input() active = false;

  constructor(private group: TabGroup) {}

  selectTab() {
    this.group.onSelect(this.id);
  }
}

@Component({
  selector: 'app-tab-panel',
  standalone: false,
  template: `
    <div
        class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        role="tabpanel"
        [hidden]="!active"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class TabPanel {
  @Input() id!: string;
  @Input() active = false;
}
@Component({
  selector: 'app-tab-group',
  standalone: false,
  template: `
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
            <ng-content select="app-tab"></ng-content>
        </ul>
    </div>
    <div>
        <ng-content select="app-tab-panel"></ng-content>
    </div>
    `
})
export class TabGroup implements AfterContentInit {
  @Input() activeId: string | null = null;
  @Output() activeChange = new EventEmitter<string>();

  @ContentChildren(Tab) tabs!: QueryList<Tab>;
  @ContentChildren(TabPanel) panels!: QueryList<TabPanel>;

  ngAfterContentInit() {
    if (!this.activeId && this.tabs.first) {
      this.activeId = this.tabs.first.id;
    }
    this.updateActive();
    // react if tabs/panels list changes dynamically
    this.tabs.changes.subscribe(() => this.updateActive());
    this.panels.changes.subscribe(() => this.updateActive());
  }

  onSelect(id: string) {
    this.activeId = id;
    this.updateActive();
    this.activeChange.emit(id);
  }

  private updateActive() {
    this.tabs.forEach(tab => (tab.active = tab.id === this.activeId));
    this.panels.forEach(panel => (panel.active = panel.id === this.activeId));
  }
}
