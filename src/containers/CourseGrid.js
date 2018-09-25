import React from 'react';
import CourseCard from '../components/CourseCard';

class CourseGrid extends React.Component{
    render(){
        const divStyle = {
            margin: '40px',
            border: '5px solid pink'
        };
        return(
            <div className="container-fluid">
                <h1>Whiteboard</h1>
                <div className="card-deck mb-2">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}
export default CourseGrid;