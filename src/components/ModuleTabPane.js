import React from 'react';

const ModuleTabPane = ({modules,selectedModule,selectModule,deleteModule}) => {
    let actionIconStyle = {
        color: 'white'
    }

    return (
        <div className="container">
            <div className="row nav flex-column nav-pills" id="v-pills-module-tab" role="tablist"
                 aria-orientation="vertical">
                {
                    modules.map((module,index) => {
                        let className = "nav-link m-2";
                        if ((selectedModule && module.id == selectedModule) || index==0)
                            className = className + ' active ';
                        return (
                            <span className={className} id="v-pills-course1-module1-tab" data-toggle="pill"
                                  href="#v-pills-course1-module1" role="tab" aria-controls="v-pills-course1-module1"
                                  aria-selected="true"
                                  onClick={() => {
                                      selectModule(module.id);
                                  }}>
                                <span
                                    className="pr-2"> {module.title} </span>
                                <a className="float-right" href="#"
                                   onClick={() => {
                                       deleteModule(module.id);
                                   }}>
                                    <i className="fas fa-times" style={actionIconStyle}></i>
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