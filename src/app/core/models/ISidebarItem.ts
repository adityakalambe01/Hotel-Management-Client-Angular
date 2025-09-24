export interface ISidebarItem {
  label: string;
  icon?: any;
  route?: string;
  children?: ISidebarItem[];
  badge?: string;
  open?: boolean;
}
