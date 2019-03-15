import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import NavItem from '../styles/NavItem';
import { rhythm } from '../../../../utils/typography';


const NavDropDownWrapper = styled.ul`
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

const NavDropDownItem = styled.li`
    background: none;
    padding: ${rhythm(1 / 3)} ${rhythm(1)};
    margin: 0;
    font-size: ${rhythm(2 / 3)};
    &:hover {
        background-color: #f0f0f0;
    }
    & + & {
        border-top: 1px solid #f0f0f0;
    }
`

const NavDropDown = ({ list = [], title }) => (
    <NavItem>
        {title} <i className="fas fa-caret-down"></i>
        <NavDropDownWrapper>
            {list.map(({ title, to }, index) => (
                <Link key={index} to={to}>
                    <NavDropDownItem>
                        {title}
                    </NavDropDownItem>
                </Link>
            ))}
        </NavDropDownWrapper>
    </NavItem>
)

export default NavDropDown