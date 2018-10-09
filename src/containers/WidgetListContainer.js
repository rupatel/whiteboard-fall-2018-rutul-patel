import {addWidget, deleteWidget, findAllWidgets,
    findAllWidgetsForTopic, updateWidget,findWidget,moveWidgetDown,moveWidgetUp} from "../actions/WidgetAction";
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
            let widget = {
                "type": "HEADING",
                "size": 1,
                "text": title,
                "name" : 'New Widget'
            }
            return dispatch(addWidget(courseId,moduleId,lessonId,topicId,widget));
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
            return dispatch(findAllWidgetsForTopic(courseId,moduleId,lessonId,topicId));
        },
        findAllWidgets: () => {
            return dispatch(findAllWidgets(courseId,moduleId,lessonId));
        },
        onWidgetMoveUp:(index) => {
            return dispatch(moveWidgetUp(courseId,moduleId,lessonId, topicId,index));
        },
        onWidgetMoveDown:(index) => {
            return dispatch(moveWidgetDown(courseId,moduleId,lessonId, topicId,index));
        }
    }
}

export const WidgetListContainer = connect(mapStateToProps,mapDispatchToProps)(WidgetList)