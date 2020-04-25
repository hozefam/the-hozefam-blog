import React from 'react';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import Dump from '../components/Dump';

export default ({ data }) => {
  return (
    <>
      <Layout>
        <Dump youyou={data} />
        {data.allMdx.nodes.map(({ excerpt, frontmatter }) => {
          return (
            <>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </>
          );
        })}
      </Layout>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 10)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;
