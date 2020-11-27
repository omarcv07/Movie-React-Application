import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ linkTo, children }) => {
    return (
        <NavLink
            className='nav-link'
            to={linkTo}>
            {children}
        </NavLink>
    )
}

export default NavItem;