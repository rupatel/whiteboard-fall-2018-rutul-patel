import React from 'react';
import './LessonNavBar.css'
const LessonNavBar = () => {
    let navBarStyle = {
        background:'#4e4747',
        height: '10vh'
    }
    let courseName = "CS5610";
    let selectedLesson = 1;
    let lessons = [
        {
            lessonID:1,
            name:'Pages'
        },
        {
            lessonID:2,
            name:'Build'
        },
        {
            lessonID:3,
            name:'Theme'
        },
        {
            lessonID:4,
            name:'Store'
        },
        {
            lessonID:5,
            name:'Apps'
        },
        {
            lessonID:6,
            name:'Settings'
        }
    ]

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top" style = {navBarStyle}>
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-3">
                        <div className="row">
                        <span className="col-2 mr-2">
                            <a href="#">
                                <i className="fas fa-times fa-2x action-icon"></i>
                            </a>
                        </span>
                            <span className="p-0 m-0 col-8 navbar-brand text-white text-bold">
                            CS5610
                        </span>
                        </div>
                    </div>
                    <div className="col-8">
                        <nav className="navLessons">
                            <div className="nav nav-tabs border-bottom-0 hover-black" id="nav-module1-lesson1-tab"
                                 role="tablist">
                                {
                                    lessons.map(lesson => {
                                    let className = "nav-item nav-link text-black";
                                    if(lesson.lessonID == selectedLesson)
                                        className = className + ' active ';
                                    return (
                                        <a className={className} id="nav-module1-lesson1-tab"
                                           data-toggle="tab" href="#nav-module1-lesson1" role="tab"
                                           aria-controls="nav-module1-lesson1" aria-selected="true">{lesson.name}</a>
                                    )
                                })}
                            </div>
                        </nav>
                    </div>
                    <div className="col-1">
                        <a href="#">
                            <i className="fas fa-plus fa-2x action-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default LessonNavBar;