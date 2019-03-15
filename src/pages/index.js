import React from 'react';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

// 컴포넌트들
import NavBar from '../components/common/NavBar'
import Main from '../components/Main/index'
import { graphql } from 'gatsby';

const IndexPage = ({ pageContext, data }) => {



    return (
        <>
            <Helmet>
                <title>Welcome Oneze.blog</title>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
            </Helmet>
            <NavBar />
            <Main />
        </>
    )
}

IndexPage.propTypes = {
    pageContext: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({})
}

export default IndexPage

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
            node {
                id
                frontmatter {
                    title
                    date
                    category
                }
                fields {
                    slug
                }
                excerpt
            }
            }
        }
    }
`