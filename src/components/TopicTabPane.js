import React from 'react';

const TopicTabPane = () => {
    return (
        <ul className="nav nav-pills mb-3" id="module1-lesson1-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active ml-0 mb-2 mt-2" id="module1-lesson1-topic1" data-toggle="pill"
                   href="#pills-module1-lesson1-topic1" role="tab"
                   aria-controls="pills-module1-lesson1-topic1" aria-selected="true">JQuery Topic1</a>
            </li>
            <li className="nav-item">
                <a className="m-2 nav-link" id="module1-lesson1-topic2" data-toggle="pill"
                   href="#pills-module1-lesson1-topic2" role="tab"
                   aria-controls="pills-module1-lesson1-topic2" aria-selected="false">JQuery Topic2</a>
            </li>
            <li className="nav-item">
                <a className="m-2 nav-link" id="module1-lesson1-topic3" data-toggle="pill"
                   href="#pills-module1-lesson1-topic3" role="tab"
                   aria-controls="pills-module1-lesson1-topic3" aria-selected="false">JQuery Topic3</a>
            </li>
            <li className="nav-item">
                <a className="m-2 nav-link" id="module1-lesson1-topic4" data-toggle="pill"
                   href="#pills-module1-lesson1-topic4" role="tab"
                   aria-controls="pills-module1-lesson1-topic4" aria-selected="false">JQuery Topic4</a>
            </li>
            <li className="nav-item">
                <a className="m-2 nav-link" id="module1-lesson1-topic-add" data-toggle="pill"
                   href="#pills-module1-lesson1-topic-add" role="tab"
                   aria-controls="pills-module1-lesson1-topic-add" aria-selected="false">
                    <i className="fas fa-plus"></i>
                </a>
            </li>
        </ul>
    );
}

export default TopicTabPane;