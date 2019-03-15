import React from 'react'
import NavItem from '../styles/NavItem'
import { Link } from 'gatsby'

const NavLink = ({ to, children }) => (
    <NavItem>
        <Link to={to}>{children}</Link>
    </NavItem>
)

export default NavLink