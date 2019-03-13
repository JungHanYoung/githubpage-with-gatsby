import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'


const Wrapper = styled.div`
    z-index: 99;
    margin: 0;
    padding: 0;
`

const Input = styled.input`
    margin: 0;
    width: 115px;
    height: 33px;
    border-radius: 17px;
    border: 1px solid #e6e6e6;
    padding: 0 30px 0 15px;
    font-size: ${rhythm(1 / 2)};
    color: #505050;
    background-size: 13px 13px;
    background-position-x: 135px;
`

export default ({ keyword, handler, onBlur, onFocus }) => {
    // const inputRef = useRef();

    // useEffect(() => {
    //     inputRef.current.addEventListener('blur', onBlur)
    //     inputRef.current.addEventListener('focus', onFocus)
    //     return () => {
    //         inputRef.current.removeEventListener('blur', onBlur)
    //         inputRef.current.removeEventListener('focus', onFocus)
    //     }
    // })

    return (
        <Wrapper>
            <Input
                // ref={inputRef}
                value={keyword}
                onChange={(e) => handler(e.target.value)}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder="search"
            />
        </Wrapper>
    )
}