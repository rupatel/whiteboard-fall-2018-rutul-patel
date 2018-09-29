import React from 'react';
import './CourseRow.css'

const CourseRow = ({deleteCourse,course}) => {
    if(!course)
        course = {title:'CS4540 Data Mining', id:1}
    return (
        <div className="row">
            <div className="col-sm-5 col-11">
                <a className="no-decorate" href={'/course/'+ course.id +'/edit'}>
                    <i className="fas fa-file-alt"></i> </a>
                <p className="text-justify d-inline p-2">{course.title}</p>
            </div>
            <div className="col-2 d-none d-sm-block">
                <p className="text-justify text-left">me</p>
            </div>
            <div className="col-4 d-none d-sm-block">
                <p className="text-justify text-left">6.45 PM</p>
            </div>
            <div className="col-1">
                <a className="no-decorate" href={"#"} onClick={e => {
                    deleteCourse({id:course.id});
                }}>
                    <i className="fas fa-times"></i></a>
            </div>
        </div>
    )
}
export default CourseRow;