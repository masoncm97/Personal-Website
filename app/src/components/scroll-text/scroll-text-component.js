import React from 'react';

const ScrollTextComponent = ({data, setCenterImage}) => {

    return (
        <div className="half-screen-width flex-column border-red">
            {
                data.map(element => {
                    return (
                    <form key={element._id} action={`/feature/${element._id}`} method="get">
                        <button onMouseEnter={() => setCenterImage(element)}><p style={{textAlign:"left"}}>{element.title}</p></button>
                    </form>
                    )
                })
            }
        </div>
    );
};

export default ScrollTextComponent;