import { FC } from 'react';
import styles from './index.module.css';
import MarkDown from 'react-markdown';
import fs from 'fs/promises';

interface Props {
  path: string;
}

const Blog: FC<Props> = async ({ path }) => {
  const markdown = await fs.readFile(path, 'utf-8');
  return (
    <div className={styles.BlogContainer}>
      <MarkDown>{markdown}</MarkDown>
    </div>
  );
};

export default Blog;
