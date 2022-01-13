import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';
import { device } from '../../assets/device-sizes';

export const Nav = styled.nav`

    @media ${device.laptop} { 
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 300px;
      min-height: 700px;
      justify-content: space-between;
      align-items: flex-end;
    }
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  color: black;
  font-size: 1.5em;
  text-decoration: none;
  text-align: right;
  
  @media ${device.laptop} {
    font-size: 3em;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  font-size: 2em;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color:black;
  }
  &:hover {
    color: black;
  }
`;

export const NavMenu = styled.div`
  display: none;

  @media ${device.laptop} { 
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media ${device.laptop} {
    display: none;
  }
`;

export const Hamburger = styled.label`
    width: 20%;
    max-width: 35px;

    @media ${device.laptop} { 
      display: none;
    }
`;