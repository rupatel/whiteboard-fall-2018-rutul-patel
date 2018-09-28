import React from 'react';

const ModuleTabPane = () => {
    let selectedModuleID = 1;
    let modules = [
        {
            moduleID: 1,
            name: 'Module1-JQuery'
        },
        {
            moduleID: 2,
            name: 'Module2-React'
        },
        {
            moduleID: 3,
            name: 'Module3-Redux'
        },
        {
            moduleID: 4,
            name: 'Module4-Native'
        },
        {
            moduleID: 5,
            name: 'Module5-Angular'
        },
        {
            moduleID: 6,
            name: 'Module6-Node'
        },
        {
            moduleID: 7,
            name: 'Module7-Mongo'
        }
    ]
    return (
        <div className="container">
            <div className="row nav flex-column nav-pills" id="v-pills-module-tab" role="tablist"
                 aria-orientation="vertical">
                {
                    modules.map(module => {
                        let className = "nav-link m-2";
                        if (module.moduleID == selectedModuleID)
                            className = className + ' active ';
                        return (
                            <span className={className} id="v-pills-course1-module1-tab" data-toggle="pill"
                                  href="#v-pills-course1-module1" role="tab" aria-controls="v-pills-course1-module1"
                                  aria-selected="true">
                                <span className="pr-2"> Module1-JQuery </span>
                                <a className="float-right" href="#">
                                    <i className="fas fa-times action-icon"></i>
                                </a>
                            </span>
                        )
                    })
                }
            </div>
            <a className="m-2 float-right" id="v-pills-course1-module-add-tab"
               href="#">
                <i className="action-icon fas fa-2x fa-plus"></i>
            </a>
        </div>
    );
}
export default ModuleTabPane;