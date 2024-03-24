import { FC } from 'react';
import { Dropdown, Image, MenuProps } from 'antd';
import { UserOutlined, MailOutlined, LogoutOutlined } from '@ant-design/icons';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { LogOut } from '../../clientActions';

const Profile: FC = async () => {
  const session = await getServerSession(authOptions);
  const dropDownItems: MenuProps['items'] = [
    {
      key: 0,
      label: <div>{session?.user?.name}</div>,
      icon: <UserOutlined />,
    },
    {
      key: 1,
      label: <div>{session?.user?.email}</div>,
      icon: <MailOutlined />,
    },
    {
      key: 2,
      label: <div onClick={LogOut}>Logout</div>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Dropdown trigger={['click']} menu={{ items: dropDownItems }}>
      <Image
        src={session?.user?.image as string}
        width={32}
        preview={false}
        style={{ cursor: 'pointer' }}
      />
    </Dropdown>
  );
};

export default Profile;
