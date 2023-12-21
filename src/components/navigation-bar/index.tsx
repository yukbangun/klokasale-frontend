import { Button, Nav, TreeSelect, Typography } from '@douyinfe/semi-ui';
import styles from './index.module.scss';
import { OnSelectedData } from '@douyinfe/semi-ui/lib/es/navigation';
import { Navigation, navigationToLabelMap } from 'src/constants/navigation';
import { MasterNavigation, masterNavigationToLabelMap } from 'src/constants/navigation/master';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TNavigation } from 'src/types/navigation';
import { isNullish } from 'src/utils/nullish';
import { LocalStorageKey } from 'src/constants/local-storage';

const { Text } = Typography;

export default function NavigationBar() {
  const [selectedNav, setSelectedNav] = useState<TNavigation>(Navigation.Pos);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

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
    searchParams.set('nav', `${itemKey}`);
    setSearchParams(searchParams);
  }

  function handleLogout() {
    localStorage.removeItem(LocalStorageKey.BearerToken);
    navigate('/login');
  }

  useEffect(() => {
    const nav = searchParams.get('nav');
    if (!isNullish(nav)) {
      setSelectedNav(nav as TNavigation);
    }
  }, [searchParams]);

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
      footer={{
        children: (
          <Button className={styles.logoutBtn}>
            <Text strong>Logout</Text>
          </Button>
        ),
        onClick: handleLogout,
      }}
    />
  );
}
