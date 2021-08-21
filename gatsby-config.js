module.exports = {
  siteMetadata: {
    title: `ABC Tech Labs`,
    description: `Everything you need to know about ABC Tech Labs.`,
    author: `@anuskapant`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
