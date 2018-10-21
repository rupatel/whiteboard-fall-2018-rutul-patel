import UserService from '../services/UserService';
import {history} from "../helpers/history";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const FIND_PROFILE = "FIND_PROFILE";
export const SET_USERNAME = "SET_USERNAME";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_REGISTER_USERNAME = "SET_REGISTER_USERNAME";
export const SET_REGISTER_PASSWORD = "SET_REGISTER_PASSWORD";
export const SET_REGISTER_VERIFY_PASSWORD = 'SET_REGISTER_VERIFY_PASSWORD';
export const SET_REGISTER_ROLE='SET_REGISTER_ROLE';
export const SET_REGISTER_FIRST_NAME='SET_REGISTER_FIRST_NAME';
export const SET_REGISTER_LAST_NAME='SET_REGISTER_LAST_NAME';

export function login(username, password,role){
    let user;
    UserService.login(username,password,role)
        .then(
            response =>
            {
                if(response.status != 200) {
                    alert('invalid user name/ password');
                    return;
                }
                return response.json()
            })
        .then(u =>{
            if(!u) return;
            user = u;
            console.log(u);
            history.push("/home");
        }).catch(
            msg => alert('invalid user name/ password')
        );
    return {
     currentUser : user,
     type:LOGIN
    }
}

export function setUserName(username){
    return {
        username : username,
        type:SET_USERNAME
    }
}

export function setPassword(password){
    return {
        password :password,
        type:SET_PASSWORD
    }
}

export function register(username,password,verifyPassword,role,firstName,lastName){
    if(password != verifyPassword){
        alert('verify password and password do not match');
        return;
    }
    let user;
    UserService.register(username,password,role,firstName,lastName)
        .then(
            response =>
            {
                if(response.status != 200) {
                    alert('incorrect registration information');
                    return
                };
                return response.json()
            })
        .then(u =>{
            if(!u) return;
            user = u;
            console.log(u);
            history.push("/home");
        }).catch(
        msg => alert('incorrect registration information')
        );
    return {
        currentUser : '',
        type:REGISTER
    }
}

export function setRegisterUserName(username){
    return {
        username : username,
        type:SET_REGISTER_USERNAME
    }
}

export function setRegisterPassword(password){
    return {
        password :password,
        type:SET_REGISTER_PASSWORD
    }
}
export function setRegisterVerifyPassword(password){
    return {
        password :password,
        type:SET_REGISTER_VERIFY_PASSWORD
    }
}
export function setRegisterRole(role){
    return {
        role :role,
        type:SET_REGISTER_ROLE
    }
}
export function setRegisterFirstName(firstName){
    return {
        firstName :firstName,
        type:SET_REGISTER_FIRST_NAME
    }
}
export function setRegisterLastName(lastName){
    return {
        lastName :lastName,
        type:SET_REGISTER_LAST_NAME
    }
}