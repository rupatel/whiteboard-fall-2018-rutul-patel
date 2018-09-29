import React from 'react';

const ModuleTabPane = ({modules, selectedModule, selectModule, deleteModule, addModule}) => {
    let actionIconStyle = {
        color: 'white'
    }

    let moduleTitleElem;
    return (
        <div className="container">
            <div className="row nav flex-column nav-pills" id="v-pills-module-tab" role="tablist"
                 aria-orientation="vertical">
                {
                    modules.map((module, index) => {
                        let className = "nav-link m-2";
                        if ((selectedModule && module.id == selectedModule) || index == 0)
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
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       deleteModule(module.id);
                                   }}>
                                    <i className="fas fa-times" style={actionIconStyle}></i>
                                </a>
                            </span>
                        )
                    })
                }
            </div>
            <input
                ref={selectDomElement => {
                    moduleTitleElem = selectDomElement
                }}
                className="form-control w-100"/>
            <a className="m-2 float-right" id="v-pills-course1-module-add-tab"
               href="#"
               onClick={(e) => {
                   addModule({
                       id: (new Date()).getTime() + '',
                       title: moduleTitleElem.value
                   });
                   moduleTitleElem.value = '';
               }}>
                <i className="action-icon fas fa-2x fa-plus"></i>
            </a>
        </div>
    );
}
export default ModuleTabPane;