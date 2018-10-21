import React from 'react';
import {login,setUserName,setPassword} from '../actions/UserActions';
import connect from "react-redux/es/connect/connect";
import Login from "../components/Login";
const mapStateToProps = (state,props) => {
    return {
        currentUser: state.currentUser,
        username:state.login.username,
        password:state.login.password
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return{
        login:(username,password,role) => {
            return dispatch(login(username,password,role));
        },
        setUserName: (username) => {
            return dispatch(setUserName(username));
        },
        setPassword: (password) => {
            return dispatch(setPassword(password));
        }
    }
}
export const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);