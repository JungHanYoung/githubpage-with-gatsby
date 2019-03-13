import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const PostLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const PostTitle = styled.h3`
    margin-bottom: ${rhythm(1 / 4)};
`

const PostDate = styled.span`
    color: #bbb;
`


export default ({ link, title, date, excerpt }) => (
    <div>
        <PostLink
            to={link}
        >
            <PostTitle>
                {title}{" "}
                <PostDate>
                    - {date}
                </PostDate>
            </PostTitle>
            <p>{excerpt}</p>
        </PostLink>
    </div>
)