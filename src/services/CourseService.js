import React from 'react';

const URL = 'https://cs5610-fall-2018-java-server.herokuapp.com:8080';

export default class CourseService {
    static findAllCourses() {
        return fetch(URL + '/api/profile',
            {
                credentials: 'include',
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static findCourseById(id) {
        return fetch(URL + '/api/course/' + id,
            {
                credentials: 'include',
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static updateCourse(id, course) {
        return fetch(URL + '/api/course/' + id,
            {
                credentials: 'include',
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(course)
            });
    }

    static deleteCourse(id) {
        return fetch(URL + '/api/course/' + id,
            {
                credentials: 'include',
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static createCourse(c) {
        return fetch(URL + '/api/course',
            {
                credentials: 'include',
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(c)
            });
    }
}