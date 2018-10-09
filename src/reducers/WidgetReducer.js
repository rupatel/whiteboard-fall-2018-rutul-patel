import {WidgetListContainer} from "../containers/WidgetListContainer";
import {
    CREATE_WIDGET,
    DELETE_WIDGET, FIND_ALL_WIDGETS,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    FIND_WIDGET, MOVE_WIDGET_DOWN, MOVE_WIDGET_UP,
    UPDATE_WIDGET
} from "../actions/WidgetAction";

const initialState = {
    widgets: []
}
const WidgetReducer = (state=initialState, action) => {
    let newState = {...state}
    newState.widgets = [...state.widgets]
    switch (action.type) {
        case CREATE_WIDGET:
        {
            newState.widgets.push(action.widget)
            return newState;
        }
        case DELETE_WIDGET: {
            newState.widgets = newState.widgets.filter(w=> (w.id!=action.widgetId))
            return newState;
        }
        case UPDATE_WIDGET: {
            newState.widgets = newState.widgets.map(w=> {
                if(w.id==action.widget.id) return action.widget
                else return w;
            });
            return newState;
        }
        case FIND_WIDGET:{
            newState.widgets = newState.widgets.filter(w=> w.id==action.widgetId);
            return newState;
        }
        case FIND_ALL_WIDGETS_FOR_TOPIC:{
            newState.widgets = action.widgets;
            return newState;
        }
        case FIND_ALL_WIDGETS:{
            newState.widgets = action.widgets;
            return newState;
        }
        case MOVE_WIDGET_DOWN:{
            newState.widgets = action.widgets;
            return newState;
        }
        case MOVE_WIDGET_UP:{
            newState.widgets = action.widgets;
            return newState;
        }
        default:
            return state
    }
}
export default WidgetReducer;