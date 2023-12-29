import { Button, Nav, TreeSelect, Typography } from '@douyinfe/semi-ui';
import { OnSelectedData } from '@douyinfe/semi-ui/lib/es/navigation';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigation, navigationToLabelMap } from 'src/constants/navigation';
import { MasterNavigation, masterNavigationToLabelMap } from 'src/constants/navigation/master';
import { TNavigation } from 'src/types/navigation';
import styles from './index.module.scss';

const { Text } = Typography;

export default function NavigationBar() {
  const [selectedNav, setSelectedNav] = useState<TNavigation>(Navigation.Pos);
  const navigate = useNavigate();
  const location = useLocation();
  const [, , removeCookie] = useCookies();

  const navigationItems = [
    { itemKey: Navigation.Pos, text: navigationToLabelMap[Navigation.Pos] },
    {
      text: navigationToLabelMap[Navigation.Master],
      itemKey: Navigation.Master,
      items: Object.values(MasterNavigation)?.map(masterNav => ({
        itemKey: `${Navigation.Master}/${masterNav}`,
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
    navigate(`/${itemKey}`);
    setSelectedNav(itemKey as TNavigation);
  }

  function handleLogout() {
    removeCookie('token');
    navigate('/login');
  }

  useEffect(() => {
    const { pathname = '' } = location;
    const selectedNav = (pathname.slice(1) as TNavigation) || Navigation.Pos;
    setSelectedNav(selectedNav);
  }, [location]);

  return (
    <Nav
      className={styles.nav}
      defaultOpenKeys={['master']}
      items={navigationItems}
      onSelect={handleChangeNav}
      selectedKeys={[selectedNav]}
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
