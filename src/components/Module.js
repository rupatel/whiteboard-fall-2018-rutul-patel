import React from 'react';
import ModuleTabPane from "./ModuleTabPane";
import ModuleTabContent from "./ModuleTabContent";
import './Module.css';

const Module = () => {

    return (
        <div className="container-fluid modules">
            <div className="row">
                <div className="col-3 modulesTab">
                    <ModuleTabPane/>
                </div>
                <div className="col-9 offset-3">
                    <ModuleTabContent/>
                </div>
            </div>
        </div>
    );
}
export default Module;