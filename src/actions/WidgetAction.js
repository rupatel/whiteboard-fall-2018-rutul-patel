//https://redux.js.org/basics/actions

import WidgetService from "../services/WidgetService";

export const CREATE_WIDGET = 'CREATE_WIDGET';
export const MOVE_WIDGET_UP = 'MOVE_WIDGET_UP'
export const MOVE_WIDGET_DOWN = 'MOVE_WIDGET_DOWN';
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

export function findWidget(courseId,moduleId,lessonId,topicId,widgetId) {
    let widget = widgetService.findWidget(courseId,moduleId,lessonId,topicId,widgetId);
    let widgets = widget ? [widget] : [];
    return {
        type: FIND_WIDGET,
        widgets:widgetId
    }
}

export function findAllWidgetsForTopic(courseId,moduleId,lessonId,topicId) {
    let widgets = widgetService.findAllWidgetsForTopic(courseId,moduleId,lessonId,topicId);
    return {
        type: FIND_ALL_WIDGETS_FOR_TOPIC,
        widgets : widgets
    }
}

export function findAllWidgets(courseId,moduleId,lessonId) {
    let widgets = widgetService.findAllWidgets(courseId,moduleId,lessonId);
    return {
        type: FIND_ALL_WIDGETS,
        widgets:widgets
    }
}

export function moveWidgetUp(curIndex) {
   return {
        type: MOVE_WIDGET_UP,
        curIndex:curIndex
    }
}

export function moveWidgetDown(curIndex) {
    return {
        type: MOVE_WIDGET_DOWN,
        curIndex:curIndex
    }
}