import React from 'react';
import ModuleTabPane from "./ModuleTabPane";
import ModuleTabContent from "./ModuleTabContent";
import './Module.css';
const Module = ({deleteModule,addModule,modules,updateModule,
                    selectedModule,selectedLesson,selectedTopic,
                    selectModule}) => {
    //context state
    let module = selectedModule ?  modules.filter(m => m.id == selectedModule) : '';
    let lesson = selectedLesson ?  module.modules.filter(l => l.id == selectedLesson) : '';
    let topic = selectedTopic ? lesson.topics.filter(t => t.id == selectedTopic) : '';

    return (
        <div className="container-fluid modules">
            <div className="row">
                <div className="col-3 modulesTab">
                    <ModuleTabPane
                        modules = {modules}
                        selectedModule = {selectedModule}
                        selectModule = {selectModule}
                        deleteModule = {deleteModule}
                        addModule = {addModule}
                        updateModule = {updateModule}
                    />
                </div>
                <div className="col-9 offset-3">
                    <ModuleTabContent
                        selectedModule = {selectedModule}
                        selectedLesson = {selectedLesson}
                        selectedTopic = {selectedTopic}
                    />
                </div>
            </div>
        </div>
    );
}
export default Module;