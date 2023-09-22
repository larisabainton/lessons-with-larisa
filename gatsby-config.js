/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Lessons with Larisa`,
    siteUrl: `https://www.lessonswithlarisa.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
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
      
    }]
};