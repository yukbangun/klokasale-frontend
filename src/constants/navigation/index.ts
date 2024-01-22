export enum ENavigation {
  Pos = 'pos',
  Master = 'master',
  User = 'user',
  Shop = 'shop',
}

export enum ENavigationLabel {
  Pos = 'POS',
  Master = 'Master',
  User = 'User',
  Shop = 'Toko',
}

export const navigationToLabelMap = {
  [ENavigation.Pos]: ENavigationLabel.Pos,
  [ENavigation.Master]: ENavigationLabel.Master,
  [ENavigation.User]: ENavigationLabel.User,
  [ENavigation.Shop]: ENavigationLabel.Shop,
};
