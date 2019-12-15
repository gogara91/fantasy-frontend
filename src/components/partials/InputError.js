import React, { Component } from 'react';
import PropTypes from 'prop-types';
class InputError extends Component {
    render() {
        return (
            <>
                <p className='text-danger'>{this.props.error}</p>
            </>
        )
    }
}

InputError.propTypes = {
    error: PropTypes.string
};

export default InputError;