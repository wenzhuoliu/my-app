'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import styles from './index.module.css';
import WhiteLogoSvg from './logo-white.svg';
import BlackLogoSvg from './logo-black.svg';

interface Props {
  isDark: boolean;
}

const Logo: FC<Props> = ({ isDark }) => {
  const router = useRouter();

  return (
    <div className={styles.Logo} onClick={() => router.push('/')}>
      <NextImage
        src={isDark ? WhiteLogoSvg : BlackLogoSvg}
        alt='ZLAND Logo'
        sizes='48x48'
      />
    </div>
  );
};

export default Logo;
