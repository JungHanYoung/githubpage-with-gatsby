import React, { useState } from 'react';
import styled from 'styled-components'
import { rhythm } from '../../../../utils/typography';

import Result from './Result'

const Wrapper = styled.div`
    z-index: 99;
    margin: 0;
    padding: 0;
    position: relative;
`

const Input = styled.input`
    margin: 0;
    width: 155px;
    height: 44px;
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


const Search = () => {
    const [keyword, onChange] = useFindSearch()
    return (
        <Wrapper>
            <Input
                value={keyword}
                onChange={onChange}
                // onBlur={}
                // onFocus={}
                placeholder="search"
            />
            <Result
                items={[]}
            />
        </Wrapper>
    )
}

const useFindSearch = props => {

    const [keyword, setKeyword] = useState('')

    function onChange(e) {
        setKeyword(e.target.value)
    }

    return [keyword, onChange]
}

export default Search