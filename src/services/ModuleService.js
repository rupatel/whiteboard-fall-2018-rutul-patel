import React from 'react';
import CourseService from "./CourseService";

let courseService = new CourseService();
export default class ModuleService {
    static findAllModules(courseId) {
        return fetch(URL + '/api/profile',
            {
                credentials: 'include',
                method:"GET",
                headers:{
                    "Content-Type":'application/json'
                }
            });
    }

    static findModuleById(courseId, moduleId) {
        let course = courseService.findCourseById(courseId);
        return course.modules.filter(m => m.id == moduleId)[0]
    }

    static deleteModule(courseId, moduleId) {

        let course = {... courseService.findCourseById(courseId)};
        let newModules = course.modules.filter(m => m.id != moduleId);
        course.modules = newModules;
        courseService.updateCourse(courseId, course);
    }

    static updateModule(courseId, module) {
        let modules = this.findAllModules(courseId).map(m => {
            if (m.id == module.id) return module;
            else return m;
        });
        let course = {...courseService.findCourseById(courseId)};
        course.modules = modules;
        courseService.updateCourse(courseId, course);
    }

    static createModule(courseId, module) {
        let modules = this.findAllModules(courseId)
        modules.push(module);
        let course = {...courseService.findCourseById(courseId)};
        course.modules = modules;
        courseService.updateCourse(courseId, course);
    }
}