'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Logo from '../Logo';
import Profile from '../Profile';
import ZLink from '../ZLink';
import styles from './index.module.css';
import { IconMoonFill, IconSunFill } from '@arco-design/web-react/icon';

const LayoutHeader = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('zland-theme') === 'dark'
  );
  const toDarkTheme = () => {
    document.body.setAttribute('arco-theme', 'dark');
    localStorage.setItem('zland-theme', 'dark');
    setIsDark(true);
  };
  const toLightTheme = () => {
    document.body.removeAttribute('arco-theme');
    localStorage.setItem('zland-theme', 'light');
    setIsDark(false);
  };

  useLayoutEffect(() => {
    if (localStorage.getItem('zland-theme') === 'dark') {
      document.body.setAttribute('arco-theme', 'dark');
    }
  }, []);

  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.HeaderStart}>
        <Logo isDark={isDark} />
      </div>
      <div className={styles.HeaderEnd}>
        <ZLink path='/blog' text='Blog' />
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
