import React from 'react';
import CourseCard from '../components/CourseCard';
import CourseTableNavBar from "../components/CourseTableNavBar";

class CourseGrid extends React.Component{
    render(){
        const gridContainerStyle = {
            paddingTop:"10vh",
            background: "#e6e6e6"
        }
        return(
            <div>
                <CourseTableNavBar/>
                <div className="container-fluid"  style={gridContainerStyle}>
                <h1>Whiteboard</h1>
                <div className="row mr-2">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
            </div>
        )
    }
}
export default CourseGrid;