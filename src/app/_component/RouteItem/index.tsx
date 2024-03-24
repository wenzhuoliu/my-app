'use client';

import { FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './index.module.css';

interface Props {
  text?: string;
  path?: string;
}

const RouteItem: FC<Props> = ({ text, path }) => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div
      onClick={() => router.push(path || '/')}
      className={`
        ${styles.RouteItem} 
        ${currentPath === path && styles.Selected}
      `}
    >
      {text}
    </div>
  );
};

export default RouteItem;
