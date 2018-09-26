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

ReactDom.render(<Widget/>,document.getElementById('root'));