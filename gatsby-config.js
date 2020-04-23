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
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `aitorcm-portfolio`,
        accessToken: `MC5YbS1rN1JFQUFDRUFEVUh6.77-9Qe-_ve-_ve-_ve-_vUPvv71v77-977-977-977-977-9HO-_vSzvv70eKO-_vQTvv73vv71w77-977-977-9Xe-_vV_vv70`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,

        schemas: {
          description: require('./src/schemas/description.json'),
          blog_post: require('./src/schemas/post.json'),
      },
      },
     
    },
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
  ],
}
