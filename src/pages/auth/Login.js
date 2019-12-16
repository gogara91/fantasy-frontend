import React, { Component } from 'react'
import '../../css/Login.css'
import {connect} from 'react-redux';
import {handleLogin} from '../../redux/actions/authActions'
class Login extends Component {
    state = {
        credentials: {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        let inputName = e.target.name;
        this.setState({
            credentials: {
                ...this.state.credentials,
                [inputName]: e.target.value,
            }
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLoginAttempt(this.state.credentials);
    }

    render() {
        return (
            <>
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-6 login-form-2 offset-md-3">
                            <h3>Login</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name='email'
                                        className="form-control"
                                        placeholder="Your Email *"
                                        value={this.state.credentials.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name='password'
                                        className="form-control"
                                        placeholder="Your Password *"
                                        value={this.state.credentials.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btnSubmit"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <div className="form-group">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLoginAttempt: (credentials) => {
            dispatch(handleLogin(credentials))
        }
    }
}
export default connect(null, mapDispatchToProps)(Login);