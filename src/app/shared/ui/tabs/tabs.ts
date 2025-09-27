import {Component, OnInit, Input} from '@angular/core';

export interface Tab {
  id: string;
  label: string;
  content: any;
}

@Component({
  selector: 'app-tabs',
  standalone: false,
  template: `
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        @for (tab of tabs; track tab.id) {
          <li class="me-2" role="presentation">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg"
              [ngClass]="{
                'text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500': isActive(tab.id),
                'text-gray-500 border-gray-100 hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:border-gray-700 dark:hover:text-gray-300': !isActive(tab.id)
                }"
              type="button"
              role="tab"
              (click)="selectTab(tab.id)"
            >
              {{ tab.label }}
            </button>
          </li>
        }
      </ul>
    </div>

    <div>
      @for (tab of tabs; track tab.id) {
        <div
          [id]="tab.id"
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          role="tabpanel"
          [hidden]="!isActive(tab.id)"
          [innerHTML]="tab.content"
        >
        </div>
      }

    </div>
  `
})
export class Tabs implements OnInit{
  @Input() tabs: Tab[] = [];
  activeTabId: string | null = null;
  ngOnInit() {
    if (this.tabs.length > 0) {
      this.activeTabId = this.tabs[0].id;
    }
  }
  selectTab(tabId: string) {
    this.activeTabId = tabId;
  }
  isActive(tabId: string): boolean {
    return this.activeTabId === tabId;
  }
}
