import { Tabs } from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BarangBarang from 'src/components/master/barang/barang';
import BarangTrademark from 'src/components/master/barang/trademark';
import BarangUnit from 'src/components/master/barang/unit';
import { BarangNavigation, BarangNavigationLabel } from 'src/constants/navigation/master/barang';
import { isNullish } from 'src/utils/nullish';

export default function MasterBarangPage() {
  return <div>master barang</div>;
}
