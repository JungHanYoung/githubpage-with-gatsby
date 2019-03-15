import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import { rhythm } from '../../../utils/typography';

const NavLink = ({ to, children }) => (
    <NavItem>
        <Link to={to}>{children}</Link>
    </NavItem>
)

const NavItem = styled.li`
    display: inline-block;
    padding-top: 8px;
    padding-right: 24px;
    margin-top: 12.5px;
    margin-right: 6px;
    cursor: pointer;
    position: relative;
`

const NavCollapseWrapper = styled.ul`
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

const NavCollapseItemWrapper = styled.li`
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

const NavCollapseItem = ({ to, children }) => (
    <Link to={to}>
        <NavCollapseItemWrapper>
            {children}
        </NavCollapseItemWrapper>
    </Link>
)

const NavCollapseItemList = ({ list, children }) => (
    <NavItem>
        {children} <i className="fas fa-caret-down"></i>
        <NavCollapseWrapper>
            {list.map(({ title, ...otherProps }, i) =>
                <NavCollapseItem key={i} {...otherProps}>
                    {title}
                </NavCollapseItem>)
            }
        </NavCollapseWrapper>
    </NavItem>
)

export {
    NavLink,
    NavItem,
    NavCollapseItemList
}