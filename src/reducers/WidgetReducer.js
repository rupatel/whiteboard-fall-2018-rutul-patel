import {WidgetListContainer} from "../containers/WidgetListContainer";
import {
    CREATE_WIDGET,
    DELETE_WIDGET, FIND_ALL_WIDGETS,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    FIND_WIDGET,
    UPDATE_WIDGET
} from "../actions/WidgetAction";

const initialState = {
    widgets: []
}
const WidgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
        {
            let newState = {...state}
            newState.widgets.push(action.widget)
            return newState;
        }
        case DELETE_WIDGET: {
            let newState = {...state}
            newState.widgets = newState.widgets.filter(w=> (w.id!=action.widget.id))
            return newState;
        }
        case UPDATE_WIDGET: {
            let newState = {...state}
            newState.widgets = newState.widgets.map(w=> {
                if(w.id==action.widget.id) return action.widget
                else return w;
            });
            return newState;
        }
        case FIND_WIDGET:{
            let newState = {...state}
            newState.widgets = newState.widgets.filter(w=> w.id==action.widget.id);
            return newState;
        }
        case FIND_ALL_WIDGETS_FOR_TOPIC:{
            let newState = {...state}
            newState.widgets = action.widgets;
            return newState;
        }
        case FIND_ALL_WIDGETS:{
            let newState = {...state}
            newState.widgets = action.widgets;
            return newState;
        }
        default:
            return state
    }
}
export default WidgetReducer;