export enum MasterNavigation {
  Barang = 'barang',
  Supplier = 'supplier',
  Pelanggan = 'pelanggan',
  KasDanBiaya = 'kas_dan_biaya',
  Piutang = 'piutang',
  Hutang = 'hutang',
}

export enum MasterNavigationLabel {
  Barang = 'Barang',
  Supplier = 'Supplier',
  Pelanggan = 'Pelanggan',
  KasDanBiaya = 'Kas & Biaya',
  Piutang = 'Piutang',
  Hutang = 'Hutang',
}

export const masterNavigationToLabelMap = {
  [MasterNavigation.Barang]: MasterNavigationLabel.Barang,
  [MasterNavigation.Supplier]: MasterNavigationLabel.Supplier,
  [MasterNavigation.Pelanggan]: MasterNavigationLabel.Pelanggan,
  [MasterNavigation.KasDanBiaya]: MasterNavigationLabel.KasDanBiaya,
  [MasterNavigation.Piutang]: MasterNavigationLabel.Piutang,
  [MasterNavigation.Hutang]: MasterNavigationLabel.Hutang,
};
