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
          name: "DM Serif Display",
          file: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap'
        },{
          name: "Darker Grotesque",
          file: 'https://fonts.googleapis.com/css2?family=Darker+Grotesque&display=swap'
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
  ]
};