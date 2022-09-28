import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';
import { device } from '../../common/device-sizes';

export const HeaderLogo = styled(Link)`
  cursor: pointer;
  color: #FF0000;
  font-size: 1.5em;
  text-decoration: none;
  text-align: right;
  @media ${device.laptop} {
    font-size: 4.5em;
  }
`;