import React from 'react';
import LessonService from "./LessonService";

let lessonService =  new LessonService();

export default class TopicService {
    findAllTopics(courseId,moduleId,lessonId)
    {
        let lesson = lessonService.findLessonById(courseId,moduleId,lessonId);
        return lesson.topics
    }
    findTopicById(courseId,moduleId,lessonId,topicId){
        let topics = this.findAllTopics(courseId,moduleId);
        return topics.filter(t => t.id == topicId)[0]
    }
    deleteTopic(courseId,moduleId,lessonId,topicId)
    {
        let lesson = {... lessonService.findLessonById(courseId,moduleId,lessonId)};
        let newTopics = lesson.topics.filter(t => t.id != topicId);
        lesson.topics = newTopics;
        lessonService.updateLesson(courseId,moduleId,lesson );
    }

    updateTopic(courseId,moduleId,lessonId,topic)
    {
        let topics = this.findAllTopics(courseId,moduleId,lessonId).map(t =>{
            if(t.id == topic.id) return topic;
            else return t;
        });
        let lesson = {...lessonService.findLessonById(courseId,moduleId,lessonId)};
        lesson.topics = topics
        lessonService.updateLesson(courseId,moduleId,lessonId,lesson);
    }
    createTopic(courseId,moduleId,lessonId,topic){
        let topics = this.findAllTopics(courseId,moduleId,lessonId);
        topics.push(topic);
        let lesson = {...lessonService.findLessonById(courseId,moduleId,lessonId)};
        lesson.topics = topics;
        lessonService.updateLesson(courseId,moduleId,lessonId,lesson);
    }
}