import {
  AirVent,
  BatteryPlus,
  Bed,
  BedDouble,
  BookCheck,
  BrushCleaning,
  Building2,
  Calendar,
  ChartColumn,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CreditCard,
  DollarSign,
  DoorOpen,
  Eclipse,
  Ellipsis,
  EllipsisVertical,
  Eye,
  EyeOff,
  Funnel,
  GlassWater,
  Heater,
  Hotel,
  HousePlug,
  Key,
  LayoutDashboard,
  Lock,
  LockOpen,
  LogOut,
  Mail, Microwave,
  MonitorCog,
  MonitorSmartphone,
  Palette,
  Percent,
  Phone,
  Refrigerator,
  Search,
  Settings,
  Shield, Shredder,
  SoapDispenserDroplet,
  Toilet,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
  TriangleAlert, Tv,
  User,
  UserCheck,
  UserRoundCog,
  Users, Waves,
  Wifi,
  Grid2X2,
  DoorClosed,
  Vault,
  Coffee,
  CookingPot,
  Lamp,
  MapPinHouse,
  CircleParking,
  CableCar,
  Shirt,
  ShieldUser,
  AlignHorizontalSpaceBetween,
  Antenna,
  Luggage,
  PawPrint,
  Cigarette
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
  userCheck: UserCheck,
  search: Search,
  filter: Funnel,
  ellipsis:{
    horizontal: Ellipsis,
    vertical: EllipsisVertical
  },
  theme: Palette,
  amenityCategory: {
    base: HousePlug,
    categories:{
      basic:{
        base: BookCheck,
        amenities:{
          wifi: Wifi,
          ac: AirVent,
          heating: Heater,
          electricityBackup: BatteryPlus,
          housekeeping: BrushCleaning,
          toiletries: SoapDispenserDroplet,
          hotWater: Waves,
          drinkingWater: GlassWater,
          linenNTowels: BedDouble,
          ironNBoard: Shredder
        }
      },
      room:{
        base: DoorOpen,
        amenities: {
          television: Tv,
          miniFridge: Refrigerator,
          microwave: Microwave,
          workDesk: MonitorSmartphone,
          balcony: Grid2X2,
          wardrobe: DoorClosed,
          safe: Vault,
          coffeeMaker: Coffee,
          kitchenette: CookingPot,
          bedsideLap: Lamp,
        }
      },
      property:{
        base: MapPinHouse,
        amenities: {
          parking: CircleParking,
          elevator: CableCar,
          laundry: Shirt,
          security: ShieldUser,
          reception: User,
          garden: AlignHorizontalSpaceBetween,
          terrace: Antenna,
          luggageStorage: Luggage,
          petFriendly: PawPrint,
          smokingArea: Cigarette
        }
      }
    }
  },
  hotelCategory: Hotel,

}
