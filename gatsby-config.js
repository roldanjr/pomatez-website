module.exports = {
  siteMetadata: {
    title: `Productivity Timer`,
    description: `Wonderful open source app based Pomodoro Technique that might help boost your productivity.`,
    author: `Roldan Montilla Jr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PRODUCTIVITY TIMER`,
        short_name: `Productivity Timer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#12181b`,
        display: `standalone`,
        icon: `src/assets/images/logo-light.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
        pure: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
  ],
};
