import Blog from '@/app/_component/Blog';
import styles from './index.module.css';

export function generateStaticParams() {
  return [
    {
      type: 'golang',
      id: 'First',
    },
    {
      type: 'golang',
      id: 'Second',
    },
  ];
}

const BlogPage = async ({
  params,
}: {
  params: { type: string; id: string };
}) => {
  const { type, id } = params;
  const path = `${process.cwd()}/src/blog/${type}/${id}.md`;

  return (
    <div className={styles.BlogPageContainer}>
      <Blog path={path} />
    </div>
  );
};

export default BlogPage;
