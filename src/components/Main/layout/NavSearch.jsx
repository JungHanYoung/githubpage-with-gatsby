import React from 'react';
import styled from 'styled-components'
import { rhythm } from '../../../utils/typography';

const SearchInput = styled.input`
    margin: 0;
    width: 165px;
    height: 43px;
    border-radius: 22px;
    border: 1px solid #e6e6e6;
    padding: 0 30px 0 15px;
    font-size: ${rhythm(3 / 5)};
    color: #505050;
    background-size: 13px 13px;
    background-position-x: 135px;
    outline: none;
    &:focus {
        border: 1px solid #1ca086;
    }
`


const NavSearch = props => {
    return (
        <SearchInput
            {...props}
            placeholder="Search"
        />
    )
}

export default NavSearch