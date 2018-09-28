import React from 'react';
import LessonNavBar from "./LessonNavBar";
import ModuleTabContent from "./ModuleTabContent";
const Course = () => {
    return(
        <div>
            <LessonNavBar/>
            <div className="container-fluid topics" height="100vh">
                <div className="row">
                    <div className="col-3 modules">
                        <div className="container">
                            <ModuleTabContent/>
                        </div>
                        <div className="col-9 offset-3">
                            <div className="tab-pane fade show active" id="nav-lesson1" role="tabpanel"
                                 aria-labelledby="nav-lesson1-tab">
                                <ModuleTabContent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}