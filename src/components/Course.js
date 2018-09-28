import React from 'react';
import LessonNavBar from "./LessonNavBar";
import ModuleTabContent from "./ModuleTabContent";
import Module from "./Module";
const Course = () => {
    return(
        <div className="container-fluid m-0 p-0">
            <LessonNavBar/>
            <Module/>
        </div>
    );
}
export default Course;