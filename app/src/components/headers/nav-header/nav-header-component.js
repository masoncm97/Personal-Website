import React from 'react';
import useLoadImages from '../../../common/hooks/useLoadImages';
import {useNavigate} from 'react-router-dom';
import './nav-header-component.css';

const NavHeaderComponent = ( {title} ) => {
    
    const navigate = useNavigate();
    const context = require.context('../../../assets/NavHeaderAssets', false, /\.(svg)$/);
    const imageContext = useLoadImages(context);

    return (
        <div className="flex-space-between header-element border-red">
            <h3>{title}</h3>
            <button onClick={() => navigate(-1)}><img className="nav-header-arrow" src={imageContext.images[0]} alt="navHeaderArrow"></img></button>
        </div>
    );
};

export default NavHeaderComponent;