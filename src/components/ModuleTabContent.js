import React from 'react';
import Topic from "./Topic";

const ModuleTabContent = ({updateTopic,deleteTopic,addTopic,selectedTopic,
                          selectTopic,topics}) => {
    return (
        <div className="tab-content" id="v-pills-course-module-tabContent">
            <div className="tab-pane fade show active" id="v-pills-module1" role="tabpanel"
                 aria-labelledby="v-pills-module1-tab">
                <Topic
                    updateTopic = {updateTopic}
                    deleteTopic = {deleteTopic}
                    addTopic = {addTopic}
                    selectedTopic = {selectedTopic}
                    selectTopic = {selectTopic}
                    topics = {topics}
                />
            </div>
        </div>
    );
}
export default ModuleTabContent;