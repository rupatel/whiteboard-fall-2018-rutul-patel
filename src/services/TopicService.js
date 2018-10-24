import React from 'react';
import LessonService from "./LessonService";

const URL = 'https://cs5610-fall-2018-java-server.herokuapp.com';

export default class TopicService {
    static findAllTopics(cid, mid, lid) {
        return fetch(URL + '/api/lesson/' + lid + '/topic',
            {
                credentials: 'include',
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static findTopicById(cid, mid, lid, tid) {
        return fetch(URL + '/api/topic/' + tid,
            {
                credentials: 'include',
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static updateTopic(cid, mid, lid, topic) {
        return fetch(URL + '/api/topic/' + topic.id,
            {
                credentials: 'include',
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(topic)
            });
    }

    static deleteTopic(cid, mid, lid, tid) {
        return fetch(URL + '/api/topic/' + tid,
            {
                credentials: 'include',
                method: "DELETE",
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }

    static createTopic(cid, mid, lid, topic) {
        return fetch(URL + '/api/lesson/' + lid + '/topic',
            {
                credentials: 'include',
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(topic)
            });
    }
}