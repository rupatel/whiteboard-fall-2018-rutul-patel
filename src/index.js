import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CourseGrid from "./containers/CourseGrid";
import CourseRowHeader from "./components/CourseRowHeader"
import CourseRow from "./components/CourseRow"

ReactDom.render(<CourseRow/>,document.getElementById('root'));