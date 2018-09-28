import React from 'react';

const TopicTabPane = () => {
    let selectedTopic = 1;
    let topics = [
        {
            topicID: '1',
            name: 'JQuery Topic1',
        },
        {
            topicID: '2',
            name: 'JQuery Topic2',
        },
        {
            topicID: '3',
            name: 'JQuery Topic3',
        },
        {
            topicID: '4',
            name: 'JQuery Topic4',
        }
    ]

    return (
        <ul className="nav nav-pills mb-3" id="module1-lesson1-tab" role="tablist">
            {
                topics.map(topic => {
                        let className = "nav-link ml-0 mb-2 mt-2";
                        if (topic.topicID == selectedTopic)
                        {
                            className = className + ' active ';
                        }
                        return (
                            <li className="nav-item" key={topic.topicID}>
                            <a className={className} id="module1-lesson1-topic1" data-toggle="pill"
                               href="#pills-module1-lesson1-topic1" role="tab"
                               aria-controls="pills-module1-lesson1-topic1" aria-selected="true">{topic.name}</a>
                            </li>)
                    }
                )
            }
            <li className="nav-item">
                <a className="m-2 nav-link" id="module-lesson-topic-add" data-toggle="pill"
                   href="#pills-module-lesson-topic-add" role="tab"
                   aria-controls="pills-module-lesson-topic-add" aria-selected="false">
                    <i className="fas fa-plus"></i>
                </a>
            </li>
        </ul>
    );
}
export default TopicTabPane;