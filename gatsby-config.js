const path = require('path')

module.exports = {
    siteMetadata: {
        title: `JeongHanYoung's blog`,
        author: 'JeongHanYoung',
        github: 'https://github.com/jungHanYoung'
    },
    pathPrefix: "/githubpage-with-gatsby",
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: `src/utils/typography`
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {

            }
        }
    ]
}