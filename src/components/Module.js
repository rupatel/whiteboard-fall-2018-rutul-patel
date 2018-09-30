import React from 'react';
import ModuleTabPane from "./ModuleTabPane";
import ModuleTabContent from "./ModuleTabContent";
import './Module.css';


const Module = ({
                    deleteModule, addModule, modules, updateModule, selectedModule, selectModule,
                    selectedLesson,
                    updateTopic, deleteTopic, addTopic, selectedTopic,selectTopic,topics
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
                        updateTopic={updateTopic}
                        deleteTopic={deleteTopic}
                        addTopic={addTopic}
                        selectedTopic={selectedTopic}
                        selectTopic={selectTopic}
                        topics={topics}/>
                </div>
            </div>
        </div>
    );
}
export default Module;