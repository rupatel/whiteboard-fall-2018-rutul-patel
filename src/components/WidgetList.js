import React from 'react';
import Widget from './Widget';

class WidgetList extends React.Component
{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //props.findAllWidgetsForTopic(courseId,moduleId,lessonId,topicId)
    }
    render()
    {
        return (
            <div className="tab-content" id="pills-tabContent-module1">
                <div className="tab-pane fade show active" id='pills-module1-lesson1-topic1' role="tabpanel"
                     aria-labelledby='module1-lesson1-topic1'>
                    {props.widgets.map(w => <Widget key={w.id} widget={w}/>)}
                </div>
            </div>
        )
    }
}
export default WidgetList;