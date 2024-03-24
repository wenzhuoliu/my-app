import Blog from '@/app/_component/Blog';

const Page = async ({ params }: { params: { type: string; id: string } }) => {
  const { type, id } = params;
  const path = `${process.cwd()}/src/blog/${type}/${id}.md`;
  return <Blog path={path} />;
};

export default Page;
