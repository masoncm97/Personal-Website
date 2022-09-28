import React, { useState } from 'react';
import useMediaQuery from '../../common/hooks/useMediaQuery';
import styled from 'styled-components';
import { device } from '../../common/device-sizes';
import { reposition, shuffleWidth } from './bounding-utilities';
import { useEffect, useRef } from 'react';
import arrows from "../../assets/arrows.svg"
import './random-image-container.css';


const ImageScroll = () => {
    

    const [images, setImages] = useState([]);
    const [boxes, setBoxes] = useState(null);
    const [imgsLoaded, setImgsLoaded] = useState(false)
    const [shuffling, setShuffling] = useState(true);
    const shuffleInterval = useRef(0);
    const isMounted = useRef(false);
    const isLaptop = useMediaQuery(`${device.laptop}`);
    

    let toggle = () => {
        setShuffling(!shuffling);
    }

    let shuffleBoxes = (boxes) => {
        reposition(boxes);
        shuffleWidth(boxes);
        let interval = setInterval(() => reposition(boxes), 2500);
        console.log(`${"shuffle " + shuffleInterval.current}`);
        shuffleInterval.current = interval;
    };
    

    let pauseShuffle = () => {
        console.log(`${"clear " + shuffleInterval.current}`);
        clearInterval(shuffleInterval.current);
    };

    let arrayIsPopulated = (arr) => {
        return (arr !== null && arr.length !== 0) ? true : false;
    }
    
    const importAll = (r) => {
        return r.keys().map(r);
    };

    let useEffectPostRender = (callback, deps) => {
        useEffect(() => {
            if(isMounted.current) {
                callback(deps);
            } else {
                isMounted.current = true;
            }
        }, [callback, deps]);
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

    useEffectPostRender((shuffling) => {
        if(arrayIsPopulated(boxes)) {
            shuffling ? shuffleBoxes(boxes) : pauseShuffle();
        }
    }, shuffling);


    return (
        <div className={isLaptop ? "random-image-container" : ""}>
            <div className={(isLaptop ? "nonmobile" : "mobile") + " random-image-sidebar"}>
                <button className="play-pause-button" onClick={toggle}>{shuffling ? "Pause" : "Play"}</button>
                <img className="arrows" src={arrows} alt="arrows"/>
            </div>
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