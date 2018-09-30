import React from 'react';
import ModuleService from "./ModuleService";

let moduleService =  new ModuleService();

export default class LessonService {
    findAllLessons(courseId,moduleId)
    {
        let module = moduleService.findModuleById(courseId,moduleId);
        return module.lessons
    }
    findLessonById(courseId,moduleId,lessonId){
        let lessons = this.findAllLessons(courseId,moduleId);
        return lessons.filter(l => l.id == lessonId)[0]
    }
    deleteLesson(courseId,moduleId,lessonId)
    {
        let module = {... moduleService.findModuleById(courseId,moduleId)};
        let newLessons = module.lessons.filter(l => l.id != lessonId);
        module.lessons = newLessons;
        moduleService.updateModule(courseId,module);
    }

    updateLesson(courseId,moduleId,lesson)
    {
        let lessons = this.findAllLessons(courseId,moduleId).map(l =>{
            if(l.id == lesson.id) return lesson;
            else return l;
        });
        let module = {...moduleService.findModuleById(courseId,moduleId)};
        module.lessons = lessons
        moduleService.updateModule(courseId,module);
    }
    createLesson(courseId,moduleId,lesson){
        let lessons = this.findAllLessons(courseId,moduleId)
        lessons.push(lesson);
        let module = {...moduleService.findModuleById(courseId,moduleId)};
        module.lessons = lessons;
        moduleService.updateModule(courseId,moduleId);
    }
}