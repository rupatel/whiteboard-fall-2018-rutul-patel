import React from 'react';
import CourseTableNavBar from './CourseTableNavBar';
import CourseRowHeader from './CourseRowHeader';
import CourseRow from "./CourseRow";
import './CourseTable.css';

const CourseTable = ({addCourse,deleteCourse,courses}) =>
{
    const rowGroupstyle = {
        background: '#FFFFFF'
    }
    const tableContainerStyle = {
        marginTop:"10vh",
        background: "#e6e6e6",
        overflowY: "scroll",
        height:"90vh"
    }
    return (
        <div>
            <CourseTableNavBar addCourse={addCourse}/>
            <div className="container-fluid"  style={tableContainerStyle}>
                <CourseRowHeader/>
                <div style={rowGroupstyle} className="mt-2 container mr-sm-5 ml-sm-4 mb-sm-2">
                    {courses.map((c,index) => {
                        return (<CourseRow
                            key =  {index}
                            deleteCourse = {deleteCourse}
                            course = {c}
                        />)
                    })}
                </div>
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
        </div>
    )
}

export default CourseTable;