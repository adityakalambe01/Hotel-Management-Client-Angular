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
  Cigarette,
  Gem,
  Dumbbell,
  Bubbles,
  Hospital,
  Wind,
  Bath,
  Gamepad2,
  Swords,
  LandPlot,
  Space,
  LibraryBig,
  Soup,
  HandPlatter,
  Wine,
  Utensils,
  Caravan,
  CupSoda,
  UtensilsCrossed,
  Landmark,
  Columns4,
  Store,
  Beer,
  Handshake,
  BriefcaseBusiness,
  Presentation,
  Printer,
  Network,
  ScanEye,
  Accessibility,
  BookA,
  Ear,
  CircleStar,
  Car,
  IdCardLanyard,
  Building,
  CirclePlus,
  CarFront,
  BottleWine,
  ConciergeBell
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
      },
      leisureNWellness:{
        base: Gem,
        amenities:{
          swimmingPool: Waves,
          gym: Dumbbell,
          spa: Bubbles,
          sauna: Wind,
          Jacuzzi: Bath,
          gameRoom: Gamepad2,
          playground: Swords,
          sportsCourt: LandPlot,
          yogaArea: Space,
          library: LibraryBig
        }
      },
      foodNBeverage:{
        base: HandPlatter,
        amenities:{
          restaurant: Utensils,
          bar: Wine,
          breakfast: Coffee,
          roomService: Caravan,
          coffeeShop: CupSoda,
          buffet: UtensilsCrossed,
          banquetHall: Landmark,
          BBQFacilities: Columns4,
          vendingMachine: Store,
          miniBar: Beer,
        }
      },
      businessNEvents:{
        base: Handshake,
        amenities:{
          meetingRoom: BriefcaseBusiness,
          conferenceHall: Presentation,
          businessCenter: Printer,
          coworkingSpace: Users,
          highSpeedInternet: Network,
        }
      },
      accessibility:{
        base: Accessibility,
        amenities:{
          wheelchairAccessible: Accessibility,
          accessibilityBathroom: Bath,
          brailleSignage: BookA,
          hearingAssistance: Ear,
          elevatorAccess: CableCar
        }
      },
      luxuryNPremium:{
        base: CircleStar,
        amenities:{
          valetParking: Car,
          privatePool: Waves,
          butlerService: IdCardLanyard,
          rooftopLounge: Building,
          helipad: CirclePlus,
          limousineService: CarFront,
          wineCellar: BottleWine,
          personalConcierge: ConciergeBell
        }
      }
    }
  },
  hotelCategory: Hotel,

}
