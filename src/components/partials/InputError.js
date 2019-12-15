import React, { Component } from 'react'

export default class InputError extends Component {
    render() {
        return (
            <>
                <p className='text-danger'>{this.props.error}</p>
            </>
        )
    }
}
