import React from 'react';
import './CourseTableNavBar.css';

const CourseTableNavBar = () => {
    const navbarHeight = {
        height: "10vh"
    }
    return (
        <nav style={navbarHeight} className="navbar navbar-expand navbar-dark bg-primary fixed-top">
            <i className="fas fa-bars pr-3"></i>
            <p className="mb-0 navbar-brand d-none d-sm-inline navbar-text text-left text-white text-bold">
                Course Manager
            </p>
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