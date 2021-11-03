interface IBaseNavItem {
  order: number;
  path?: string;
  label: string;
}

export interface INavItem extends IBaseNavItem {
  icon: JSX.Element;
  toggleSidebar?: boolean;
  subItems?: ISubNavItem[];
}

export interface ISubNavItem extends IBaseNavItem {}
