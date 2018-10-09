import React from 'react';
let courses = [
    {
        "id": "123",
        "title": "CS5610",
        "modules": [
            {
                "id": "1",
                "title": "Week 1",
                "lessons": [
                    {
                        "id": "1",
                        "title": "HTML",
                        "topics": [
                            {
                                "id": "1",
                                "title": "DOM",
                                "widgets": [
                                    {
                                        "id":1,
                                        "type": "HEADING",
                                        "size": 2,
                                        "text": "The Document Object Model",
                                        "name" : 'Article Header',
                                        "index" : 1
                                    },
                                    {
                                        "id":2,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM",
                                        "name" : 'abstract',
                                        "index" : 2
                                    },
                                    {
                                        "id":3,
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes",
                                        "name" : 'module list',
                                        "isOrdered" : false,
                                        "index" : 3
                                    },
                                    {
                                        "id":4,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200",
                                        "name" : 'react lifecycle diagram',
                                        "index" : 4
                                    },
                                    {
                                        "id":5,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model",
                                        "name" : "react docs link",
                                        "index" : 5
                                    }
                                ]
                            },
                            {
                                "id": "2",
                                "title": "HTML",
                                "widgets": [
                                    {
                                        "id": "1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "HTML CSS",
                                        "name" : "implementation header",
                                        "index" : 1
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "2",
                        "title": "CSS",
                        "topics": [
                            {
                                "id": "1",
                                "title": "CSS3",
                                "widgets": [
                                    {
                                        "id": "1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "CSS#",
                                        "name" : "results header",
                                        "index" : 1
                                    }
                                ]
                            },
                            {
                                "id": "2",
                                "title": "bootstrap",
                                "widgets": [
                                    {
                                        "id": "1",
                                        "type": "HEADING",
                                        "size": 2,
                                        "text": "bootstrap flex",
                                        "name" : "analysis header",
                                        "index" : 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "2",
                "title": "Week 2",
                "lessons": [
                    {
                        "id": "1",
                        "title": "HTML",
                        "topics": [
                            {
                                "id": "1",
                                "title": "React",
                                "widgets": [
                                    {
                                        "id": "1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The is JSX doc",
                                        "name" : "related work header",
                                        "index" : 1
                                    },
                                    {
                                        "id": "2",
                                        "type": "PARAGRAPH",
                                        "text": "intro to Components",
                                        "name" : "future work",
                                        "index" : 2
                                    },
                                    {
                                        "id": "3",
                                        "type": "LIST",
                                        "items": "lifecycle,componentdidmount,constructor",
                                        "name" : "api lists",
                                        "isOrdered" : true,
                                        "index" : 3
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "3",
                "title": "Week 3",
                "lessons": [
                    {
                        "id": "1",
                        "title": "Redux",
                        "topics": [
                            {
                                "id": "1",
                                "title": "store",
                                "widgets": [
                                    {
                                        "id": "1",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Redux Store",
                                        "name" : "Redux Store header",
                                        "index" : 1
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
    findAllCourses() {
        return courses ? courses : [];
    }

    findCourseById(id) {
        return courses.filter(course => course.id == id)[0];
    }

    updateCourse(id, course) {
        courses = courses.map(c => {
            if (c.id == id) {
                return course
            }
            else return c;
        });
    }

    deleteCourse(id) {
        courses = courses.filter(c => {
            return c.id != id;
        });
    }

    createCourse(c) {
        courses.push(c)
    }
}