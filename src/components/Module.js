import React from 'react';
import ModuleTabPane from "./ModuleTabPane";
import ModuleTabContent from "./ModuleTabContent";
import './Module.css';
const Module = ({deleteModule,addModule,modules,updateModule,
                    selectedModule,selectedLesson,selectedTopic,
                    selectModule}) => {
    return (
        <div className="container-fluid modules">
            <div className="row">
                <div className="col-3 modulesTab">
                    <ModuleTabPane
                        modules = {modules}
                        selectedModule = {selectedModule}
                        selectModule = {selectModule}
                        deleteModule = {deleteModule}
                    />
                </div>
                <div className="col-9 offset-3">
                    <ModuleTabContent/>
                </div>
            </div>
        </div>
    );
}
export default Module;