import React from 'react';

const CenteredImageComponent = ({centerImage}) => {

    return (
        <div className="half-screen-width flex-center">
            <img className="half" src={centerImage.url} alt="alt" />
        </div>
    );
};

export default CenteredImageComponent;