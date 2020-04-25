import React from 'react';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Dump from '../components/Dump';
import styled from 'styled-components';

const IndexWrapper = styled.main``;

const PostWrapper = styled.main``;

export default ({ data }) => {
  return (
    <>
      <Layout>
        <IndexWrapper>
          {/* <Dump youyou={data} /> */}
          {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
            return (
              <PostWrapper key={id}>
                <Link to={fields.slug}>
                  <h1>{frontmatter.title}</h1>
                  <p>{frontmatter.date}</p>
                  <p>{excerpt}</p>
                </Link>
              </PostWrapper>
            );
          })}
        </IndexWrapper>
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
