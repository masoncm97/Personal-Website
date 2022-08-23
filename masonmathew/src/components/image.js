import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../assets/device-sizes';

import '../styles.css'

export const Image1 = styled.img`
    max-width: 260px;

    @media ${device.laptop} { 
        margin-top: 0%;
        max-width: 500px;
        max-height: 700px;
    }

`;

export const ImageDetail = styled.p`
    text-align: center;
`;

export const Image = ({entry, initial}) => {

    const [state, setState] = useState(false);

    return (
        <div className="description-container">
            <button><Image1 src={entry.url} alt="Home Image" loading="lazy"/></button>
            <div className="description">
                <ImageDetail>{entry.name}</ImageDetail>
                <ImageDetail>{entry.description}</ImageDetail>
            </div>
        </div>
    );
};