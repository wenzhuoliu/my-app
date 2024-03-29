'use client';

import { FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './index.module.css';

interface Props {
  text: string;
  path: string;
}

const ZLink: FC<Props> = ({ text, path }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const isSeleted = currentPath === path || currentPath.startsWith(path);
  return (
    <div
      onClick={() => router.push(path)}
      className={`${styles.ZLink} ${isSeleted && styles.Selected}`}
    >
      {text}
    </div>
  );
};

export default ZLink;
