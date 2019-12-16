import React, { Component } from 'react';
import '../../css/Login.css';
import {connect} from 'react-redux';
import {handleLogout} from '../../redux/actions/authActions';
import {Redirect} from 'react-router-dom';

class Logout extends Component {
    componentDidMount() {
        this.props.handleLogout();
    }

    render() {
        return (
            <Redirect to='/login'></Redirect>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogout: (credentials) => {
            dispatch(handleLogout(credentials))
        }
    }
}
export default connect(null, mapDispatchToProps)(Logout);