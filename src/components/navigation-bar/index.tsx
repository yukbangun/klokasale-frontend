import { Nav } from '@douyinfe/semi-ui';
import styles from './index.module.scss';

export default function NavigationBar() {
  return (
    <Nav
      className={styles.nav}
      defaultOpenKeys={['master']}
      items={[
        { itemKey: 'pos', text: 'POS' },
        {
          text: 'Master',
          itemKey: 'master',
          items: [
            { itemKey: 'barang', text: 'Barang' },
            { itemKey: 'supplier', text: 'Supplier' },
            { itemKey: 'pelanggan', text: 'Pelanggan' },
            { itemKey: 'kas_dan_biaya', text: 'Kas & Biaya' },
            { itemKey: 'piutang', text: 'Piutang' },
            { itemKey: 'hutang', text: 'Hutang' },
          ],
        },
      ]}
      onSelect={key => console.log(key)}
      header={{
        text: 'KlokaSale',
      }}
    />
  );
}
