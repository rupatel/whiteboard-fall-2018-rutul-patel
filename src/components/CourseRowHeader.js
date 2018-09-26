import React from 'react';
import './CourseRowHeader.css';

const CourseRowHeader = () => {
    const styleTopMargin = {
        marginTop :"10vh",
        height:'5vh'
    }
    return (
        <div style={styleTopMargin} className="pb-2 pt-2 border-bottom course-listing-header">
            <div className="container mr-sm-5 ml-sm-4">
                <div className="row">
                    <div className="col-12 pl-0 d-block d-sm-none">
                        <p className="text-justify d-inline p-2">Today</p>
                    </div>
                    <div className="col-sm-5 col-10 d-none d-sm-block">
                        <p className="text-justify d-inline">Title</p>
                    </div>
                    <div className="col-2 d-none d-sm-block">
                        <div className="dropdown show">
                            <a className="no-decorate dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Owned By
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Ram</a>
                                <a className="dropdown-item" href="#">Tom</a>
                                <a className="dropdown-item" href="#">Bill</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-sm-block">
                        <p className="text-justify text-left d-inline pr-3">Last modified by me</p>
                        <a className="no-decorate d-inline" href="#"><i className="fas fa-th pr-3"></i></a>
                        <a className="no-decorate d-inline" href="#"><i className="fas fa-sort pr-3"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseRowHeader;