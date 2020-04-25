module.exports = {
  siteMetadata: {
    title: `Hozefa Blog`,
    description: `Personal blog to document learnings and share opinions`,
  },
  plugins: [
    { resolve: `gatsby-plugin-mdx`, options: { extensions: [`.mdx`, `.md`] } },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/posts`, name: `posts` },
    },
  ],
};
