export enum MasterNavigation {
  Trademark = 'trademark',
  Barang = 'barang',
  Unit = 'unit',
  Supplier = 'supplier',
  Pelanggan = 'pelanggan',
  KasDanBiaya = 'kas_dan_biaya',
  Piutang = 'piutang',
  Hutang = 'hutang',
}

export enum MasterNavigationLabel {
  Trademark = 'Trademark',
  Barang = 'Barang',
  Unit = 'Unit',
  Supplier = 'Supplier',
  Pelanggan = 'Pelanggan',
  KasDanBiaya = 'Kas & Biaya',
  Piutang = 'Piutang',
  Hutang = 'Hutang',
}

export const masterNavigationToLabelMap = {
  [MasterNavigation.Trademark]: MasterNavigationLabel.Trademark,
  [MasterNavigation.Barang]: MasterNavigationLabel.Barang,
  [MasterNavigation.Unit]: MasterNavigationLabel.Unit,
  [MasterNavigation.Supplier]: MasterNavigationLabel.Supplier,
  [MasterNavigation.Pelanggan]: MasterNavigationLabel.Pelanggan,
  [MasterNavigation.KasDanBiaya]: MasterNavigationLabel.KasDanBiaya,
  [MasterNavigation.Piutang]: MasterNavigationLabel.Piutang,
  [MasterNavigation.Hutang]: MasterNavigationLabel.Hutang,
};
