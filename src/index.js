import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css'
import CourseGrid from "./components/CourseGrid";
import CourseTable from "./components/CourseTable";
import CourseEditor from "./containers/CourseEditor";
import WhiteBoard from "./containers/WhiteBoard";

let widget = {
    courseID: 1,
    lessonID: 1,
    topicID: 1,
    widgetID: 1,
    widgetName: 'heading widget',
    widgetType: 'Heading',
    headingText: 'Heading Text',
    headingType: 'Heading1'
}

ReactDom.render(<WhiteBoard/>,document.getElementById('root'));