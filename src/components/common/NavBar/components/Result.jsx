import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rhythm } from '../../../../utils/typography';

const Wrapper = styled.ul`
    display: block;
    background: #fff;
    list-style: none;
    padding: 0px;
    font-size: 14px;
    transition: 0.2s ease;
    position: absolute;
    width: 550px;
    -webkit-box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
    box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
    border-radius: 2px;
    border: 0;
    z-index: 999;
    top: 45px;
    right: 0px;
    line-height: 22px;
`

const ListItem = styled.li`
    border-top: 1px solid #f0f0f0;
    padding: 10px;
    margin: 0;
    font-size: ${rhythm(2 / 3)};
    &:hover {
        background: #f0f0f0;
    }
`


const Result = ({ items }) => {



    return (
        <Wrapper>
            {items.length
                ? items.map(item => <Link to={item.link}>
                    <ListItem>
                        {item.title}
                    </ListItem>
                </Link>)
                : <ListItem>Not Found</ListItem>}
        </Wrapper>
    )
}

Result.propTypes = {
    items: PropTypes.array
}

export default Result