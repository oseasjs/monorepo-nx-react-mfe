export interface IMenuItem {
  key: string;
  label: string;
  path: string;
  breadcrumbs: string[];
}

export interface IMenu {
  menuItems: IMenuItem[];
}
