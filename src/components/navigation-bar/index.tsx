import { Nav, TreeSelect } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { OnSelectedData } from '@douyinfe/semi-ui/lib/es/navigation';
import { Navigation, navigationToLabelMap } from 'src/constants/navigation';
import { MasterNavigation, masterNavigationToLabelMap } from 'src/constants/navigation/master';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TNavigation } from 'src/types/navigation';
import { isNullish } from 'src/utils/nullish';

export default function NavigationBar() {
  const [selectedNav, setSelectedNav] = useState<TNavigation>(Navigation.Pos);
  const navigate = useNavigate();
  const navigationItems = [
    { itemKey: Navigation.Pos, text: navigationToLabelMap[Navigation.Pos] },
    {
      text: navigationToLabelMap[Navigation.Master],
      itemKey: Navigation.Master,
      items: Object.values(MasterNavigation)?.map(masterNav => ({
        itemKey: masterNav,
        text: masterNavigationToLabelMap[masterNav],
      })),
    },
  ];

  const storeGroupTreeData = [
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

  function handleChangeNav(key: OnSelectedData) {
    const { itemKey } = key;
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('nav', `${itemKey}`);
    navigate(`/?${urlParams}`);
    setSelectedNav(itemKey as TNavigation);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nav = urlParams.get('nav');
    const hasNav = !isNullish(nav);
    if (hasNav) {
      setSelectedNav(nav as TNavigation);
    }
  }, []);

  return (
    <Nav
      className={styles.nav}
      defaultOpenKeys={['master']}
      items={navigationItems}
      onSelect={handleChangeNav}
      defaultSelectedKeys={[selectedNav]}
      header={{
        children: (
          <TreeSelect
            style={{ width: 300 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={storeGroupTreeData}
            placeholder="Please select"
          />
        ),
      }}
    />
  );
}
