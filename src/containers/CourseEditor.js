import React from 'react';
import LessonNavBar from "../components/LessonNavBar";
import Module from "../components/Module";

class CourseEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            course: {
                id: '',
                title: '',
                modules: [],
            },
            selectedModule: '',
            selectedLesson: '',
            selectedTopic: ''
        };
        this.deleteModule = this.deleteModule.bind(this);
        this.addModule = this.addModule.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.updateModule = this.updateModule.bind(this);
    }
    componentDidMount() {
        const course = this.props.findCourseById(this.props.match.params.courseId);
        let newState = {...this.state};
        newState.course = course;
        this.setState(newState);
    }

    deleteModule = (moduleId) => {
        this.props.deleteModule(this.state.course.id,moduleId);
        let state = {...this.state};
        state.course.modules = this.props.findAllModules(this.state.course.id,moduleId);
        this.setState(state);
    }

    addModule = (moduleId) => {
        this.props.addModule(this.state.course.id,moduleId);
        let state = {...this.state};
        state.course.modules = this.props.findAllModules(this.state.course.id,moduleId);
        this.setState(state);
    }

    updateModule = (moduleId) => {
        this.props.updateModule(this.state.course.id,moduleId);
        let state = {...this.state};
        state.course.modules = this.props.findAllModules(this.state.course.id,moduleId);
        this.setState(state);
    }

    selectModule = (moduleId) => {
        let state = {...this.state};
        state.selectedModule = moduleId;
        this.setState(state);
    }

    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <LessonNavBar
                    courseTitle = {this.state.course.title}
                />
                <Module
                    deleteModule = {this.deleteModule}
                    addModule = {this.addModule}
                    modules = {this.state.course.modules}
                    updateModule = {this.updateModule}
                    selectedModule = {this.state.selectedModule}
                    selectedLesson = {this.state.selectedLesson}
                    selectedTopic = {this.state.selectedTopic}
                    selectModule = {this.selectModule}
                />
                <button className="btn btn-danger bottom-right m-4">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
        );
    }
}
export default CourseEditor;