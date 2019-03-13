import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>
                <h1>My Site's Files</h1>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <th>{node.relativePath}</th>
                                <th>{node.prettySize}</th>
                                <th>{node.extension}</th>
                                <th>{node.birthTime}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime(fromNow: true)
                }
            }
        }
    }
`