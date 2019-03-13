import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby';

// import CategoryImage from '../../graphql/CategoryImage'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    background-color: #f0f0f0;
    overflow-x: scroll;
`

// const Cover = styled.div`
//     background-image: url("./assets/default_blog_cover.jpeg");
//     height: 260px;
//     background: no-repeat center;
//     background-size: cover;
// `

export default ({ category }) => {
    // console.log(category)
    // console.log(data)

    return (
        <Wrapper>
            <StaticQuery
                query={graphql`
                query {
                    default: file(relativePath: {eq: "computer-science.jpg"}) {
                        childImageSharp {
                            fixed(width: 844, height: 480) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    react: file(relativePath: {eq: "react-logo.png"}) {
                        childImageSharp {
                            fixed(width: 844, height: 480) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    spring: file(relativePath: {eq: "spring-logo.jpg"}) {
                        childImageSharp {
                            fixed(width: 844, height: 480) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    javascript: file(relativePath: {eq: "javascript-logo.png"}) {
                        childImageSharp {
                            fixed(width: 844, height: 480) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            `}
                render={data => {
                    console.log(data)
                    return category ? <Img
                        fixed={data[category].childImageSharp.fixed}
                        alt={category}
                    /> : <Img
                            fixed={data.default.childImageSharp.fixed}
                        />
                }}
            />
        </Wrapper>
    )
}