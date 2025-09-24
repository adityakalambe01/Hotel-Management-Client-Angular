import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ISidebarItem} from '../../core/models';
import {CommonModule} from '@angular/common';
import {icons} from '../../core/constants/icon.constant';
import {LucidIconWrapper} from '../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterOutlet, RouterLink, CommonModule, LucidIconWrapper],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css'
})
export class SidebarComponent {
  protected iconSize:number = 19;
  items: ISidebarItem[] = [
    { label: 'Dashboard', icon: icons.sidebar.dashboard, route: '/dashboard' },
    {
      label: 'Settings',
      icon: icons.settings.normal,
      children: [
        { label: 'System', route: '/settings/system', icon: icons.settings.system },
        { label: 'Profile', route: '/settings/profile', icon: icons.settings.profile }
      ]
    },
    { label: 'Kanban', icon: icons.sidebar.analytics, badge: 'Pro', route: '/kanban' },
    { label: 'Inbox', icon: icons.sidebar.card, badge: '3', route: '/inbox' },
    { label: 'Users', icon: icons.sidebar.users, route: '/users' },
  ];

  toggleDropdown(item: ISidebarItem) {
    item['open'] = !item['open'];
  }

  protected readonly icons = icons;
}
