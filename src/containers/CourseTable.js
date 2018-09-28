import React from 'react';
import CourseTableNavBar from '../components/CourseTableNavBar';
import CourseRowHeader from '../components/CourseRowHeader';
import CourseRow from "../components/CourseRow";
import './CourseTable.css';

class CourseTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styleBody = {
            background: '#e6e6e6'
        }

        const rowGroupstyle = {
            background: '#FFFFFF'
        }
        return (
            <div style={styleBody} className="h-100">
                <CourseTableNavBar/>
                <CourseRowHeader/>
                <div style={rowGroupstyle} className="mt-2 container mr-sm-5 ml-sm-4 mb-sm-2">
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                </div>
                <a href="#" className="bottom-right m-3">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-circle fa-stack-1x circle"></i>
                      <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <div className="d-none d-sm-block row p-2 w-100">
                    <div className="col-sm-5 col-10 pl-0 pl-sm-4 d-none d-sm-block w-100">
                        <p className="text-justify d-inline p-2">Yesterday</p>
                    </div>
                </div>
                <div className="d-block d-sm-none row p-2 w-100">
                    <div className="col-sm-5 col-10 pl-0 pl-sm-4">
                        <p className="text-justify d-inline p-2">Past 7 days</p>
                    </div>
                </div>
                <div style={rowGroupstyle} className="container mr-sm-5 ml-sm-4 mb-sm-2">
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                </div>
                <div className="row p-2 d-sm-block d-none w-100">
                    <div className="col-sm-5 col-10 pl-0 pl-sm-4">
                        <p className="text-justify d-inline p-2">Previous 7 days</p>
                    </div>
                </div>
                <div style={rowGroupstyle} className="container mr-sm-5 ml-sm-4 mb-sm-2">
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                </div>
            </div>
        )
    }
}

export default CourseTable;