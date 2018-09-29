import React from 'react';
import LessonNavBar from "./LessonNavBar";
import Module from "./Module";

const CourseEditor = () => {
    return (
        <div className="container-fluid m-0 p-0">
            <LessonNavBar/>
            <Module/>
            <button className="btn btn-danger bottom-right m-4">
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>
    );
}
export default CourseEditor;