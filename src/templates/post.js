import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { DiscussionEmbed } from 'disqus-react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const PagenationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: ${rhythm(1 / 2)} 0;
`


export default ({ data, pageContext }) => {
    const post = data.markdownRemark

    const disqusShortname = "junghanyoung-github-io";
    const disqusConfig = {
        identifier: post.id,
        title: post.frontmatter.title,
    };

    let prevLink = null;
    let nextLink = null;
    prevLink = pageContext.previous ? pageContext.previous.node.fields.slug : null
    nextLink = pageContext.next ? pageContext.next.node.fields.slug : null

    console.log(pageContext.previous.node.frontmatter.title)
    // console.log('prev:', prevLink)
    // console.log('next:', nextLink)

    return (
        <Layout>
            <Helmet>
                <title>{post.frontmatter.title}</title>
                <meta name="og:title" content={post.frontmatter.title} />
            </Helmet>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
            <PagenationContainer>
                {prevLink && <Link to={prevLink}>&lt; prev</Link>}
                {nextLink && <Link to={nextLink}>next &gt;</Link>}
            </PagenationContainer>
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
            }
        }
    }
`