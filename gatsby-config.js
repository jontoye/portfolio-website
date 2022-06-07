module.exports = {
  siteMetadata: {
    title: 'Jonathan Toye',
    description: 'Portfolio Website',
    siteUrl: 'https://jontoye.gatsbyjs.io',
    image: 'https://i.imgur.com/hDn1Fum.png',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
  ],
};
