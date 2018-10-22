import UserService from '../services/UserService';
import {history} from "../helpers/history";

export const LOGIN = "LOGIN";
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
export const SET_REGISTER_DOB='SET_REGISTER_DOB';
export const SET_REGISTER_PHONE='SET_REGISTER_PHONE';
export const SET_REGISTER_EMAIL='SET_REGISTER_EMAIL';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const SET_PROFILE_DOB='SET_PROFILE_DOB';
export const SET_PROFILE_PHONE='SET_PROFILE_PHONE';
export const SET_PROFILE_FIRST_NAME='SET_PROFILE_FIRST_NAME';
export const SET_PROFILE_LAST_NAME='SET_PROFILE_LAST_NAME';
export const SET_PROFILE_USERNAME='SET_PROFILE_USERNAME';
export const SET_PROFILE_EMAIL='SET_PROFILE_EMAIL';

export const LOGOUT='LOGOUT';

export function login(user){
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

export function register(u){
    return {
        currentUser : u,
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

export function setRegisterDOB(dob){
    return {
        dob :dob,
        type:SET_REGISTER_DOB
    }
}
export function setRegisterPhone(phone){
    return {
        phone :phone,
        type:SET_REGISTER_PHONE
    }
}
export function setRegisterEmail(email){
    return {
        email :email,
        type:SET_REGISTER_EMAIL
    }
}

export function updateProfile(u){
    return {
        user :u,
        type:UPDATE_PROFILE
    }
}
export function setProfileDOB(dob){
    return {
        dob :dob,
        type:SET_PROFILE_DOB
    }
}
export function setProfilePhone(phone){
    return {
        phone :phone,
        type:SET_PROFILE_PHONE
    }
}
export function setProfileFirstName(firstName){
    return {
        firstName :firstName,
        type:SET_PROFILE_FIRST_NAME
    }
}
export function setProfileLastName(lastName){
    return {
        lastName :lastName,
        type:SET_PROFILE_LAST_NAME
    }
}
export function setProfileUserName(username){
    return {
        username :username,
        type:SET_PROFILE_USERNAME
    }
}
export function setProfileEmail(email){
    return {
        email :email,
        type:SET_PROFILE_EMAIL
    }
}
export function logout(){
    return {
        type:LOGOUT
    }
}
