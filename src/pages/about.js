import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
    const categories = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.category)
    return (
        <Layout
            allPosts={data.allMarkdownRemark.edges}
            categories={categories}
        >
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
                We're the only site running on your computer dedicated to showing the best
                photos and videos of pandas eating lots of food.
            </p>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        category
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
            totalCount
        }
    }
`