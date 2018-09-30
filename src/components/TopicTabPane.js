import React from 'react';
import {Link} from "react-router-dom";
const TopicTabPane = ({updateTopic,deleteTopic,addTopic,selectedTopic,selectTopic,topics}) => {
    let topicTitleElem;
    let actionIconStyle = {
        color: '#655858'
    }

    return (
        <div className="row w-100">
            <div className="col-7">
                <ul className="nav nav-pills mb-3" id="module1-lesson1-tab" role="tablist">
                    {
                        topics.map(topic => {
                                let className = "nav-link ml-0 mb-2 mt-2 mr-2";
                                if (topic.id == selectedTopic) {
                                    className = className + ' active ';
                                }
                                return (
                                    <li className="nav-item" key={topic.id}>
                                        <span className={className} id="module1-lesson1-topic1" data-toggle="pill"
                                           href="#pills-module1-lesson1-topic1" role="tab"
                                           aria-controls="pills-module1-lesson1-topic1" aria-selected="true"
                                           onClick={() => {
                                               selectTopic(topic.id);
                                           }}>
                                            <a className="pr-2"> {topic.title} </a>
                                                <Link className="float-right" to="#"
                                                      onClick={(e) => {
                                                          e.stopPropagation();
                                                          deleteTopic(topic.id);
                                                      }}>
                                                    <i className="fas fa-times"></i>
                                                </Link>
                                        </span>
                                    </li>)
                            }
                        )
                    }
                </ul>
            </div>
            <div className="col-5">
                <input defaultValue='New Lesson'
                       ref={selectDomElement => {
                           topicTitleElem = selectDomElement
                       }}
                       className="form-control w-75 mr-2 d-inline"/>
                <Link
                    to="#" onClick={() => {
                    addTopic({
                        id: (new Date()).getTime() + '',
                        title: topicTitleElem.value,
                        widgets: []
                    });
                    topicTitleElem.value = 'New Topic';
                }}>
                    <i className="fas fa-plus fa-2x action-icon" style={actionIconStyle}></i>
                </Link>
                <Link
                      style = {{color:'blue'}}
                      className="ml-2"
                      to="#"
                      onClick={(e) => {
                          e.stopPropagation();
                          if (selectedTopic) {
                              let topic = topics.filter(t => t.id == selectedTopic)[0];
                              topic.title = topicTitleElem.value;
                              updateTopic(topic);
                          }
                      }}>
                    <i className="action-icon fas fa-pencil-alt fa-2x" style={actionIconStyle}></i>
                </Link>
            </div>
        </div>
    );
}
export default TopicTabPane;