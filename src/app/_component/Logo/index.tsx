'use client';

import NextImage from 'next/image';
import styles from './index.module.css';
import LogoSvg from './logo.svg';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div className={styles.Logo} onClick={() => router.push('/')}>
      <NextImage src={LogoSvg} alt='ZLAND Logo' sizes='48x48' />
    </div>
  );
};

export default Logo;
