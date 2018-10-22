import {
    LOGIN,
    REGISTER,
    SET_PASSWORD,
    SET_REGISTER_FIRST_NAME,
    SET_REGISTER_LAST_NAME,
    SET_REGISTER_PASSWORD,
    SET_REGISTER_ROLE,
    SET_REGISTER_USERNAME,
    SET_REGISTER_VERIFY_PASSWORD,
    SET_USERNAME,
    UPDATE_PROFILE,
    SET_PROFILE_DOB,
    SET_PROFILE_PHONE,
    SET_PROFILE_FIRST_NAME,
    SET_PROFILE_LAST_NAME,
    SET_REGISTER_DOB,
    SET_REGISTER_PHONE,
    SET_REGISTER_EMAIL,
    SET_PROFILE_USERNAME,
    SET_PROFILE_EMAIL, LOGOUT
} from '../actions/UserActions';
import {initialState} from '../reducers/AppReducer';

const UserReducer = (state=initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case LOGIN:{
            newState.currentUser = action.currentUser;
            return newState;
        }
        case SET_USERNAME:{
            newState.login.username = action.username;
            return newState;
        }
        case SET_PASSWORD:{
            newState.login.password = action.password;
            return newState;
        }
        case REGISTER:{
            newState.currentUser = action.currentUser;
            return newState;
        }
        case SET_REGISTER_USERNAME:{
            newState.register.username = action.username;
            return newState;
        }
        case SET_REGISTER_PASSWORD:{
            newState.register.password = action.password;
            return newState;
        }
        case SET_REGISTER_VERIFY_PASSWORD:{
            newState.register.verifyPassword = action.password;
            return newState;
        }
        case SET_REGISTER_ROLE:{
            newState.register.role = action.role;
            return newState;
        }
        case SET_REGISTER_FIRST_NAME:{
            newState.register.firstName = action.firstName;
            return newState;
        }
        case SET_REGISTER_LAST_NAME:{
            newState.register.lastName = action.lastName;
            return newState;
        }
        case SET_REGISTER_DOB:{
            newState.register.dob = action.dob;
            return newState;
        }
        case SET_REGISTER_PHONE:{
            newState.register.phone = action.phone;
            return newState;
        }
        case SET_REGISTER_EMAIL:{
            newState.register.email = action.email;
            return newState;
        }

        case UPDATE_PROFILE:{
            newState.currentUser = action.user;
            return newState;
        }
        case SET_PROFILE_DOB:{
            newState.currentUser.dob = action.dob;
            return newState;
        }
        case SET_PROFILE_PHONE:{
            newState.currentUser.phone = action.phone;
            return newState;
        }
        case SET_PROFILE_FIRST_NAME:{
            newState.currentUser.firstName = action.firstName;
            return newState;
        }
        case SET_PROFILE_LAST_NAME:{
            newState.currentUser.lastName = action.lastName;
            return newState;
        }
        case SET_PROFILE_USERNAME:{
            newState.currentUser.username = action.username;
            return newState;
        }
        case SET_PROFILE_EMAIL:{
            newState.currentUser.email = action.email;
            return newState;
        }
        case LOGOUT:{
            return initialState
        }
    }
}
export default UserReducer;