import React from 'react';
import connect from "react-redux/es/connect/connect";
import Profile from "../components/Profile";
import UserService from "../services/UserService";
import {history} from "../helpers/history";
import {
    login,
    setProfileDOB,
    setProfileEmail, setProfileFirstName, setProfileLastName,
    setProfilePhone,
    setProfileUserName,
    updateProfile
} from "../actions/UserActions";

const mapStateToProps = (state,props) => {
    return {
        username:state.currentUser.username,
        role: state.currentUser.role,
        firstName:state.currentUser.firstName,
        lastName:state.currentUser.lastName,
        phone:state.currentUser.phone,
        dob:state.currentUser.dob,
        email:state.currentUser.email,
        id:state.currentUser.id
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return{
        updateProfile:(user) => {
            UserService.updateProfile(user)
                .then(
                    res => res.json())
                .then(u => {
                    dispatch(updateProfile(u));
                    alert('saved...');
                    history.push("/home");
                }).catch(
                msg => {
                    console.log(msg+'..............');
                    alert('save failed');
                }
            );
        },
        setDOB: (dob) => {
            return dispatch(setProfileDOB(dob));
        },
        setPhone: (phone) => {
            return dispatch(setProfilePhone(phone));
        },
        setFirstName: (firstName) => {
            return dispatch(setProfileFirstName(firstName));
        },
        setLastName:(lastName) =>{
            return dispatch(setProfileLastName(lastName));
        },
        setUserName:(username) => {
            return dispatch(setProfileUserName(username));
        },
        setEmail:(email) => {
            return dispatch(setProfileEmail(email));
        }
    }
}
export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);