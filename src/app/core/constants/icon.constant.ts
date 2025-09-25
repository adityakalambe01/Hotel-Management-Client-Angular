import {
  Bed,
  Building2, Calendar, ChartColumn, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CreditCard, DollarSign,
  Eye,
  EyeOff, Key,
  LayoutDashboard,
  Lock,
  LockOpen, LogOut,
  Mail, MonitorCog, Percent,
  Phone, Settings, Shield, TrendingDown, TrendingUp, TrendingUpDown, TriangleAlert,
  User, UserCheck, UserRoundCog,
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
  },
  logout:LogOut,
  bed: Bed,
  calender: Calendar,
  percentage: Percent,
  trending:{
    up: TrendingUp,
    down: TrendingDown,
    upDown: TrendingUpDown
  },
  alert:{
    triangle: TriangleAlert
  },
  key:Key,
  userCheck: UserCheck
}
