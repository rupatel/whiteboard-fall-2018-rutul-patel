import React from 'react';
import CourseTableNavBar from "../components/CourseTableNavBar";
import CourseGridHeader from "../components/CourseGridHeader";
import CourseCard from "../components/CourseCard";

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
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={101}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={102}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={103}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={104}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>

                    <CourseCard key={105}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={106}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={107}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={108}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={109}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>


                    <CourseCard key={110}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={111}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={112}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={113}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>
                    <CourseCard key={114}
                                deleteCourse={deleteCourse}
                                course = {{id:1,title:'CS4500'}}/>

                </div>
            </div>
        </div>
    )
}
export default CourseGrid;