import {addWidget, deleteWidget, findAllWidgets, updateWidget} from "../actions/WidgetAction";
import {connect} from 'react-redux';
import WidgetList from "../components/WidgetList";
const mapStateToProps = state => {
    return {
        widgets: state.widgets
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onWidgetAdd: (title,courseId,moduleId,lessonId, topicId) => {
            return dispatch(addWidget(title,courseId,moduleId,lessonId, topicId));
        },
        onWidgetDelete: (courseId,moduleId,lessonId,topicId, widgetId) => {
            return dispatch(deleteWidget(courseId,moduleId,lessonId,topicId,widgetId));
        },
        onWidgetUpdate: (courseId,moduleId,lessonId, topicId, widget) => {
            return dispatch(updateWidget(courseId,moduleId,lessonId, topicId, widget));
        },
        findWidget:(courseId,moduleId,lessonId,topicId,widgetId) => {
            return dispatch(findWidget(courseId,moduleId,lessonId, topicId, widgetId));
        },
        findAllWidgetsForTopic : (courseId,moduleId,lessonId, topicId) =>{
            return dispatch(findAllWidgetsForTopic(courseId,moduleId,lessonId, topicId))
        },
        findAllWidgets: (courseId,moduleId,lessonId) => {
            return dispatch(findAllWidgets(courseId,moduleId,lessonId));
        }
    }
}

default export const WidgetListContainer = connect(mapStateToProps,mapDispatchToProps)(WidgetList)