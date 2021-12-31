import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavLogo, 
    Hamburger, 
    MobileHeader
} from "./navbar-elements";
import hamburger from "../../assets/hamburger.svg"
import { device } from '../../assets/device-sizes';
import useMediaQuery from '../../hooks/useMediaQuery';

const Navbar = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);

    return (
           <Nav>
            
            <MobileHeader>
                <NavLogo style={styles.logoStyle(!isLaptop)} to="/">
                    Mason Mathew
                </NavLogo>

                <Hamburger src={hamburger} alt="Home Image" to="/" />
            </MobileHeader>

            <NavLogo style={styles.logoStyle(isLaptop)} to="/">
                    Mason Mathew
            </NavLogo>

            <NavMenu>
                <NavLink to="/">
                    Paintings
                </NavLink>
                <NavLink to="/about">
                    Analog
                </NavLink>
                <NavLink to="/contact">
                    Github
                </NavLink>
                <NavLink to="/signin">
                    Info
                </NavLink>
            </NavMenu> 
           </Nav> 
    );
};

const styles = {
    logoStyle: isLaptop => ({
        display: isLaptop ? 'flex' : 'none'
    })
};

export default Navbar;