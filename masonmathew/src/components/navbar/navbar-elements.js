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