import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        // console.log(event.target.value);
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value);
    }

    handleLogin = () => {
        console.log('username:' , this.state.username , 'password:' , this.state.password);
        console.log('all state:' , this.state);
    }

    handleShowHidePassword=()=>{
        this.setState({
            isShowPassword : !this.state.isShowPassword
        });
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 login-text'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input type='text' className='form-control' placeholder='Enter your username' value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                            <input type={this.state.isShowPassword ? 'text':'password'} className='form-control' placeholder='Enter your password' value={this.state.password}
                                onChange={(event) => this.handleOnChangePassword(event)}
                            />
                            <span onClick={()=>{
                                this.handleShowHidePassword();
                            }}>
                            <i className={this.state.isShowPassword?"fas fa-eye":"fas fa-eye-slash"}></i>
                            </span>
                            </div>
                        </div>
                        <div className='col-12 btn-login'>
                            <button className='btn-login-text' onClick={() => { this.handleLogin() }}>Login</button>
                        </div>
                        <div className='col-12 '>
                            <span className='forgot-password'>Forgot your password</span>
                        </div>
                        <div className='col-12 text-center mt-3' >
                            <span className='login-browser '>Or login with: </span>
                        </div>
                        <div className='col-12 login-social'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
