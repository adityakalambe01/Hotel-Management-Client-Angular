import {Component, Input} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ISidebarItem} from '../../../core/models';
import {CommonModule} from '@angular/common';
import {icons} from '../../../core/constants';
import {LucidIconWrapper} from '../lucid-icon-wrapper/lucid-icon-wrapper';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterOutlet, RouterLink, CommonModule, LucidIconWrapper],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css'
})
export class SidebarComponent {
  protected iconSize:number = 19;
  @Input() items: ISidebarItem[] = [];

  toggleDropdown(item: ISidebarItem) {
    item['open'] = !item['open'];
  }

  protected readonly icons = icons;
}
