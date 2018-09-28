import React from 'react';
import CourseCard from '../components/CourseCard';
import CourseTableNavBar from "../components/CourseTableNavBar";
import CourseGridHeader from "../components/CourseGridHeader";
class CourseGrid extends React.Component{
    render(){
        const gridContainerStyle = {
            marginTop:"10vh",
            background: "#e6e6e6",
            overflowY: "scroll",
            height:"90vh"
        }
        return(
            <div>
                <CourseTableNavBar/>
                <div className="container-fluid"  style={gridContainerStyle}>
                    <CourseGridHeader/>
                    <div className="row mr-2">
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