export enum BarangNavigation {
  Trademark = 'trademark',
  Unit = 'unit',
  Barang = 'barang',
}

export enum BarangNavigationLabel {
  Trademark = 'Trademark',
  Unit = 'Unit (UOM)',
  Barang = 'Barang',
}

export const barangNavigationToLabelMap = {
  [BarangNavigation.Trademark]: BarangNavigationLabel.Trademark,
  [BarangNavigation.Unit]: BarangNavigationLabel.Unit,
  [BarangNavigation.Barang]: BarangNavigationLabel.Barang,
};
