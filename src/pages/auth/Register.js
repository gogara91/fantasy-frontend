import React, { Component } from 'react';
import '../../css/Register.css';
import InputError from '../../components/partials/InputError.js';
import { Redirect } from 'react-router-dom';
export default class Register extends Component {

    state = {
        toLogin: false,
        user: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        errors: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleSubmit = async () => {
        try {
            this.props.history.push('/login');

        } catch(e) {
            let response = JSON.parse(e.request.response);
            this.setState({
                errors: response.errors
            });
            console.log(this.state.errors);
        }
    }

    handleChange = (e) => {
        let inputName = e.target.name;
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [inputName]: e.target.value
            }
        })
    }
    render() {
        if(this.state.toLogin) {
            return <Redirect to='/login' />
        }
        const {name, email, password, password_confirmation} = this.state.user;
        const {errors} = this.state;
        return (
            <div>
                <div className="container register-form mt-3">
                    <div className="form">
                        <div className="note">
                            <p>Register</p>
                        </div>

                        <div className="form-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                            name='name'
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Your Name *"
                                            value={name} 
                                            onChange={this.handleChange}
                                        />
                                        <InputError error={errors.name} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            name='email'
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Your Email *"
                                            value={email} 
                                            onChange={this.handleChange}
                                        />
                                        <InputError error={errors.email} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                            name='password'
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Your Password *" 
                                            value={password} 
                                            onChange={this.handleChange}
                                        />
                                        <InputError error={errors.password} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            name='password_confirmation'
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Confirm Password *" 
                                            value={password_confirmation} 
                                            onChange={this.handleChange}
                                        />
                                        <InputError error={errors.password_confirmation} />
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btnSubmit" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
