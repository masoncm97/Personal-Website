import React, { useState } from 'react';
import {
    Nav,
    NavLogo, 
} from "../navbar/navbar-elements";
import hamburger from "../../assets/hamburger.svg"
import { device } from '../../assets/device-sizes';
import useMediaQuery from '../../hooks/useMediaQuery';
import '../../styles.css'
import Navbar from '../navbar/navbar'

const Header = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);

    return (
           <Nav>   
                <MobileHeader style={styles.toggleElementA(!isLaptop)} />
                
                <NavLogo style={styles.toggleElementA(isLaptop)} to="/">
                        Mason Mathew
                </NavLogo>

                <div style={styles.toggleElementA(isLaptop)}>
                    <Navbar/>
                </div>
           </Nav> 
    );
};

const MobileHeader = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);
    const [navbarActivated, setNavbarState] = useState(true);
    
    const toggleNavbar = (navbarActivated) => {
        setNavbarState(navbarActivated)
    };

    return (      
            <div style={styles.toggleElementA(!isLaptop)} className="mobileHeader">
                
                <NavLogo to="/">
                    Mason Mathew
                </NavLogo>
                
                <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox toggleHamburger" />
                <label className="hamburger" htmlFor="hamburger-checkbox"><img src={hamburger} alt="hamburger"/></label>
                
                <div style={styles.toggleElementB(!isLaptop, navbarActivated)} className="testNav">
                    <Navbar onClick={toggleNavbar}/>
                </div>
            </div>
    );
};

const styles = {
    toggleElementA: x1 => ({
        display: x1 ? 'flex' : 'none'
    }),
    toggleElementB: (x1, x2)  => ({
        display: x1 && x2 ? 'flex' : 'none'
    })
};



export default Header;