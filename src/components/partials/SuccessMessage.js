import React from 'react';

export const SuccessMessage = (props) => {


    return(
        <>
        <p className="text-success text-center">{props.message}</p>
        </>
    )
}