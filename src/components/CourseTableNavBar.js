import React from 'react';
import './CourseTableNavBar.css';
import {Link} from 'react-router-dom';
const CourseTableNavBar = ({addCourse}) => {
    const navbarHeight = {
        height: "10vh"
    }
    let courseTitleElem;

    return (
        <nav style={navbarHeight} className="navbar navbar-expand navbar-dark bg-primary fixed-top">
            <i className="fas fa-bars pr-3"></i>
            <p className="mb-0 navbar-brand d-none d-sm-inline navbar-text text-left text-white text-bold">
                Course Manager
            </p>
            <form className="form-inline w-100">
                <input className="form-control col-7" type="search" placeholder="New Course Title"/>
                <div className="col-3">
                    <input
                        ref={selectDomElement => {
                            courseTitleElem = selectDomElement
                        }}
                        className="form-control w-100"/>
                </div>
                <div className="col-2 p-0">
                    <Link to = "#" onClick={() => {
                        addCourse({
                        id: (new Date()).getTime() + '',
                        title: courseTitleElem.value,
                        modules :[]
                        });
                        courseTitleElem.value = '';
                    }}>
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-1x circle"></i>
                      <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                    </Link>
                </div>
            </form>
            <Link to="/profile" className="mr-2" style={{color:'white'}}><i className="fas fa-user-alt"></i></Link>
            <Link to='/' style={{color:'red'}}><i className="fas fa-sign-out-alt"></i></Link>
        </nav>
    )
}

export default CourseTableNavBar;