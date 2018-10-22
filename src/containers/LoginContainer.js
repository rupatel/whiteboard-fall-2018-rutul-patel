import React from 'react';
import {login, setUserName, setPassword} from '../actions/UserActions';
import connect from "react-redux/es/connect/connect";
import Login from "../components/Login";
import UserService from "../services/UserService";
import {history} from "../helpers/history";

const mapStateToProps = (state, props) => {
    return {
        currentUser: state.currentUser,
        username: state.login.username,
        password: state.login.password
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (username, password, role) => {
            UserService.login(username, password, role)
                .then(
                    response => {
                        if (response.status != 200) {
                            alert('invalid user name/ password');
                            return null;
                        }
                        return response.json()
                    })
                .then(u => {
                    if (!u) return;
                    dispatch(login(u));
                    history.push("/home");
                }).catch(
                msg => alert('invalid user name/ password')
            );
        },
        setUserName: (username) => {
            return dispatch(setUserName(username));
        },
        setPassword: (password) => {
            return dispatch(setPassword(password));
        }
    }
}
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);