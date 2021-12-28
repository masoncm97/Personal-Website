import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';

export const Nav = styled.nav`
    height: 85px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    margin-right: 5em;
    z-index: 12;
    border: 1px solid green;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  color: black;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
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
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid red;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;