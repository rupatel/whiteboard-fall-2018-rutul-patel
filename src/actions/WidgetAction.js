//https://redux.js.org/basics/actions

import WidgetService from "../services/WidgetService";

export const CREATE_WIDGET = 'CREATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const FIND_WIDGET = 'FIND_WIDGET';
export const FIND_ALL_WIDGETS_FOR_TOPIC = 'FIND_ALL_WIDGETS_FOR_TOPIC';
export const FIND_ALL_WIDGETS = 'FIND_ALL_WIDGETS';

let widgetService = new WidgetService();
export function     addWidget(widget) {
    return {
        type: CREATE_WIDGET,
        widget: widget
    }
}

export function deleteWidget(widgetId) {
   
    return {
        type: DELETE_WIDGET,
        widgetId:widgetId
    }
}

export function updateWidget(widget) {
    return {
        type: UPDATE_WIDGET,
        widget: widget
    }
}

export function findWidget(widgets) {
    return {
        type: FIND_WIDGET,
        widgets:widgets
    }
}

export function findAllWidgetsForTopic(widgets) {
    return {
        type: FIND_ALL_WIDGETS_FOR_TOPIC,
        widgets : widgets
    }
}

export function findAllWidgets(widgets) {
    return {
        type: FIND_ALL_WIDGETS,
        widgets:widgets
    }
}