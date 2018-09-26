import React from 'react';
import Widget from './Widget';

const TopicTabContent = () => {
    return(
        <div className="tab-content" id="pills-tabContent-module1">
            <div className="tab-pane fade show active" id='pills-module1-lesson1-topic1' role="tabpanel"
                 aria-labelledby= 'module1-lesson1-topic1'>
                <Widget/>
            </div>
            <div className="tab-pane fade" id='pills-module1-lesson1-topic2' role="tabpanel"
                 aria-labelledby= "module1-lesson1-topic2">
                Module1 Lesson1 Topic 2 Widgets
            </div>
            <div className="tab-pane fade active" id="pills-module1-lesson1-topic3" role="tabpanel"
                 aria-labelledby= "module1-lesson1-topic3">
                Module1 Lesson1 Topic 3 Widgets
            </div>
            <div className="tab-pane fade" id="pills-module1-lesson1-topic4" role="tabpanel"
                 aria-labelledby="module1-lesson1-topic4">
                Module1 Lesson1 Topic 4 Widgets
            </div>
            <div className="tab-pane fade" id="pills-module1-lesson1-topic5" role="tabpanel"
                 aria-labelledby="module1-lesson1-topic5">
                Module1 Lesson1 Topic 5 Widgets
            </div>
        </div>
    )
}
export default TopicTabContent;