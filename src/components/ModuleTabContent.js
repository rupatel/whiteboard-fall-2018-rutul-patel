import React from 'react';
import Topic from "./Topic";

const ModuleTabContent = (selectedTopic,topics) => {
    return (
        <div className="tab-content" id="v-pills-course-module-tabContent">
            <div className="tab-pane fade show active" id="v-pills-module1" role="tabpanel"
                 aria-labelledby="v-pills-module1-tab">
                <Topic/>
            </div>
        </div>
    );
}
export default ModuleTabContent;