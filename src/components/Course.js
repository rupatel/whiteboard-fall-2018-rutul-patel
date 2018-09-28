import React from 'react';
import LessonNavBar from "./LessonNavBar";
import ModuleTabContent from "./ModuleTabContent";
import Module from "./Module";
const Course = () => {
    return(
        <div>
            <LessonNavBar/>
            <Module/>
        </div>
    );
}
export default Course;