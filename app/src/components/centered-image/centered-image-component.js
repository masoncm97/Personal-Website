import React from 'react';

const CenteredImageComponent = ({centerImage}) => {

    return (
        <div className="half-screen-width flex-center">
            <img className="half" src={centerImage.images.medium} srcSet={`${centerImage.images.small} 400w, ${centerImage.images.medium} 700w, ${centerImage.images.large} 1000w`} alt={centerImage.title} sizes="50vw"/> 
        </div>
    );
};

export default CenteredImageComponent;