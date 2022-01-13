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

const MobileHeader = () => {

    const isLaptop= useMediaQuery(`${device.laptop}`);

    return (      
            <MobileHeaderContainer style={styles.logoStyle(!isLaptop)}>
                
                <NavLogo to="/">
                    Mason Mathew
                </NavLogo>
                
                <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox toggleHamburger" />
                <label className="hamburger" htmlFor="hamburger-checkbox"><img src={hamburger}/></label>
                
                <div style={styles.logoStyle(!isLaptop)} className="testNav">
                    <MobileNavMenu>
                        <MobileNavLink to="/">
                            Paintings
                        </MobileNavLink>
                        <MobileNavLink to="/">
                            Photography
                        </MobileNavLink>
                        <MobileNavLink to="/">
                            Github
                        </MobileNavLink>
                        <MobileNavLink to="/">
                            Info
                        </MobileNavLink>
                    </MobileNavMenu> 
                </div>
            </MobileHeaderContainer>
    );
};

const styles = {
    logoStyle: isLaptop => ({
        display: isLaptop ? 'flex' : 'none'
    })
};

export const MobileHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 80vw;
  margin-top: 10%;
`;

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
export default MobileHeader;