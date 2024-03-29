import styles from './layout.module.css';
import fs from 'fs/promises';
import ZLink from '@/app/_component/ZLink';

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  const subs = await fs.readdir(`${process.cwd()}/src/blog/`, {
    recursive: true,
  });
  const routePaths = subs
    .filter((item) => {
      return item.split('/').length != 1;
    })
    .map((item) => {
      const [type, id] = item.split('.')[0].split('/');
      return {
        type,
        id,
      };
    });
  return (
    <div className={styles.BlogLayoutContainer}>
      <div className={styles.Sider}>
        {routePaths.map((item, index) => (
          <ZLink
            key={index}
            path={`/blog/${item.type}/${item.id}`}
            text={item.id}
          />
        ))}
      </div>
      <div className={styles.SubContent}>{children}</div>
    </div>
  );
};

export default BlogLayout;
