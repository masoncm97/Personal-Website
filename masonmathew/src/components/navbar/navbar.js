import useMediaQuery from '../../common/hooks/useMediaQuery';
import { device } from '../../common/device-sizes';
import { Link } from "react-router-dom";
import React from 'react';
import './navbar.css';

const Navbar = ({onClick}) => {

    const mediaSelector= useMediaQuery(`${device.laptop}`) ? 'nonMobile' : 'mobile';

    return (
            <div className={`${mediaSelector} navMenu`} >
                <Link className={`${mediaSelector} navLink`} to="/paintings" onClick={() => onClick(false)}>
                    Paintings
                </Link>
                <div className={`${mediaSelector} navLink`} to="/about">
                    Analog
                </div>
                <div className={`${mediaSelector} navLink`} to="/contact">
                    Github
                </div>
                <div className={`${mediaSelector} navLink`} to="/signin">
                    Info
                </div>
            </div> 
    );
};



export default Navbar;