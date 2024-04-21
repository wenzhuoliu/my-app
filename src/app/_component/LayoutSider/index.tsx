'use client';

import { FC } from 'react';
import { Menu } from '@arco-design/web-react';
import { useRouter } from 'next/navigation';
import styles from './index.module.css';

export interface _MenuItem {
  title: string;
  path?: string;
  subMenu?: _MenuItem[];
}

interface Props {
  dataSource: _MenuItem[];
}

const renderMenuItem = (item: _MenuItem) => {
  const router = useRouter();
  if (item.subMenu && item.subMenu.length > 0) {
    return (
      <Menu.SubMenu key={item.title} title={item.title}>
        {item.subMenu.map((_item, _index) => renderMenuItem(_item))}
      </Menu.SubMenu>
    );
  } else {
    return (
      <Menu.Item
        key={item.title}
        onClick={() => router.push(item?.path || '/')}
      >
        {item.title}
      </Menu.Item>
    );
  }
};

const LayoutSider: FC<Props> = ({ dataSource }) => {
  return (
    <Menu
      className={styles.Sider}
      levelIndent={5}
      defaultOpenKeys={[dataSource[0].title]}
      defaultSelectedKeys={[dataSource[0]!.subMenu![0]!.title]}
    >
      {dataSource.map((item) => renderMenuItem(item))}
    </Menu>
  );
};

export default LayoutSider;
