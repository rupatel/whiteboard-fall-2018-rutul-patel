import React from 'react';
import Widget from './Widget';

class WidgetList extends React.Component
{
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState){
        let courseId = prevProps.courseId
        let moduleId = prevProps.moduleId
        let lessonId = prevProps.lessonId
        let topicId = prevProps.topicId

        if(courseId != this.props.courseId ||
            moduleId != this.props.moduleId ||
            lessonId != this.props.lessonId ||
            topicId != this.props.topicId) {
            this.props.findAllWidgetsForTopic(this.props.courseId,
                this.props.moduleId,
                this.props.lessonId,
                this.props.topicId);
        }
    }

    render()
    {
        let widgets = this.props.widgets.sort((w1,w2) => {
            let idx1 = w1.index ? w1.index : -1;
            let idx2 = w2.index ? w2.index : -1;
            return (idx1<idx2) ? -1 : (idx1>idx2) ? 1 : 0;
        });
        return (
            <div className="tab-content" id="pills-tabContent-module1">
                <div className="tab-pane fade show active" id='pills-module1-lesson1-topic1' role="tabpanel"
                     aria-labelledby='module1-lesson1-topic1'>
                    {widgets.map(w => <Widget key={w.id} widget={w}
                                              onWidgetDelete={this.props.onWidgetDelete}
                                              onWidgetMoveUp = {this.props.onWidgetMoveUp}
                                              onWidgetMoveDown = {this.props.onWidgetMoveDown}
                                              isUpDisabled={w.index == 1}
                                              isDownDisabled={w.index == widgets.length}/>)}
                </div>
                <button className="btn btn-danger bottom-right m-4" onClick={e => {
                    if(!(this.props.courseId && this.props.moduleId && this.props.lessonId && this.props.topicId))
                        return;
                    this.props.onWidgetAdd('New Widget',widgets.length);
                }}>
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
        )
    }
}
export default WidgetList;