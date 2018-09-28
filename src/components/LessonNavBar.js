import React from 'react';
const LessonNavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top lessons">
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col-3">
                        <div className="row">
                        <span className="col-2">
                            <a href="#">
                                <i className="fas fa-times fa-2x action-icon"></i>
                            </a>
                        </span>
                            <span className="p-0 m-0 col-10 navbar-brand text-white text-bold">
                            CS5610
                        </span>
                        </div>
                    </div>
                    <div className="col-8">
                        <nav className="navLessons">
                            <div className="nav nav-tabs border-bottom-0 hover-black" id="nav-module1-lesson1-tab"
                                 role="tablist">
                                <a className="nav-item nav-link active text-black" id="nav-module1-lesson1-tab"
                                   data-toggle="tab" href="#nav-module1-lesson1" role="tab"
                                   aria-controls="nav-module1-lesson1" aria-selected="true">Pages</a>
                                <a className="nav-item nav-link" id="nav-module1-lesson2-tab"
                                   data-toggle="tab" href="#nav-module1-lesson2" role="tab"
                                   aria-controls="nav-module1-lesson2" aria-selected="false">Build</a>
                                <a className="nav-item nav-link" id="nav-module1-lesson3-tab"
                                   data-toggle="tab" href="#nav-module1-lesson3" role="tab"
                                   aria-controls="nav-module1-lesson3" aria-selected="false">Theme</a>
                                <a className="nav-item nav-link" id="nav-module1-lesson4-tab"
                                   data-toggle="tab" href="#nav-module1-lesson4" role="tab"
                                   aria-controls="nav-module1-lesson4" aria-selected="false">Store</a>
                                <a className="nav-item nav-link" id="nav-module1-lesson5-tab"
                                   data-toggle="tab" href="#nav-module1-lesson5" role="tab"
                                   aria-controls="nav-module1-lesson5" aria-selected="false">Apps</a>
                                <a className="nav-item nav-link" id="nav-module1-lesson6-tab"
                                   data-toggle="tab" href="#nav-lesson6" role="tab"
                                   aria-controls="nav-module1-lesson6" aria-selected="false">Settings</a>
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