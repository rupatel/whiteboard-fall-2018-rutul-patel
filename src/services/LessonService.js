import React from 'react';
import ModuleService from "./ModuleService";

const URL = 'https://webdev-assignment-5.herokuapp.com';

export default class LessonService {
    static findAllLessons(cid, mid) {
        return fetch(URL + '/api/module/' + mid + '/lesson',
            {
                credentials: 'include',
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static findLessonById(cid, mid, lid) {
        return fetch(URL + '/api/lesson/' + lid,
            {
                credentials: 'include',
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static updateLesson(cid, mid, lesson) {
        return fetch(URL + '/api/lesson/' + lesson.id,
            {
                credentials: 'include',
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(lesson)
            });
    }

    static deleteLesson(cid, mid, lid) {
        return fetch(URL + '/api/lesson/' + lid,
            {
                credentials: 'include',
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static createLesson(cid, mid, lesson) {
        return fetch(URL + '/api/module/' + mid + '/lesson',
            {
                credentials: 'include',
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(lesson)
            });
    }
}