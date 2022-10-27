import React from 'react';
import styled from 'styled-components';
import { device } from '../../common/device-sizes';
import { useEffect} from 'react';
import useLoadImages from '../../common/hooks/useLoadImages';
import { randCoordinates } from '../../common/functions';
import { Image  } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './shuffle-image-container.css';


const ShuffleImageComponent = () => {


    const context = require.context('../../photos/home', true, /\.(webp)$/);
    const { images, imgsLoaded } = useLoadImages(context);
    const CANV_APOTHEM = 1;

    useEffect(() => {

    }, [imgsLoaded]);

    return (
        <div className="shuffle-image-container">
            <Canvas camera={{ position: [0, 0, 1], fov: 90 }}>
                <group>
                    {imgsLoaded && images.map(
                        (image, index) =>
                            <mesh key={index}>
                                <Image position={[...randCoordinates(CANV_APOTHEM), 0]} url={image}/>
                            </mesh>
                    )
                    }
                </group>
            </Canvas>
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

export default ShuffleImageComponent;