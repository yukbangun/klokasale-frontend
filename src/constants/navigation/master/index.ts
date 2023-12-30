export enum EMasterNavigation {
  Trademark = 'trademark',
  Barang = 'barang',
  Unit = 'unit',
  Supplier = 'supplier',
  Pelanggan = 'pelanggan',
  KasDanBiaya = 'kas_dan_biaya',
  Piutang = 'piutang',
  Hutang = 'hutang',
}

export enum EMasterNavigationLabel {
  Trademark = 'Trademark',
  Barang = 'Barang',
  Unit = 'Unit (UOM)',
  Supplier = 'Supplier',
  Pelanggan = 'Pelanggan',
  KasDanBiaya = 'Kas & Biaya',
  Piutang = 'Piutang',
  Hutang = 'Hutang',
}

export const masterNavigationToLabelMap = {
  [EMasterNavigation.Trademark]: EMasterNavigationLabel.Trademark,
  [EMasterNavigation.Barang]: EMasterNavigationLabel.Barang,
  [EMasterNavigation.Unit]: EMasterNavigationLabel.Unit,
  [EMasterNavigation.Supplier]: EMasterNavigationLabel.Supplier,
  [EMasterNavigation.Pelanggan]: EMasterNavigationLabel.Pelanggan,
  [EMasterNavigation.KasDanBiaya]: EMasterNavigationLabel.KasDanBiaya,
  [EMasterNavigation.Piutang]: EMasterNavigationLabel.Piutang,
  [EMasterNavigation.Hutang]: EMasterNavigationLabel.Hutang,
};
