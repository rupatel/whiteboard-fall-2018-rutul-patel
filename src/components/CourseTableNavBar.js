import React from 'react';
import './CourseTableNavBar.css';

const CourseTableNavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary static-fixed-top">
            <i className="fas fa-bars pr-3"></i>
            <a className="navbar-brand pb-0 pt-0 d-none d-sm-inline" href="#">
                <p className="navbar-text text-left text-white text-bold m-0">Course Manager</p>
            </a>
            <form className="form-inline w-100">
                <input className="form-control col-10" type="search" placeholder="New Course Title"/>
                <div className="col-2">
                    <a href="#">
                            <span className="fa-stack fa-2x">
                              <i className="fas fa-circle fa-stack-1x circle"></i>
                              <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                            </span>
                    </a>
                </div>
            </form>
        </nav>
    )
}

export default CourseTableNavBar;