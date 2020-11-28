import React, { Fragment, useState } from 'react';

import NavItem from './HeaderItem';
import { NavDropdown } from 'react-bootstrap';
import { navigationConfig, navigationDropdownConfig } from '../../config/navigationConfig';

const MenuComponent = () => {

    const [show, setShow] = useState(false);

    const showDropdown = _ => setShow(!show);
    const hideDropdown = _ => setShow(false);

    return (
        <Fragment>
            <NavDropdown 
                title='Categories'
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
                >
                {navigationDropdownConfig.map((dropItem, i) => (
                    <NavItem key={i} linkTo={`${dropItem.path}`}>{dropItem.name}</NavItem>
                ))}
            </NavDropdown>


            {navigationConfig.map((navItem, i) => (
                <NavItem key={i} linkTo={`${navItem.path}`}>{navItem.name}</NavItem>
            ))}
        </Fragment>
    );
}

export default MenuComponent;