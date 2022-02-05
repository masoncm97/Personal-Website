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
                <MobileHeader style={styles.toggleElement(!isLaptop)} />
                
                <NavLogo style={styles.toggleElement(isLaptop)} to="/">
                        Mason Mathew
                </NavLogo>

                <div style={styles.toggleElement(isLaptop)}>
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
            <div style={styles.toggleElement(!isLaptop)} className="mobileHeader">
                
                <NavLogo to="/">
                    Mason Mathew
                </NavLogo>
                
                <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox toggleHamburger" onClick={() => toggleNavbar(true)}/>
                <label className="hamburger" htmlFor="hamburger-checkbox"><img src={hamburger} alt="hamburger"/></label>
                
                <div style={styles.toggleElement(!isLaptop, navbarActivated)} className="testNav">
                    <Navbar onClick={toggleNavbar}/>
                </div>
            </div>
    );
};

const styles = {
    toggleElement: (x1, x2)  => ( (x2 === undefined) ?
    { display: x1 ? 'flex' : 'none'} : 
    { display: x1 && x2 ? 'flex' : 'none' })
};



export default Header;