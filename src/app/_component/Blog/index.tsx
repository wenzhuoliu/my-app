import { FC } from 'react';
import styles from './index.module.css';
import MarkDown from 'react-markdown';
import fs from 'fs/promises';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  path: string;
}

const Blog: FC<Props> = async ({ path }) => {
  const markdown = await fs.readFile(path, 'utf-8');
  return (
    <div className={styles.BlogContainer}>
      <MarkDown
        children={markdown}
        components={{
          code: (props) => {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                PreTag='div'
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={atomDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Blog;
