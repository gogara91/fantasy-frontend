import React, { Component } from 'react'
import '../../css/Register.css';
import AuthService from '../../services/AuthService.js';

export default class Register extends Component {

    state = {
        user: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',

        }
    }

    handleSubmit = async () => {
        try {
            const { data } = await AuthService.register(this.state.user);
            console.log(data);
        } catch(e) {
            console.log(e.request.response);
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
        const {name, email, password, password_confirmation} = this.state.user;
        
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
