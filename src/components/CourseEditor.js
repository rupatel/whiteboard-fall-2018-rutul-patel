import React from 'react';
import LessonNavBar from "./LessonNavBar";
import Module from "./Module";

class CourseEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            course: {
                id: '',
                title: '',
                modules: []
            }
        };
    }
    componentDidMount() {
        const course = this.props.findCourseById(this.props.match.params.courseId);
        var newState = {
            course:course
        }
        this.setState(newState);
    }


    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <LessonNavBar
                    courseTitle = {this.state.course.title}
                />
                <Module/>
                <button className="btn btn-danger bottom-right m-4">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
        );
    }
}
export default CourseEditor;