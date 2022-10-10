import React from 'react';
import data from '../../assets/data.js';

const ScrollTextComponent = () => {

    return (
        <div className="border-red">
            {
                data.map(element => {
                    return (<div key={element._id}><p>{element.title}</p></div>)
                })
            }
        </div>
    );
};

export default ScrollTextComponent;