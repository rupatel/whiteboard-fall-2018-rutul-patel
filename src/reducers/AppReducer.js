import {
    CREATE_WIDGET,
    DELETE_WIDGET, FIND_ALL_WIDGETS,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    FIND_WIDGET, MOVE_WIDGET_DOWN, MOVE_WIDGET_UP,
    UPDATE_WIDGET,PREVIEW_MODE_TOGGLE
} from "../actions/WidgetAction";
import WidgetReducer from "./WidgetReducer";
import {
    LOGIN, REGISTER,
    SET_PASSWORD, SET_REGISTER_FIRST_NAME, SET_REGISTER_LAST_NAME, SET_REGISTER_PASSWORD,
    SET_REGISTER_ROLE, SET_REGISTER_USERNAME,
    SET_REGISTER_VERIFY_PASSWORD,
    SET_USERNAME
} from "../actions/UserActions";
import UserReducer from "./UserReducer";

const initialState = {
    widgets: [],
    isPreview:false,
    currentUser:{},
    login:{},
    register:{
        role:'STUDENT'
    }
}
const AppReducer = (state=initialState, action) => {
    let newState = {...state}
    newState.widgets = [...state.widgets]
    switch (action.type) {
        case CREATE_WIDGET:
        {
            return WidgetReducer(state,action);
        }
        case DELETE_WIDGET: {
            return WidgetReducer(state,action);
        }
        case UPDATE_WIDGET: {
            return WidgetReducer(state,action);
        }
        case FIND_WIDGET:{
            return WidgetReducer(state,action);
        }
        case FIND_ALL_WIDGETS_FOR_TOPIC:{
            return WidgetReducer(state,action);
        }
        case FIND_ALL_WIDGETS:{
            return WidgetReducer(state,action);
        }
        case MOVE_WIDGET_DOWN:{
            return WidgetReducer(state,action);
        }
        case MOVE_WIDGET_UP:{
            return WidgetReducer(state,action);        }
        case PREVIEW_MODE_TOGGLE:{
            return WidgetReducer(state,action);
        }
        case LOGIN:{
            return UserReducer(state,action);
        }
        case SET_USERNAME:{
            return UserReducer(state,action);
        }
        case SET_PASSWORD:{
            return UserReducer(state,action);
        }
        case REGISTER:{
            return UserReducer(state,action);
        }
        case SET_REGISTER_USERNAME:{
            return UserReducer(state,action);
        }
        case SET_REGISTER_PASSWORD:{
            return UserReducer(state,action);
        }
        case SET_REGISTER_VERIFY_PASSWORD:{
            return UserReducer(state,action);
        }
        case SET_REGISTER_ROLE:{
            return UserReducer(state,action);
        }
        case SET_REGISTER_FIRST_NAME:{
            return UserReducer(state,action);
        }
        case SET_REGISTER_LAST_NAME:{
            return UserReducer(state,action);
        }
        default:
            return state
    }
}
export default AppReducer;