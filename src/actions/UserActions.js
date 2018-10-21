import UserService from '../services/UserService';
import {history} from "../helpers/history";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const FIND_PROFILE = "FIND_PROFILE";
export const SET_USERNAME = "SET_USERNAME";
export const SET_PASSWORD = "SET_PASSWORD";

export function login(username, password,role){
    let user;
    UserService.login(username,password,role)
        .then(
            response =>
                response.json())
        .then(u =>{
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