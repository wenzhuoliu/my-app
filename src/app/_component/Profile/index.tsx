'use client';

import { FC } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Dropdown, Avatar, Menu } from '@arco-design/web-react';
import { IconEmail, IconUser, IconExport } from '@arco-design/web-react/icon';

const Profile: FC = () => {
  const { data: session } = useSession();

  const dropList = (
    <Menu>
      <Menu.Item key='1'>
        <IconUser style={{ marginRight: 10 }} />
        <span>{session?.user?.name}</span>
      </Menu.Item>
      <Menu.Item key='2'>
        <IconEmail style={{ marginRight: 10 }} />
        <span>{session?.user?.email}</span>
      </Menu.Item>
      <Menu.Item key='3' onClick={signOut} style={{ color: 'red' }}>
        <IconExport style={{ marginRight: 10 }} />
        <span>LogOut</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown droplist={dropList} trigger='click'>
      <Avatar
        shape='circle'
        size={32}
        className='cursor-pointer'
        style={{ cursor: 'pointer' }}
      >
        <img src={session?.user?.image!} />
      </Avatar>
    </Dropdown>
  );
};

export default Profile;
