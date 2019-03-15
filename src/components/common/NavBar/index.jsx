import React from 'react'
import PropTypes from 'prop-types'

// style component
import NavBarContainer from './styles/NavBarContainer';
import NavBarWrapper from './styles/NavBarWrapper'
import LogoHeader from './styles/LogoHeader'
import NavLinkList from './styles/NavLinkList'
import NavItem from './styles/NavItem'
import NavLink from './components/NavLink'
import NavDropDown from './components/NavDropDown'
import Search from './components/Search'



const NavBar = props => {
    return (
        <NavBarContainer>
            <NavBarWrapper>
                <LogoHeader to="/">
                    Oneze.blog
                </LogoHeader>
                <NavLinkList>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavDropDown
                        list={
                            [
                                { title: "React.js", to: "/category/react" },
                                { title: 'Spring', to: "/category/spring" },
                                { title: 'Javascript', to: "/category/javascript" }
                            ]
                        }
                        title="Category"
                    />
                    <NavLink to="/tags">
                        Tags
                    </NavLink>
                    <NavItem>
                        <Search />
                    </NavItem>
                </NavLinkList>
            </NavBarWrapper>
        </NavBarContainer>
    )
}

NavBar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })),
    allPosts: PropTypes.array
}

export default NavBar