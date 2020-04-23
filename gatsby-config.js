require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "AitorCM",
    author: "Aitor Carricondo",
    description: "A personal website for projects and visibility"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'aitorcm-portfolio', // (required)
        accessToken: 'MC5YbS1rN1JFQUFDRUFEVUh6.77-9Qe-_ve-_ve-_ve-_vUPvv71v77-977-977-977-977-9HO-_vSzvv70eKO-_vQTvv73vv71w77-977-977-9Xe-_vV_vv70', // (optional)
        path: '/preview', // (optional, default: /preview)
        previews: true, // (optional, default: false)
        pages: [{ // (optional)
          type: 'Articulo',  // TypeName from prismic
          match: '/article/:uid', // Pages will be generated under this pattern (optional)
          path: '/article', // Placeholder page for unpublished documents
          component: require.resolve('./src/pages/articlePage.js'),
        }],
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      }
    } 
  ],
}
