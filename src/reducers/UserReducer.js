import {LOGIN, SET_PASSWORD, SET_USERNAME} from '../actions/UserActions';

const initialState = {
    currentUser: {},
    login:{}
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
    }
}
export default UserReducer;