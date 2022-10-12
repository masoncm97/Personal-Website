import React from 'react';

const ScrollImageComponent = ({ data }) => {

    console.log(data);
    return (
        <div className="border-red">
            {
                data.map(element => {
                    return (<div key={element._id}><img className="half" src={element.url} alt={element.title}/></div>)
                })
            }
        </div>
    );
};

export default ScrollImageComponent;