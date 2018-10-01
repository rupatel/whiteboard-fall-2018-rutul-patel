import React from 'react';
import {Link} from 'react-router-dom';

const ModuleList = ({modules, selectedModule, selectModule, deleteModule, addModule, updateModule}) => {
    let actionIconStyle = {
        color: 'white'
    }

    let moduleTitleElem;
    let moduletTitleUpdate;
    return (
        <div className="container">
            <div className="row nav flex-column nav-pills" id="v-pills-module-tab" role="tablist"
                 aria-orientation="vertical">
                <span className="container">
                    <input defaultValue="New Module"
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
                              moduleTitleElem.value = 'New Module';
                          }}>
                        <i className="action-icon fas fa-2x fa-plus"></i>
                    </Link>
                </span>
                {
                    modules.map((module, index) => {
                        let className = "nav-link m-2 pt-0 pb-0 ";
                        let editInputId = module.id + 'module' + 'edit';
                        let mid = module.id;
                        if (module.id == selectedModule)
                            className = className + ' active ';
                        return (
                            <span className={className} id="v-pills-course1-module1-tab" data-toggle="pill"
                                  role="tab" aria-controls="v-pills-course1-module1"
                                  aria-selected="true"
                                  onClick={() => {
                                      selectModule(module.id);
                                  }}>
                                <input disabled='true'
                                    onChange={ (e) => {
                                        let module = modules.filter(m => m.id==mid)[0];
                                        module.title = e.currentTarget.value;
                                        updateModule(module);
                                    }}
                                    id = {editInputId}
                                    className="p-0 form-control w-75 d-inline" value={module.title}
                                       style={{backgroundColor:'transparent',
                                                border:0,
                                                color:'white'}}
                                        onBlur = {(e) =>{
                                            e.currentTarget.setAttribute('disabled','true');
                                        }}/>

                                <Link className="float-right" to="#"
                                   onClick={(e) => {
                                       e.stopPropagation();
                                       deleteModule(module.id);
                                   }}>
                                    <i className="fas fa-times" style={actionIconStyle}></i>
                                </Link>
                                <Link className="float-right mr-2"
                                      to="#"
                                      onClick={(e) => {
                                          let updateElem = document.getElementById(editInputId);
                                          updateElem.removeAttribute('disabled');
                                          updateElem.focus();
                                          updateElem.select();
                                          e.stopPropagation();
                                      }}>
                                    <i className="action-icon fas fa-pencil-alt" style={actionIconStyle}></i>
                                </Link>

                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default ModuleList;