import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  h2: ({ children }) => {
    return <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>;
  },
  'p.inlineCode': (props) => (
    <code {...props} style={{ backgroundColor: 'lightgray' }}></code>
  ),
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
