import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavLogo
} from "./navbar-elements";

const Navbar = () => {
    return (
           <Nav>
            <NavLogo to="/">
                Mason Mathew
            </NavLogo>

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Paintings
                </NavLink>
                <NavLink to="/about" activeStyle>
                    Analog
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Github
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    Info
                </NavLink>
            </NavMenu> 
           </Nav> 
    );
};

export default Navbar;