require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
 })

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Lessons with Larisa`,
    description: 'Voice, piano, or guitar lessons for all ages. Flexible scheduling. Learn the best ways to practice to achieve your long-term goals. Lessons at your own pace.',
    siteUrl: `https://www.lessonswithlarisa.com`,
    keywords: 'music lessons, voice lessons, guitar lessons, piano lessons, adult music lessons, child music lessons, kid music lessons, musical theater lessons, opera lessons,'
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [{
          name: "Darker Grotesque",
          file: 'https://fonts.googleapis.com/css2?family=Darker+Grotesque&display=swap'
        },{
          name: 'Caprasimo',
          file: 'https://fonts.googleapis.com/css2?family=Caprasimo&family=Rammetto+One&display=swap'
        }]
      }
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    }
  ]
};