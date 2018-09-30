import React from 'react';
import {Link} from 'react-router-dom';

const ModuleTabPane = ({modules, selectedModule, selectModule, deleteModule, addModule, updateModule}) => {
    let actionIconStyle = {
        color: 'white'
    }

    let moduleTitleElem;
    return (
        <div className="container">
            <div className="row nav flex-column nav-pills" id="v-pills-module-tab" role="tablist"
                 aria-orientation="vertical">
                <span className="container">
                    <input defaultValue="New Title"
                           ref={selectDomElement => {
                               moduleTitleElem = selectDomElement
                           }}
                           className="form-control d-inline mr-2" style={{width:'70%'}}/>
                    <Link id="v-pills-course1-module-add-tab"
                          to="#"
                          onClick={(e) => {
                              addModule({
                                  id: (new Date()).getTime() + '',
                                  title: moduleTitleElem.value
                              });
                              moduleTitleElem.value = 'New Title';
                          }}>
                        <i className="action-icon fas fa-2x fa-plus"></i>
                    </Link>
                    <Link className="ml-2"
                          to="#"
                          onClick={(e) => {
                              e.stopPropagation();
                              if(selectedModule)
                              {
                                  let module = modules.filter(m => m.id==selectedModule)[0];
                                  module.title = moduleTitleElem.value;
                                  updateModule(selectedModule,module);
                              }
                          }}>
                        <i className="action-icon fas fa-pencil-alt fa-2x" style={actionIconStyle}></i>
                    </Link>
                </span>
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
        </div>
    );
}
export default ModuleTabPane;