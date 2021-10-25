import React from 'react';
import { Navbarcss, NavbarUl, NavbarLi, LinkElement } from './Navbarcss';

const Navbar = () => {
    return (
        <Navbarcss>
            <NavbarUl>
                <NavbarLi><LinkElement to="/">Home</LinkElement></NavbarLi>
                <NavbarLi><LinkElement to="/about">About</LinkElement></NavbarLi>
                <NavbarLi><LinkElement to="/article-lists">Article</LinkElement></NavbarLi>
                
            </NavbarUl>
        </Navbarcss >
    )
}

export default Navbar
