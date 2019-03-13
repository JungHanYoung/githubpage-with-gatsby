import React from 'react';
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data, pageContext, location }) => {
    // console.log(data)
    const categories = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.category)
    const category = location.pathname.split('/')[2]
    const { posts } = pageContext
    return (
        <Layout
            allPosts={data.allMarkdownRemark.edges}
            categories={categories}
            category={category}
        >
            <Helmet title={`Post in category "${category}"`} />
            {posts.map(post => <Link key={post.id} to={post.slug}>{post.title}</Link>)}
        </Layout>
    )
}

export const query = graphql`
    query {
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