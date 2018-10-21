import React from 'react';
import {
    login,
    setUserName,
    setPassword,
    setRegisterUserName,
    setRegisterPassword,
    setRegisterVerifyPassword, setRegisterRole, register, setRegisterFirstName, setRegisterLastName
} from '../actions/UserActions';
import connect from "react-redux/es/connect/connect";
import Register from "../components/Register";
const mapStateToProps = (state,props) => {
    return {
        currentUser: state.currentUser,
        username:state.register.username,
        password:state.register.password,
        verifyPassword:state.register.verifyPassword,
        role: state.register.role,
        firstName:state.register.firstName,
        lastName:state.register.lastName,
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return{
        register:(username,password,verifyPassword,role,firstName,lastName) => {
            return dispatch(register(username,password,verifyPassword,role,firstName,lastName));
        },
        setUserName: (username) => {
            return dispatch(setRegisterUserName(username));
        },
        setPassword: (password) => {
            return dispatch(setRegisterPassword(password));
        },
        setVerifyPassword: (password) => {
            return dispatch(setRegisterVerifyPassword(password));
        },
        setRole: (role) => {
            return dispatch(setRegisterRole(role));
        },
        setFirstName:(firstName) =>{
            return dispatch(setRegisterFirstName(firstName));
        },
        setLastName:(lastName) => {
            return dispatch(setRegisterLastName(lastName));
        }
    }
}
export const RegisterContainer = connect(mapStateToProps,mapDispatchToProps)(Register);