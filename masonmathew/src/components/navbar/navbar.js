import useMediaQuery from '../../hooks/useMediaQuery';
import { device } from '../../assets/device-sizes';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '../../styles.css'

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