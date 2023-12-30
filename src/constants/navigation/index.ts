import { EMasterNavigation, masterNavigationToLabelMap } from './master';

export enum ENavigation {
  Pos = 'pos',
  Master = 'master',
}

export enum ENavigationLabel {
  Pos = 'POS',
  Master = 'Master',
}

export const navigationToLabelMap = {
  [ENavigation.Pos]: ENavigationLabel.Pos,
  [ENavigation.Master]: ENavigationLabel.Master,
};
