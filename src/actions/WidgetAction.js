//https://redux.js.org/basics/actions

export const CREATE_WIDGET = 'CREATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const FIND_WIDGET = 'FIND_WIDGET';
export const FIND_ALL_WIDGETS_FOR_TOPIC = 'FIND_ALL_WIDGETS_FOR_TOPIC';
export const FIND_ALL_WIDGETS = 'FIND_ALL_WIDGETS';

export function addWidget(title, courseId, lessonId, topicId) {
    return {
        type: CREATE_WIDGET,
        title: title,
        courseId: courseId,
        lessonId: lessonId,
        topicId:topicId
    }
}

export function deleteWidget(courseId, lessonId,topicId, widgetId) {
    return {
        type: DELETE_WIDGET,
        courseId: courseId,
        lessonId: lessonId,
        topicId: topicId,
        widgetId: widgetId
    }
}

export function updateWidget(courseId, lessonId, topicId, widget) {
    return {
        type: UPDATE_WIDGET,
        courseId: courseId,
        lessonId: lessonId,
        topicId: topicId,
        widget: widget
    }
}

export function findWidget(courseId, lessonId,topicId,widgetId) {
    return {
        type: FIND_WIDGET,
        courseId: courseId,
        lessonId: lessonId,
        topicId: topicId,
        widgetId: widgetId
    }
}

export function findAllWidgetsForTopic(courseId, lessonId, topicId) {
    return {
        type: FIND_ALL_WIDGETS_FOR_TOPIC,
        courseId: courseId,
        lessonId: lessonId,
        topicId: topicId
    }
}

export function findAllWidgets(courseId, lessonId) {
    return {
        type: FIND_ALL_WIDGETS,
        courseId: courseId,
        lessonId: lessonId
    }
}