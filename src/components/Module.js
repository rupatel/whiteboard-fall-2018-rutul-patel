import React from 'react';
import ModuleTabPane from "./ModuleTabPane";
import ModuleTabContent from "./ModuleTabContent";
const Module = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 modules">
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