import styles from './layout.module.css';
import fs from 'fs/promises';
import LayoutSider, { _MenuItem } from '../_component/LayoutSider';
import path from 'path';

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  const subs = await fs.readdir(`${process.cwd()}/src/blog/`, {
    recursive: true,
  });
  const map: Record<string, _MenuItem[]> = {};
  subs.forEach((item) => {
    const parseRes = path.parse(item);
    if (parseRes.ext === '' && !map[parseRes.name]) {
      map[parseRes.name] = [];
    } else {
      if (map[parseRes.dir]) {
        map[parseRes.dir].push({
          title: parseRes.name,
          path: `./blog/${parseRes.dir}/${parseRes.name}`,
        });
      } else {
        map[parseRes.dir] = [];
      }
    }
  });
  const menuDataSource: _MenuItem[] = [];
  Object.entries(map).forEach(([key, subs]) => {
    menuDataSource.push({
      title: key,
      subMenu: subs,
    });
  });
  return (
    <div className={styles.BlogLayoutContainer}>
      <LayoutSider dataSource={menuDataSource} />
      <div className={styles.SubContent}>{children}</div>
    </div>
  );
};

export default BlogLayout;
