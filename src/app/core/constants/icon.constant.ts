import {
  AtSign,
  Building2, ChartColumn, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CreditCard, DollarSign,
  Eye,
  EyeOff,
  LayoutDashboard,
  Lock,
  LockOpen,
  Mail, MonitorCog,
  Phone, Settings, Shield,
  User, UserCog, UserRoundCog,
  Users
} from 'lucide-angular';


export const icons = {
  eye:{
    on: Eye,
    off: EyeOff
  },
  email: Mail,
  phone: Phone,
  user: User,
  password: {
    hidden: Lock,
    visible: LockOpen
  },
  organization: Building2,
  settings: {
    normal: Settings,
    system: MonitorCog,
    profile: UserRoundCog
  },
  sidebar:{
    dashboard: LayoutDashboard,
    users: Users,
    hotels: Building2,
    revenue: DollarSign,
    analytics: ChartColumn,
    card: CreditCard,
    shield: Shield
  },
  arrowDirection:{
    up: ChevronUp,
    down: ChevronDown,
    left: ChevronLeft,
    right: ChevronRight,
  }
}
