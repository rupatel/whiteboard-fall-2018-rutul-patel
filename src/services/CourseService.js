import React from 'react';
import WidgetService from "./WidgetService";
let widgetService = new WidgetService();
let courses = [
    {
        "id": "123",
        "title": "CS5610",
        "modules": [
            {
                "id":"1",
                "title": "Week 1",
                "lessons": [
                    {
                        "id":"1",
                        "title": "HTML",
                        "topics": [
                            {
                                "id":"1",
                                "title": "DOM",
                                "widgets": [
                                    {
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {
                                "id":"2",
                                "title": "HTML",
                                "widgets": [
                                    {
                                        "id":"1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "HTML CSS"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":"2",
                        "title": "CSS",
                        "topics": [
                            {
                                "id":"1",
                                "title": "CSS3",
                                "widgets": [
                                    {
                                        "id":"1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "CSS#"
                                    }
                                ]
                            },
                            {
                                "id":"2",
                                "title": "bootstrap",
                                "widgets": [
                                    {
                                        "id":"1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "bootstrap flex"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":"2",
                "title": "Week 2",
                "lessons": [
                    {
                        "id":"1",
                        "title": "HTML",
                        "topics": [
                            {
                                "id":"1",
                                "title": "React",
                                "widgets": [
                                    {
                                        "id":"1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The is JSX doc"
                                    },
                                    {
                                        "id":"2",
                                        "type": "PARAGRAPH",
                                        "text": "intro to Components"
                                    },
                                    {
                                        "id":"3",
                                        "type": "LIST",
                                        "items": "lifecycle,componentdidmount,constructor"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id":"3",
                "title": "Week 3",
                "lessons": [
                    {
                        "id":"1",
                        "title": "Redux",
                        "topics": [
                            {
                                "id":"1",
                                "title": "store",
                                "widgets": [
                                    {
                                        "id":"1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Redux Store"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
export default class CourseService {
    WidgetService wd = new Wi
    findAllCourses()
    {
        return courses ? courses : [];
    }

    findCourseById(id)
    {
        return courses.filter(course => course.id == id)[0];
    }

    updateCourse(id,course)
    {
        courses =  courses.map(c => {
            if(c.id==id){
                return course
            }
            else return c;
        });
    }

    deleteCourse(id){
        courses =  courses.filter(c => {
            return c.id!=id;
        });
    }

    createCourse(c){
        courses.push(c)
    }

    // these apis dont belong here need to just be in widget service
    createWidget(courseId,moduleId,lessonId,topicId, widget){
        widgetService.createWidget(courseId,moduleId,lessonId,topicId,widget);
    }

    findWidgets(courseId,moduleId,lessonId,topicId){
        return widgetService.findAllWidgets(courseId,moduleId,lessonId,topicId);
    }
    findWidget(courseId,modulesId,lessonId,topicId,widgetId){
        return widgetService.findWidgetById(courseId,modulesId,lessonId,topicId,widgetId)
    }
    updateWidget(courseId,moduleId,lessonId,topicId,widget){
        widgetService.updateWidget(courseId,moduleId,lessonId,topicId,widget)
    }
    deleteWidget(courseId,moduleId,lessonId,topicId,widgetId){
        widgetService.deleteWidget(courseId,moduleId,lessonId,topicId,widgetId);
    }
}