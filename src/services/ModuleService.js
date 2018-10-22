import React from 'react';
const URL = 'http://localhost:8080';

export default class ModuleService {
    static findAllModules(courseId) {
        return fetch(URL + '/api/course/'+courseId+'/module',
            {
                credentials: 'include',
                method:"GET",
                headers:{
                    "Content-Type":'application/json'
                }
            });
    }

    static findModuleById(courseId, moduleId) {
        return fetch(URL + '/api/module/' + moduleId,
            {
                credentials: 'include',
                method:"GET",
                headers:{
                    "Content-Type":'application/json'
                }
            });
    }

    static deleteModule(courseId, moduleId) {
        return fetch(URL + '/api/module/' + moduleId,
            {
                credentials: 'include',
                method:"DELETE",
                headers:{
                    "Content-Type":'application/json'
                }
            });
    }

    static updateModule(courseId, module) {
        return fetch(URL + '/api/module/' + module.id,
            {
                credentials: 'include',
                method:"PUT",
                headers:{
                    "Content-Type":'application/json'
                },
                body:JSON.stringify(module)
            });
    }

    static createModule(courseId, module) {
        return fetch(URL + '/api/course/'+courseId+'/module',
            {
                credentials: 'include',
                method:"POST",
                headers:{
                    "Content-Type":'application/json'
                },
                body: JSON.stringify(module)
            });
    }
}