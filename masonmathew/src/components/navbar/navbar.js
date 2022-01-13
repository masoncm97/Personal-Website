import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavLogo, 
    Hamburger
} from "./navbar-elements";
import hamburger from "../../assets/hamburger.svg"
import { device } from '../../assets/device-sizes';
import useMediaQuery from '../../hooks/useMediaQuery';
import '../../styles.css'
import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';
import MobileHeader from "./mobile-header"

const Navbar = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);

    return (
           <Nav>
            
            <MobileHeader style={styles.logoStyle(!isLaptop)} />
            
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

export const MobileNavLink = styled(Link)`
    color: black;
    display: flex;
    font-size: 2em;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-align: left;
    &.active {
    color:black;
    }
    &:hover {
    color: black;
    }
`;

export const MobileNavMenu = styled.div`
    align-items: start;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

        @media ${device.laptop} { 
            display: none;
        }
`;
export default Navbar;