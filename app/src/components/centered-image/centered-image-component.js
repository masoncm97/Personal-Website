import React from 'react';
import useLoadImages from '../../common/hooks/useLoadImages';

const CenteredImageComponent = () => {

    const context = require.context('../../photos/2x', false, /\.(webp)$/);
    const imageContext = useLoadImages(context);

    return (
        <div className="flex-center">
            {
                imageContext.images != null && imageContext.imgsLoaded &&
                <img className="half" src={imageContext.images[0]} img="alt" />
            }
        </div>
    );
};

export default CenteredImageComponent;