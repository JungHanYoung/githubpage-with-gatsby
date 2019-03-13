import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

import Footer from './Footer'
import NavBar from './NavBar';
import Header from './Main/Header';

// const NavBar = styled.div`
//     margin: 0 auto;
//     max-width: 960px;
//     padding-top: ${rhythm(1.5)};
// `
// const Title = styled.h3`
//     margin: 0 ${rhythm(1 / 2)};
//     display: inline-block;
//     font-size: normal;
// `

const PostsContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};
`


export default ({ allPosts, categories, children, category }) => {
    // console.log(allPosts)
    return (
        <StaticQuery
            query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
            render={data => (
                <>
                    <Helmet>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
                    </Helmet>
                    <NavBar
                        allPosts={allPosts}
                        categories={categories}
                    />
                    <Header
                        category={category}
                    />
                    <PostsContainer>
                        {children}
                    </PostsContainer>
                    <Footer />
                </>
            )}
        />
    )
}