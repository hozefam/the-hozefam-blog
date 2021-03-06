import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code } from './src/components/pageElements/Code';

const components = {
  h2: ({ children }) => {
    return <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>;
  },
  'p.inlineCode': (props) => (
    <code {...props} style={{ backgroundColor: 'lightgray' }}></code>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
