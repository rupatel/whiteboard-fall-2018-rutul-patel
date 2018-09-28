import React from 'react';

let courses = [
    {
        "id": "123",
        "title": "CS5610",
        "modules": [
            {
                "title": "Week 1",
                "lessons": [
                    {
                        "title": "HTML",
                        "topics": [
                            {
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
                            }
                        ]
                    }
                ]
            },
            {
            },
        ]
    }
];
export default class CourseService {
    findAllCourses()
    {
        return courses;
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
}