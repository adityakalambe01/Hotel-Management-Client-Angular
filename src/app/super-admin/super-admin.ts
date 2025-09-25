import { Component } from '@angular/core';
import {SidebarComponent} from '../shared/components/sidebar-component/sidebar-component';
import {ISidebarItem} from '../core/models';
import {icons} from '../core/constants';

@Component({
  selector: 'app-super-admin-layout-component',
  imports: [SidebarComponent],
  template: '<app-sidebar-component [items]="items"/>'
})
export class SuperAdmin {
  items: ISidebarItem[] = [
    { label: 'Dashboard', icon: icons.sidebar.dashboard, route: '/' },
    { label: 'Tenants', icon: icons.sidebar.users, route: '/tenants' },
    { label: 'Hotels', icon: icons.sidebar.hotels, route: '/hotels' },
    { label: 'Revenue', icon: icons.sidebar.revenue, route: '/revenue' },
    { label: 'Analytics', icon: icons.sidebar.analytics, route: '/analytics' },
    { label: 'Subscriptions', icon: icons.sidebar.card, route: '/subscriptions' },
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
}
