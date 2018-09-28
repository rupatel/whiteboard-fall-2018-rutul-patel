import React from 'react';
import './CourseGridHeader.css';

const CourseGridHeader = () => {
    return(
        <div className="row">
            <div className="col-5 font-weight-bold">Recent Documents</div>
            <div className="col-3">
                <div className="dropdown show">
                    <a className="no-decorate dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="font-weight-bold">Owned By</span>
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Ram</a>
                        <a className="dropdown-item" href="#">Tom</a>
                        <a className="dropdown-item" href="#">Bill</a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <a className="mr-4 float-right no-decorate" href="#">
                    <i className="fas fa-folder"></i>
                </a>
                <a className="mr-2 float-right no-decorate" href="#">
                    <i className="fas fa-sort pr-3"></i>
                </a>
                <a className="mr-4 float-right no-decorate" href="#">
                    <i className="fas fa-th-list"></i>
                </a>
            </div>
        </div>
    )
}
export default CourseGridHeader;