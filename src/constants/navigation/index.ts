import { MasterNavigation, masterNavigationToLabelMap } from './master';

export enum Navigation {
  Pos = 'pos',
  Master = 'master',
}

export enum NavigationLabel {
  Pos = 'POS',
  Master = 'Master',
}

export const navigationToLabelMap = {
  [Navigation.Pos]: NavigationLabel.Pos,
  [Navigation.Master]: NavigationLabel.Master,
};
