const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  pathPrefix: `/productivity-timer`,
  siteMetadata: {
    title: `PRODUCTIVITY TIMER`,
    description: `Multi-platform time management app based on Pomodoro Technique that will help boost your productivity.`,
    keywords: [
      "pomodoro",
      "pomodoro app",
      "pomodoro timer",
      "tomato",
      "tomato app",
      "tomato timer",
      "productivity",
      "productivity app",
      "productivity tool",
      "productivity timer",
      "productivity booster",
      "pomodoro technique app",
      "pomodoro technique timer",
      "time management",
      "time management app",
      "time management tool",
      "pomodoro principle app",
      "pomodoro principle timer",
    ],
    author: `Roldan Montilla Jr`,
    siteUrl: `https://roldanjrcodearts9711.github.io/productivity-timer`,
    twitterUsername: `@roldan_montilla`,
    googleVerification: `${process.env.GOOGLE_VERIFICATION}`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
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
        short_name: `PRODUCTIVITY TIMER`,
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
