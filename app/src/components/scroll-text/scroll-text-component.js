import React from 'react';

const ScrollTextComponent = ({data, setCenterImage}) => {

    return (
        <div className="half-screen-width flex-column border-red">
            {
                data.map(element => {
                    return (<button onMouseEnter={() => setCenterImage(element)} key={element._id}><p style={{textAlign:"left"}}>{element.title}</p></button>)
                })
            }
        </div>
    );
};

export default ScrollTextComponent;