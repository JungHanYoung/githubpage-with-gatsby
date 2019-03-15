import React from 'react'
import PropTypes from 'prop-types'

// style component
import NavBarContainer from './layout/NavBarContainer'
import NavBarWrapper from './layout/NavBarWrapper'
import LogoHeader from './layout/LogoHeader'
import NavLinklist from './layout/NavLinklist'
import { NavItem, NavLink, NavCollapseItemList } from './layout/NavLinkItem'
import NavSearch from './layout/NavSearch';


const NavBar = () => {
    return (
        <NavBarContainer>
            <NavBarWrapper>
                <LogoHeader to="/">
                    Oneze.blog
                </LogoHeader>
                <NavLinklist>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavCollapseItemList
                        list={
                            [
                                { title: "React.js", to: "/category/react" },
                                { title: 'Spring', to: "/category/spring" },
                                { title: 'Javascript', to: "/category/javascript" }
                            ]
                        }
                    >
                        Category
                    </NavCollapseItemList>
                    <NavLink to="/tags">
                        Tags
                    </NavLink>
                    <NavItem>
                        <NavSearch />
                    </NavItem>
                </NavLinklist>
            </NavBarWrapper>
        </NavBarContainer>
    )
}

NavBar.propTypes = {

}

export default NavBar