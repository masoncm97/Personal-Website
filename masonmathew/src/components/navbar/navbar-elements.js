import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';
import { device } from '../../common/device-sizes';


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
  color: #FF0000;
  font-size: 1.5em;
  text-decoration: none;
  text-align: right;
  @media ${device.laptop} {
    font-size: 4.5em;
    margin: 10% 10% 0% 0%;

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