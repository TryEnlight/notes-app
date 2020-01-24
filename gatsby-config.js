var path = require("path");

module.exports = {
  siteMetadata: {
    title: "Build a Notes App with Gatsby and Firebase",
    author: "Enlight Team",
    description: "Build a Notes App with Gatsby and Firebase",
    siteUrl: "https://notes.enlight.nyc/"
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``
      }
    },
  

    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Enlight`,
        short_name: `Enlight`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        constants: path.join(__dirname, "src/constants"),
        api: path.join(__dirname, "src/api")
      }
    }
  ]
};
