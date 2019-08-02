module.exports = {
  siteMetadata: {
    title: 'Cosmic JS Gatsby Starter',
    nav: [{ slug: '/', name: 'Home' },
      { slug: '/about', name: 'About' },
      { slug: '/contact', name: 'Contact' },
      { slug: '/not-found', name: 'Not Found' },
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: process.env.COSMIC_BUCKET || `9c2ade90-b4bb-11e9-87c5-ab736be982f7`,
        objectTypes: [`pages`],
        // If you have enabled read_key to fetch data (optional).
        // apiAccess: {
        //   read_key: `DDS1xPEhiFkcT5SXRzQ61pfC9oh470kelyB9SvUPL8KTRJwfia`,
        // }
      }
    },
  ],
}
