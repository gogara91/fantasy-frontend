import React from 'react';
export default (props) => {
    return (
        <div className="col-md-10">
            <div className="bg-secondary" style={{height: '50px'}}>

            </div>
            <div className="custom-row">{props.children}</div>
        </div>
    )
}