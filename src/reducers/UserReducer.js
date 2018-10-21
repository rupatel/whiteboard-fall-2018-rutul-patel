import {
    LOGIN, REGISTER,
    SET_PASSWORD, SET_REGISTER_FIRST_NAME, SET_REGISTER_LAST_NAME, SET_REGISTER_PASSWORD,
    SET_REGISTER_ROLE, SET_REGISTER_USERNAME,
    SET_REGISTER_VERIFY_PASSWORD,
    SET_USERNAME
} from '../actions/UserActions';

const initialState = {
    currentUser: {},
    login:{},
    register:{}
};

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
    }
}
export default UserReducer;