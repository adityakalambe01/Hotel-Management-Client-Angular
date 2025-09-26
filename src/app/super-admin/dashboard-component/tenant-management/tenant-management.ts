import { Component } from '@angular/core';
import {CardModule} from '../../../shared/ui/card/card.module';
import {icons} from '../../../core/constants';
import {LucidIconWrapper} from '../../../shared/components/lucid-icon-wrapper/lucid-icon-wrapper';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tenant-management',
  imports: [CardModule, LucidIconWrapper, CommonModule],
  templateUrl: './tenant-management.html',
  styleUrl: './tenant-management.css'
})
export class TenantManagement {

  protected readonly icons = icons;

  protected readonly tenants = [
    {
      id: 1,
      name: "Luxury Hotels Group",
      email: "admin@luxuryhotels.com",
      hotels: 12,
      revenue: 45000,
      status: "active",
      plan: "Enterprise",
      joinDate: "2023-01-15",
    },
    {
      id: 2,
      name: "City Center Hotels",
      email: "manager@citycentral.com",
      hotels: 8,
      revenue: 38000,
      status: "active",
      plan: "Professional",
      joinDate: "2023-02-20",
    },
    {
      id: 3,
      name: "Resort Paradise",
      email: "info@resortparadise.com",
      hotels: 5,
      revenue: 32000,
      status: "active",
      plan: "Professional",
      joinDate: "2023-03-10",
    },
    {
      id: 4,
      name: "Business Suites",
      email: "contact@bizsuites.com",
      hotels: 15,
      revenue: 28000,
      status: "suspended",
      plan: "Basic",
      joinDate: "2023-01-05",
    },
    {
      id: 5,
      name: "Boutique Hotels Co",
      email: "hello@boutique.com",
      hotels: 3,
      revenue: 18000,
      status: "active",
      plan: "Basic",
      joinDate: "2023-04-12",
    },
  ]
}
