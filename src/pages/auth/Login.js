import React, { Component } from 'react'
import '../../css/Login.css'
import { connect } from 'react-redux';
import {handleLogin } from '../../redux/actions/authActions'
import InputError from '../../components/partials/InputError';
import { SuccessMessage } from '../../components/partials/SuccessMessage';
class Login extends Component {
    state = {
        credentials: {
            email: '',
            password: ''
        },
        error: [''],
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

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await this.props.handleLoginAttempt(this.state.credentials);
        } catch (err) {
            this.setState({
                ...this.state,
                error: ['Invalid credentials! Please check your email and password.']
            })
        }
    }

    render() {
        console.log(!!this.props.location.state);
        return (
            <>
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.location.state ?
                                <SuccessMessage message={this.props.location.state.message}></SuccessMessage> : ''}
                        </div>
                    </div>
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
                                    <InputError error={this.state.error}></InputError>
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
        handleLoginAttempt: (credentials) =>  dispatch(handleLogin(credentials))
    }
};

export default connect(null, mapDispatchToProps)(Login);