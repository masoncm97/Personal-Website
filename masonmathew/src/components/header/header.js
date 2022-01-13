import React from "react";
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
                <MobileHeader style={styles.logoStyle(!isLaptop)} />
                
                <NavLogo style={styles.logoStyle(isLaptop)} to="/">
                        Mason Mathew
                </NavLogo>

                <div style={styles.logoStyle(isLaptop)}>
                    <Navbar/>
                </div>
           </Nav> 
    );
};

const MobileHeader = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);

    return (      
            <div style={styles.logoStyle(!isLaptop)} className="mobileHeader">
                
                <NavLogo to="/">
                    Mason Mathew
                </NavLogo>
                
                <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox toggleHamburger" />
                <label className="hamburger" htmlFor="hamburger-checkbox"><img src={hamburger} alt="hamburger"/></label>
                
                <div style={styles.logoStyle(!isLaptop)} className="testNav">
                    <Navbar />
                </div>
            </div>
    );
};

const styles = {
    logoStyle: isLaptop => ({
        display: isLaptop ? 'flex' : 'none'
    })
};

export default Header;