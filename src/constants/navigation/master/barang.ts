export enum BarangNavigation {
  Merk = 'merk',
  SatuanBarang = 'satuan_barang',
  Barang = 'barang',
}

export enum BarangNavigationLabel {
  Merk = 'Merk',
  SatuanBarang = 'Satuan Barang',
  Barang = 'Barang',
}

export const barangNavigationToLabelMap = {
  [BarangNavigation.Merk]: BarangNavigationLabel.Merk,
  [BarangNavigation.SatuanBarang]: BarangNavigationLabel.SatuanBarang,
  [BarangNavigation.Barang]: BarangNavigationLabel.Barang,
};
