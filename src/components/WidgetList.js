import React from 'react';
import Widget from './Widget';

const WidgetList = ({widgets}) => {
    return (
        <div className="tab-content" id="pills-tabContent-module1">
            <div className="tab-pane fade show active" id='pills-module1-lesson1-topic1' role="tabpanel"
                 aria-labelledby='module1-lesson1-topic1'>
                {widgets.map(w => <Widget key={w.id} widget={w}/>)}
            </div>
        </div>
    )
}
export default WidgetList;