import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css'

import CourseGrid from "./containers/CourseGrid";
import CourseRowHeader from "./components/CourseRowHeader";
import CourseRow from "./components/CourseRow";
import CourseTableNavBar from "./components/CourseTableNavBar";
import CourseTable from "./containers/CourseTable";
import CourseEditorNavBar from './components/CourseEditorNavBar';
import CourseModuleRow from './components/CourseModuleRow'
import Widget from './components/Widget';
import TopicTabPane from './components/TopicTabPane';
import Topic from './components/Topic';
import LessonTabContent from "./components/LessonTabContent";
import Lesson from "./components/Lesson";
import CourseService from "./services/CourseService";
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

var c = new CourseService();
console.log(c.findAllCourses());

ReactDom.render(<Widget widget={widget}/>,document.getElementById('root'));