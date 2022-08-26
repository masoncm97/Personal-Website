import React, { useState } from 'react';
import styles from '../../common/functions'
import {
    Nav,
    NavLogo, 
} from "../navbar/navbar-elements";
import hamburger from "../../assets/hamburger.svg"
import { device } from '../../common/device-sizes';
import useMediaQuery from '../../common/hooks/useMediaQuery';
import '../../styles.css'
import Navbar from '../navbar/navbar'
    

const Header = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);

    return (
        <div className={ isLaptop ?  "nonmobile-header" : "" }>
           <Nav>   
                <MobileHeader style={styles.toggleElement(!isLaptop)} />
                
                <NavLogo style={styles.toggleElement(isLaptop)} to="/">
                        Mason Mathew
                </NavLogo>

                <div style={styles.toggleElement(isLaptop)}>
                    <Navbar/>
                </div>
           </Nav> 
        </div>
    );
};

const MobileHeader = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);
    const [navbarActivated, setNavbarState] = useState(true);
    

    return (      
            <div style={styles.toggleElement(!isLaptop)} className="mobileHeader">
                
                <NavLogo to="/">
                    Mason Mathew
                </NavLogo>
                
                <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox toggleHamburger" onClick={() => setNavbarState(true)}/>
                <label className="hamburger" htmlFor="hamburger-checkbox"><img src={hamburger} alt="hamburger"/></label>
                
                <div style={styles.toggleElement(!isLaptop, navbarActivated)} className="testNav">
                    <Navbar onClick={() => setNavbarState(navbarActivated)}/>
                </div>
            </div>
    );
};


export default Header;