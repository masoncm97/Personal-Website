import React, { useState } from 'react';
import { Data as data } from "../assets/paintings/data";
import styled from 'styled-components';
import { device } from '../assets/device-sizes';
import { useSwipeable } from 'react-swipeable';
import { Image } from './image';
import '../styles.css'


const ImageScroll = () => {

    const [current, setCurrent] = useState(0);
    const length = data.length;

    const slide = (next) => {
        if (next) {
            setCurrent(current === length - 1 ? 0 : current + 1);
        } else {
            setCurrent(current === 0 ? length - 1 : current - 1);
        }
    }

     const handlers = useSwipeable({
        onSwipedLeft: () => slide(true),
        onSwipedRight: () => slide(false),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    }) 

    return (
        <div>
            {data.map((entry, index) => 
                {
                    return <div key={index}>
                        <Image entry={entry} flipped={false}></Image>
                    </div> 
                })}
        </div>
    );
};

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

export default ImageScroll;