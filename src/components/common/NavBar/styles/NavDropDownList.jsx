import styled from 'styled-components'

export default styled.ul`
    margin: 0;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    position: absolute;
    display: none;
    background: #fff;
    list-style: none;
    position: absolute;
    left: -0.725rem;
    border: 1px solid #f0f0f0;
    z-index: 999;
    ${NavItem}:hover & {
        display: block;
    }
`