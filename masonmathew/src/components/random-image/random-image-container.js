import React, { useState } from 'react';
import { Data as data } from "../../assets/paintings/data";
import useMediaQuery from '../../common/hooks/useMediaQuery';
import styled from 'styled-components';
import { device } from '../../common/device-sizes';
import { boxCollides, getBound, reposition } from './bounding-utilities';
import { useWhatChanged } from '@simbathesailor/use-what-changed';
import { useEffect, componentDidMount } from 'react';
import './random-image-container.css';


const ImageScroll = () => {

    var listOfImages = [];
    const [images, setImages] = useState([]);
    const [boxes, setBoxes] = useState(null);

    let importAll = (r) => {
        return r.keys().map(r);
    };
    
    useEffect(() => {   
        const data = importAll(require.context('../../photos/', false, /\.(JPG)$/));     
        setImages(data);
    }, []);

      useEffect(() => {   
        let boxes = document.querySelectorAll('.random-image');
        setBoxes(boxes);   
        reposition(boxes);
        setInterval(() => reposition(boxes), 2500);
    }, [images]);


    let randInt = (min, max) => Math.floor(min + Math.random() * (max - min));
    const isLaptop= useMediaQuery(`${device.laptop}`);
    

    return (
        <div className={isLaptop ? "random-image-container" : ""}>
            {boxes!= null && images.map(
                (image, index) => <Image key={index} className="random-image image" src={image} loading="lazy"></Image>
               )
            } 
        </div>
    );
};

export const ImageDetail = styled.p`
    text-align: center;
`;

export const Image = styled.img`
    max-width: 260px;

    @media ${device.laptop} { 
        margin-top: 0%;
        max-width: 200px;
        max-height: 700px;
    }

`;

export default ImageScroll;