import {addWidget, deleteWidget, findAllWidgets,
    findAllWidgetsForTopic, updateWidget,findWidget} from "../actions/WidgetAction";
import {connect} from 'react-redux';
import WidgetList from "../components/WidgetList";
import WidgetService from "../services/WidgetService";

let widgetService = new WidgetService();
const mapStateToProps = (state,props) => {
    return {
        widgets: state.widgets
    }
}
const mapDispatchToProps = (dispatch,props) => {
    let courseId = props.courseId;
    let moduleId = props.moduleId;
    let lessonId = props.lessonId;
    let topicId = props.topicId;
    return {
        onWidgetAdd: (title) => {
            if(! (courseId && moduleId && lessonId && topicId)) return;
            let widget = {
                "type": "HEADING",
                "size": 1,
                "text": title,
                "name" : 'New Widget'
            }
            widgetService.createWidget(courseId,moduleId,lessonId,topicId,widget)
            return dispatch(addWidget(widget));
        },
        onWidgetDelete: (widgetId) => {
            if(! (courseId && moduleId && lessonId && topicId)) return;
            widgetService.deleteWidget(courseId,moduleId,lessonId,topicId,widgetId);
            return dispatch(deleteWidget(widgetId));
        },
        onWidgetUpdate: (widget) => {
            if(! (courseId && moduleId && lessonId && topicId)) return;
            return dispatch(updateWidget(courseId,moduleId,lessonId, topicId, widget));
        },
        findWidget:(widgetId) => {
            if(! (courseId && moduleId && lessonId && topicId)) return;
            return dispatch(findWidget(courseId,moduleId,lessonId, topicId, widgetId));
        },
        findAllWidgetsForTopic : () =>{
            if(! (courseId && moduleId && lessonId && topicId)) return;
            let widgets = widgetService.findAllWidgetsForTopic(courseId,moduleId,lessonId,topicId);
            widgets = widgets ? widgets : [];
            return dispatch(findAllWidgetsForTopic(widgets));
        },
        findAllWidgets: () => {
            if(! (courseId && moduleId && lessonId)) return;
            let widgets = widgetService.findAllWidgets(courseId,moduleId,lessonId);
            widgets = widgets ? widgets : [];
            return dispatch(findAllWidgets(widgets));
        }
    }
}

export const WidgetListContainer = connect(mapStateToProps,mapDispatchToProps)(WidgetList)