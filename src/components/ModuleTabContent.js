import React from 'react';
import Lesson from "./Lesson";
const ModuleTabContent = () => {
    return(
        <div className="tab-content" id="v-pills-course-module-tabContent">
            <div className="tab-pane fade show active" id="v-pills-module1" role="tabpanel"
                 aria-labelledby="v-pills-module1-tab">
                <Lesson/>
            </div>
        </div>
    );
}
export default ModuleTabContent;