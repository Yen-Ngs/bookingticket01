import React, { Component } from 'react'
import SignUpForm from './SignUpForm';
import {RegisterInfor} from './RegisterInfor'
import './Register.css'


export default class Register extends Component {
    render() {
        return (
            <div className="registerform">
                <SignUpForm/>
                <RegisterInfor/>
            </div>
        )
    }
}
