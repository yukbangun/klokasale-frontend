export enum ENavigation {
  Pos = 'pos',
  Master = 'master',
  User = 'user',
}

export enum ENavigationLabel {
  Pos = 'POS',
  Master = 'Master',
  User = 'User',
}

export const navigationToLabelMap = {
  [ENavigation.Pos]: ENavigationLabel.Pos,
  [ENavigation.Master]: ENavigationLabel.Master,
  [ENavigation.User]: ENavigationLabel.User,
};
