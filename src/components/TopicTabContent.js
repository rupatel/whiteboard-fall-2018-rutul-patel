import React from 'react';
import Widget from './Widget';

const TopicTabContent = () => {
    let widgets = [
        {
            courseID:1,
            lessonID:1,
            topicID:1,
            widgetID:1,
            widgetName:'heading widget',
            widgetType:'Heading',
            headingText:'Heading Text',
            headingType:'Heading1',
        },
        {
            courseID:1,
            lessonID:1,
            topicID:1,
            widgetID:1,
            widgetName:'heading widget',
            widgetType:'Heading',
            headingText:'Heading Text',
            headingType:'Heading1',
        }
    ]

    return(
        <div className="tab-content" id="pills-tabContent-module1">
            <div className="tab-pane fade show active" id='pills-module1-lesson1-topic1' role="tabpanel"
                 aria-labelledby= 'module1-lesson1-topic1'>
                {widgets.map(w=><Widget key={w.widgetID} widget={w}/>)}
            </div>
        </div>
    )
}
export default TopicTabContent;