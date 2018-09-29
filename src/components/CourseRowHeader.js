import React from 'react';
import './CourseTableHeader.css';

const CourseRowHeader = () => {
    const styleTopMargin = {
        height: '5vh'
    }
    return (
        <div style={styleTopMargin} className="pb-2 pt-2 border-bottom course-listing-header">
            <div className="container mr-sm-5 ml-sm-4">
                <div className="row">
                    <div className="col-12 pl-0 d-block d-sm-none">
                        <p className="text-justify d-inline font-weight-bold p-2">Today</p>
                    </div>
                    <div className="col-sm-3 col-10 d-none d-sm-block">
                        <p className="text-justify d-inline font-weight-bold">Title</p>
                    </div>
                    <div className="col-3 d-none d-sm-block">
                        <div className="dropdown show">
                            <a className="no-decorate dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="font-weight-bold"> Owned By </span>
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Ram</a>
                                <a className="dropdown-item" href="#">Tom</a>
                                <a className="dropdown-item" href="#">Bill</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 d-none d-sm-block">
                        <p className="text-justify text-left float-left font-weight-bold mr-3">Last modified by me</p>
                        <a className="no-decorate float-left mr-3" href="/course/grid"><i className="fas fa-grip-horizontal"></i></a>
                        <a className="no-decorate float-left mr-3" href="#"><i className="fas fa-sort pr-3"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseRowHeader;