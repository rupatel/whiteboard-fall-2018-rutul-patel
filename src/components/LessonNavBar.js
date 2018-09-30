import React from 'react';
import './LessonNavBar.css'
import {Link} from 'react-router-dom';

const LessonNavBar = ({
                          courseTitle, updateLesson, deleteLesson, addLesson, selectedLesson,
                          selectLesson, lessons
                      }) => {
    let navBarStyle = {
        background: '#4e4747',
        height: '10vh'
    }
    let actionIconStyle = {
        color: 'white'
    }
    let lessonTitleElem;
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top" style={navBarStyle}>
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-3">
                        <div className="row">
                        <span className="col-2 mr-2">
                            <Link to="#">
                                <i className="fas fa-times fa-2x action-icon"></i>
                            </Link>
                        </span>
                            <span className="p-0 m-0 col-8 navbar-brand text-white text-bold">
                                {courseTitle}
                        </span>
                        </div>
                    </div>
                    <div className="col-5">
                        <nav className="navLessons">
                            <div className="nav nav-tabs border-bottom-0 hover-black" id="nav-module1-lesson1-tab"
                                 role="tablist">
                                {
                                    lessons.map(lesson => {
                                        let className = "nav-item nav-link text-black";
                                        if (lesson.id == selectedLesson)
                                            className = className + ' active show ';
                                        return (
                                            <span className={className} id="nav-module1-lesson1-tab"
                                                  data-toggle="tab" role="tab"
                                                  aria-controls="nav-module1-lesson1"
                                                  aria-selected="true"
                                                  onClick={() => {
                                                      selectLesson(lesson.id);
                                                  }}>
                                                <a className="pr-2"> {lesson.title} </a>
                                                <Link className="float-right" to="#"
                                                      onClick={(e) => {
                                                          e.stopPropagation();
                                                          deleteLesson(lesson.id);
                                                      }}>
                                                    <i className="fas fa-times"></i>
                                                </Link>
                                            </span>
                                        )
                                    })}
                            </div>
                        </nav>
                    </div>

                    <div className="col-4">
                        <input defaultValue='New Lesson'
                               ref={selectDomElement => {
                                   lessonTitleElem = selectDomElement
                               }}
                               className="form-control w-75 mr-2 d-inline"/>
                        <Link to="#" onClick={() => {
                            addLesson({
                                id: (new Date()).getTime() + '',
                                title: lessonTitleElem.value,
                                topics: []
                            });
                            lessonTitleElem.value = 'New Lesson';
                        }}>
                            <i className="fas fa-plus fa-2x action-icon"></i>
                        </Link>
                        <Link className="ml-2"
                              to="#"
                              onClick={(e) => {
                                  e.stopPropagation();
                                  if (selectedLesson) {
                                      let lesson = lessons.filter(l => l.id == selectedLesson)[0];
                                      lesson.title = lessonTitleElem.value;
                                      updateLesson(lesson);
                                  }
                              }}>
                            <i className="action-icon fas fa-pencil-alt fa-2x" style={actionIconStyle}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default LessonNavBar;