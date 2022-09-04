import React, { useState } from 'react';
import { Data as data } from "../../assets/paintings/data";
import useMediaQuery from '../../common/hooks/useMediaQuery';
import styled from 'styled-components';
import { device } from '../../common/device-sizes';
import { boxCollides, getBound, reposition, shuffleWidth } from './bounding-utilities';
import { useWhatChanged } from '@simbathesailor/use-what-changed';
import { useEffect, componentDidMount, useRef } from 'react';
import './random-image-container.css';


const ImageScroll = () => {

    var listOfImages = [];
    const [images, setImages] = useState([]);
    const [boxes, setBoxes] = useState(null);
    const [imgsLoaded, setImgsLoaded] = useState(false)
    const [playing, setPlaying] = useState(false);
    const [shuffling, setShuffling] = useState(true);
    const shuffleInterval = useRef(0);
    const isMounted = useRef(false);

    let toggle = () => {
        setShuffling(!shuffling);
        console.log(shuffleInterval.current);
    }

    let shuffleBoxes = (boxes) => {
        console.log("shuffle");
        reposition(boxes);
        shuffleWidth(boxes);
        let interval = setInterval(() => reposition(boxes), 2500);
        shuffleInterval.current = interval;
        console.log(shuffleInterval.current);
    };
    

    let pauseShuffle = () => {
        console.log("pause");
        console.log(shuffleInterval.current);
        clearInterval(shuffleInterval.current);
    };
    
    let importAll = (r) => {
        return r.keys().map(r);
    };

    useEffect(() => {
        const loadImage = (path) => {

            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = path
                loadImg.onload = () =>
                setTimeout(() => {
                    resolve(path)
                }, 2000)

                loadImg.onerror = err => reject(err)
            });
        };

        const data = importAll(require.context('../../photos/', false, /\.(JPG)$/));
        setImages(data);

        Promise.all(data.map(image => loadImage(image)))
            .then(() => setImgsLoaded(true))
            .catch(err => console.log("Failed to load images", err));
    }, [])

    useEffect(() => {
        let boxes = document.querySelectorAll('.random-image');
        setBoxes(boxes);
    }, [imgsLoaded]);

    useEffect(() => {
        if(isMounted.current && boxes != null && boxes.length != 0) {
            shuffleBoxes(boxes);
        } else {
            isMounted.current = true;
        }
    }, [boxes]);

    useEffect(() => {
        console.log("hey");
        if(isMounted.current && boxes != null && boxes.length != 0)  {
            shuffling ? shuffleBoxes(boxes) : pauseShuffle();
        } else {
            isMounted.current = true;
        }
    }, [shuffling]);


    let randInt = (min, max) => Math.floor(min + Math.random() * (max - min));
    const isLaptop = useMediaQuery(`${device.laptop}`);


    return (
        <div className={isLaptop ? "random-image-container" : ""}>
            <button className="play-pause-button" onClick={toggle}>{shuffling ? "Pause" : "Play"}</button>
            {boxes != null && imgsLoaded && images.map(
                (image, index) => <ImageBox key={index} className="random-image image" src={image} loading="lazy"></ImageBox>
            )
            }
        </div>
    );
};


export const ImageDetail = styled.p`
    text-align: center;
`;

export const ImageBox = styled.img`
    /* max-width: 260px;

    @media ${device.laptop} { 
        margin-top: 0%;
        max-width: 200px;
        max-height: 700px;
    }
    */
`;

export default ImageScroll;