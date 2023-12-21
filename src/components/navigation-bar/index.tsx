import { Nav, TreeSelect } from '@douyinfe/semi-ui';
import styles from './index.module.scss';

export default function NavigationBar() {
  const treeData = [
    {
      label: 'Store Group 1',
      value: 'store_group_1',
      key: 'store_group_1',
      disabled: true,
      children: [
        {
          label: 'Store A',
          value: 'store_a',
          key: 'store_a',
        },
        {
          label: 'Store B',
          value: 'store_b',
          key: 'store_b',
        },
      ],
    },
    {
      label: 'Store Group 2',
      value: 'store_group_2',
      key: 'store_group_2',
      disabled: true,
      children: [
        {
          label: 'Store C',
          value: 'store_c',
          key: 'store_c',
        },
        {
          label: 'Store D',
          value: 'store_d',
          key: 'store_d',
        },
      ],
    },
  ];
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
        children: (
          <TreeSelect
            style={{ width: 300 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={treeData}
            placeholder="Please select"
          />
        ),
      }}
    />
  );
}
