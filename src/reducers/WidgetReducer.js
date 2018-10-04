const initialState = {
    widgets: []
}
const WidgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
        case DELETE_WIDGET:
        case UPDATE_WIDGET:
        case FIND_WIDGET:
        case FIND_ALL_WIDGETS_FOR_TOPIC:
        case FIND_ALL_WIDGETS:
        default:
            return state
    }
}