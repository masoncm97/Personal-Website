import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../../common/device-sizes';
import './random-image-container.css'

export const Image1 = styled.img`
    max-width: 260px;

    @media ${device.laptop} { 
        margin-top: 0%;
        max-width: 200px;
        max-height: 700px;
    }

`;


export const Image = ({image, style}) => {

    const [state, setState] = useState(false);

    return (
            <Image1 className={"random-image"} src={image} style={style} loading="lazy"/>
    );
};