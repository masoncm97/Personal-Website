import React, { useState, useEffect } from 'react';
import useLoadImages from '../../common/hooks/useLoadImages';
import { CenteredContainer } from '../../common/reusable-components/reusable';
import './shuffle-image-container.css';

const ShuffleImageComponent = () => {

    const context = require.context('../../photos/home/2x', false, /\.(webp)$/);
    const imageContext = useLoadImages(context);

    return (
        <div className="shuffle-image-container flex-center">
            {
                imageContext.images != null && imageContext.imgsLoaded &&
                <img className="half" src={imageContext.images[0]} />
            }
        </div>
    );
};


export default ShuffleImageComponent;