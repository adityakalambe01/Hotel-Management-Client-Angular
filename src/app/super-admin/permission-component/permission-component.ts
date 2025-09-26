import { Component } from '@angular/core';
import {CardModule} from "../../shared/ui/card/card.module";
import {LucidIconWrapper} from "../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper";
import {icons} from "../../core/constants";

@Component({
  selector: 'app-permission-component',
    imports: [
        CardModule,
        LucidIconWrapper
    ],
  templateUrl: './permission-component.html',
  styleUrl: './permission-component.css'
})
export class PermissionComponent {
// Dummy roles data
  roles = [
    { name: 'Admin', status: 'active', userCount: 3 },
    { name: 'Manager', status: 'active', userCount: 5 },
    { name: 'Editor', status: 'inactive', userCount: 2 },
    { name: 'Viewer', status: 'active', userCount: 10 },
  ];

  // Dummy users data
  users = [
    { name: 'Alice', status: 'active' },
    { name: 'Bob', status: 'inactive' },
    { name: 'Charlie', status: 'active' },
    { name: 'Dave', status: 'active' },
  ];

  // Dummy permissions data
  permissions = [
    { name: 'Read' },
    { name: 'Write' },
    { name: 'Delete' },
    { name: 'Manage Users' },
  ];

  permissionStats = [
    {
      title: 'Total Roles',
      value: this.roles.length,
      subtitle: `${this.roles.filter(r => r.status === 'active').length} active roles`,
      icon: icons.sidebar.shield,
    },
    {
      title: 'Total Users',
      value: this.roles.reduce((sum, role) => sum + role.userCount, 0),
      subtitle: 'Across all roles',
      icon: icons.sidebar.users,
    },
    {
      title: 'Active Users',
      value: this.users.filter(u => u.status === 'active').length,
      subtitle: 'Currently active',
      icon: icons.userCheck,
    },
    {
      title: 'Permissions',
      value: this.permissions.length,
      subtitle: 'Available permissions',
      icon: icons.key,
    },
  ];
}
