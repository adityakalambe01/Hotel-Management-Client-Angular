import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ISidebarItem} from '../../core/models';
import {CommonModule} from '@angular/common';
import {icons} from '../../core/constants';
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
    { label: 'Tenants', icon: icons.sidebar.users, route: '/dashboard' },
    { label: 'Hotels', icon: icons.sidebar.hotels, route: '/dashboard' },
    { label: 'Revenue', icon: icons.sidebar.revenue, route: '/dashboard' },
    { label: 'Analytics', icon: icons.sidebar.analytics, route: '/dashboard' },
    { label: 'Subscriptions', icon: icons.sidebar.card, route: '/dashboard' },
    {
      label: 'Settings',
      icon: icons.settings.normal,
      children: [
        { label: 'System', icon: icons.settings.system, route: '/settings/system' },
        { label: 'Profile', icon: icons.settings.profile, route: '/settings/profile' }
      ]
    },
    { label: 'Kanban', icon: icons.sidebar.analytics, badge: 'Pro', route: '/kanban' },
    { label: 'Inbox', icon: icons.email, badge: '3', route: '/inbox' },
    { label: 'Logout', icon: icons.logout, route: '/logout' },
  ];

  toggleDropdown(item: ISidebarItem) {
    item['open'] = !item['open'];
  }

  protected readonly icons = icons;
}
