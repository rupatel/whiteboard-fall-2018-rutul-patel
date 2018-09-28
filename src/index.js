import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Course from "./components/Course";
import CourseGrid from "./containers/CourseGrid";

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

ReactDom.render(<CourseGrid/>,document.getElementById('root'));