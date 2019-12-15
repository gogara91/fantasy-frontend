import React from 'react';
import PropTypes from 'prop-types';

function PageTitle(props) {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <h1 className="font-weight-bold h3">{props.title}</h1>
                    {props.subtitle ? <h2 className="h5">{props.subtitle}</h2> : ''}
                </div>
                <div className="col-md-6">
                    {props.buttons}
                </div>
            </div>
        </>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};
export default PageTitle;