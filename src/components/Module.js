import React from 'react';
import ModuleTabPane from "./ModuleTabPane";
import ModuleTabContent from "./ModuleTabContent";
import './Module.css';


const Module = ({
                    deleteModule, addModule, modules, updateModule, selectedModule, selectModule,
                    selectedLesson,
                    updateTopic, deleteTopic, addTopic, selectedTopic, findAllTopics, selectTopic
                }) => {
    return (
        <div className="container-fluid modules">
            <div className="row">
                <div className="col-3 modulesTab">
                    <ModuleTabPane
                        modules={modules}
                        selectedModule={selectedModule}
                        selectModule={selectModule}
                        deleteModule={deleteModule}
                        addModule={addModule}
                        updateModule={updateModule}
                    />
                </div>
                <div className="col-9 offset-3">
                    <ModuleTabContent
                        selectedModule={selectedModule}
                        selectedLesson = {selectedLesson}

                        updateTopic = {updateTopic}
                        deleteTopic = {deleteTopic}
                        addTopic = {addTopic}
                        selectedTopic = {selectedTopic}
                        findAllTopics = {findAllTopics}
                        selectTopic = {selectTopic}
                    />
                </div>
            </div>
        </div>
    );
}
export default Module;