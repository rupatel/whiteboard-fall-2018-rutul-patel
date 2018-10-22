import React from 'react';
import {
    setRegisterUserName,
    setRegisterPassword,
    setRegisterVerifyPassword,
    setRegisterRole,
    register,
    setRegisterFirstName,
    setRegisterLastName,
    setRegisterEmail,
    setRegisterDOB, setRegisterPhone
} from '../actions/UserActions';
import connect from "react-redux/es/connect/connect";
import Register from "../components/Register";
import UserService from "../services/UserService";
import {history} from "../helpers/history";
const mapStateToProps = (state,props) => {
    return {
        currentUser: state.currentUser,
        username:state.register.username,
        password:state.register.password,
        verifyPassword:state.register.verifyPassword,
        role: state.register.role,
        firstName:state.register.firstName,
        lastName:state.register.lastName,
        dob:state.register.dob,
        phone:state.register.phone,
        email:state.register.email
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return{
        register:(u,verifyPassword) => {
            if(u.password != verifyPassword){
                alert('verify password and password do not match');
                return;
            }
            UserService.register(u)
                .then(
                    response =>
                    {
                        if(response.status != 200) {
                            alert('incorrect registration information');
                            return null;
                        };
                        return response.json()
                    })
                .then(u =>{
                    if(!u) return;
                    dispatch(register(u));
                    history.push("/home");
                }).catch(
                msg => alert('incorrect registration information')
            );
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
        },
        setPhone:(phone) =>{
            return dispatch(setRegisterPhone(phone));
        },
        setDOB:(dob) => {
            return dispatch(setRegisterDOB(dob));
        },
        setEmail:(email) => {
            return dispatch(setRegisterEmail(email));
        }
    }
}
export const RegisterContainer = connect(mapStateToProps,mapDispatchToProps)(Register);