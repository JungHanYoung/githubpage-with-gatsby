import { graphql } from 'gatsby'

export default graphql`
    query {
        default: file(relativePath: {eq: "computer-science.jpg"}) {
            childImageSharp {
                fixed(width: 760, height: 380) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        react: file(relativePath: {eq: "react-logo.png"}) {
            childImageSharp {
                fixed(width: 760, height: 380) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        spring: file(relativePath: {eq: "spring-logo.jpg"}) {
            childImageSharp {
                fixed(width: 760, height: 380) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        javascript: file(relativePath: {eq: "javascript-logo.jpg"}) {
            childImageSharp {
                fixed(width: 760, height: 380) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`