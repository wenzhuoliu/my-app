'use client';

import { useLayoutEffect, useState } from 'react';
import Logo from '../Logo';
import Profile from '../Profile';
import ZLink from '../ZLink';
import styles from './index.module.css';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';
import { ROOT_PATH } from '@/app/const/constants';

const LayoutHeader = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('zland-theme') === 'dark';
    }
    return true;
  });

  const toDarkTheme = () => {
    document.body.setAttribute('arco-theme', 'dark');
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('zland-theme', 'dark');
    }
    setIsDark(true);
  };
  const toLightTheme = () => {
    document.body.removeAttribute('arco-theme');
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('zland-theme', 'light');
    }
    setIsDark(false);
  };

  useLayoutEffect(() => {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('zland-theme') === 'dark'
    ) {
      document.body.setAttribute('arco-theme', 'dark');
    }
  }, []);

  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.HeaderStart}>
        <Logo isDark={isDark} />
      </div>
      <div className={styles.HeaderEnd}>
        <ZLink path={`/blog`} text='Blog' />
        <div>
          {isDark ? (
            <IconSunFill style={{ cursor: 'pointer' }} onClick={toLightTheme} />
          ) : (
            <IconMoonFill style={{ cursor: 'pointer' }} onClick={toDarkTheme} />
          )}
        </div>
        <Profile />
      </div>
    </header>
  );
};

export default LayoutHeader;
