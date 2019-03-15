import React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import { graphql } from "gatsby";
import PostCard from '../components/PostCard'
import { rhythm } from "../utils/typography";


const PostTotalCount = styled.h4`
    margin: ${rhythm(1 / 2)} 0;
`


export default ({ data }) => {
    // console.log(data)
    const categories = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.category)

    return (
        <Layout
            allPosts={data.allMarkdownRemark.edges}
            categories={categories}
        >
            <div>
                {/* {categories.map((category, index) =>
                    <Link
                        key={index}
                        to={`/category/${category}`}
                    >{category}</Link>)} */}
                <PostTotalCount>{data.allMarkdownRemark.totalCount} Posts</PostTotalCount>
                {
                    data.allMarkdownRemark.edges.map(({ node }) => (
                        <PostCard
                            key={node.id}
                            link={node.fields.slug}
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                            excerpt={node.excerpt}
                        />
                    ))
                }
            </div>
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