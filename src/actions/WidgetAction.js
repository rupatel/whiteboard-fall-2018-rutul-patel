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
export function     addWidget(courseId,moduleId,lessonId,topicId,widget) {
    widgetService.createWidget(courseId,moduleId,lessonId,topicId,widget)
    return {
        type: CREATE_WIDGET,
        widget: widget
    }
}

export function deleteWidget(courseId,moduleId,lessonId,topicId,widgetId) {
    widgetService.deleteWidget(courseId,moduleId,lessonId,topicId,widgetId);
    return {
        type: DELETE_WIDGET,
        widgetId:widgetId
    }
}

export function updateWidget(courseId,moduleId,lessonId,topicId,widget) {
    widgetService.updateWidget(courseId,moduleId,lessonId,topicId,widget);
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
        widgets:widgets
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

export function moveWidgetUp(courseId,moduleId,lessonId,topicId,curIndex) {
    let widgets = widgetService.findAllWidgetsForTopic(courseId,moduleId,lessonId,topicId);
    widgets.map(w => {
        if(w.index == curIndex)
        {
            w.index = curIndex-1;
        }
        else if(w.index == curIndex-1)
        {
            w.index = curIndex;
        }
        return w;
    });
    return {
        type: FIND_ALL_WIDGETS,
        widgets:widgets
    }
}

export function moveWidgetDown(courseId,moduleId,lessonId,topicId,curIndex) {
    let widgets = widgetService.findAllWidgetsForTopic(courseId,moduleId,lessonId,topicId);
    let w1;
    let w2;
    widgets.map(w => {
        if(w.index == curIndex)
        {
            w.index = curIndex+1;
        }
        else if(w.index == curIndex+1)
        {
            w.index = curIndex;
        }
        return w;
    });
    return {
        type: FIND_ALL_WIDGETS,
        widgets:widgets
    }
}