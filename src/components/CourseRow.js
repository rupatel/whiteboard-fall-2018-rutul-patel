import React from 'react';

const CourseRow = () => {
    return (
        <div className="row">
            <div className="col-sm-5 col-11">
                <a className="no-decorate" href="/course-editor/course-editor.template.client.html"> <i
                    className="fas fa-file-alt"></i> </a>
                <p className="text-justify d-inline p-2">CS4550 Software Engineer Undergraduate</p>
            </div>
            <div className="col-2 d-none d-sm-block">
                <p className="text-justify text-left">me</p>
            </div>
            <div className="col-4 d-none d-sm-block">
                <p className="text-justify text-left">6.45 PM</p>
            </div>
            <div className="col-1">
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}

export default CourseRow;