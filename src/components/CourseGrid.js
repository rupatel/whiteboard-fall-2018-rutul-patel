import React from 'react';
import CourseTableNavBar from "./CourseTableNavBar";
import CourseGridHeader from "./CourseGridHeader";
import CourseCard from "./CourseCard";

const CourseGrid = ({addCourse,deleteCourse,courses}) => {
    const gridContainerStyle = {
        marginTop: "10vh",
        background: "#e6e6e6",
        overflowY: "scroll",
        height: "90vh"
    }
    return (
        <div>
            <CourseTableNavBar
                addCourse={addCourse}/>
            <div className="container-fluid" style={gridContainerStyle}>
                <CourseGridHeader/>
                <div className="row mr-2">
                    {courses.map((c, index) => {
                        return (<CourseCard
                            key={index}
                            deleteCourse={deleteCourse}
                            course={c}
                        />)
                    })}

                    <CourseCard key={100}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={101}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={102}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={103}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={104}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>

                    <CourseCard key={105}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={100}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={101}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={102}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={103}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>
                    <CourseCard key={104}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>

                    <CourseCard key={105}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'DUMMY'}}/>

                </div>
            </div>
        </div>
    )
}
export default CourseGrid;