import React, { Component } from 'react'
import SignUpForm from './SignUpForm';
import {RegisterInfor} from './RegisterInfor'


export default class Register extends Component {
    render() {
        return (
            <div>
                <SignUpForm/>
                <RegisterInfor/>
            </div>
        )
    }
}
