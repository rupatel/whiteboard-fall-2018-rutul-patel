import {addWidget, deleteWidget, findAllWidgets,
    findAllWidgetsForTopic, updateWidget,findWidget} from "../actions/WidgetAction";
import {connect} from 'react-redux';
import WidgetList from "../components/WidgetList";

const mapStateToProps = (state,props) => {
    return {
        widgets: state.widgets
    }
}
const mapDispatchToProps = (dispatch,props) => {
    let courseId = props.courseid;
    let moduleId = props.moduleId;
    let lessonId = props.lessonId;
    let topicId = props.topicId;
    return {
    onWidgetAdd: (title) => {
            return dispatch(addWidget(title,courseId,moduleId,lessonId, topicId));
        },
        onWidgetDelete: (widgetId) => {
            return dispatch(deleteWidget(courseId,moduleId,lessonId,topicId,widgetId));
        },
        onWidgetUpdate: (widget) => {
            return dispatch(updateWidget(courseId,moduleId,lessonId, topicId, widget));
        },
        findWidget:(widgetId) => {
            return dispatch(findWidget(courseId,moduleId,lessonId, topicId, widgetId));
        },
        findAllWidgetsForTopic : () =>{
            return dispatch(findAllWidgetsForTopic(courseId,moduleId,lessonId, topicId))
        },
        findAllWidgets: () => {
            return dispatch(findAllWidgets(courseId,moduleId,lessonId));
        }
    }
}

export const WidgetListContainer = connect(mapStateToProps,mapDispatchToProps)(WidgetList)