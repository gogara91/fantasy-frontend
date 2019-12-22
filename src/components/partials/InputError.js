import React, { Component } from 'react';
import PropTypes from 'prop-types';
class InputError extends Component {
    render() {
        return (
            <>
                <p className='text-danger mt-1 mb-1'>{this.props.error[0]}</p>
            </>
        )
    }
}

export default InputError;