import React from 'react';
import LessonNavBar from "../components/LessonNavBar";
import Module from "../components/Module";
import ModuleService from "../services/ModuleService";

class CourseEditor extends React.Component{
    constructor(props) {
        super(props);
        this.moduleService = new ModuleService();
        this.state = {
            modules:[],
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
        const modules = this.moduleService.findAllModules(this.props.match.params.courseId);
        let newState = {...this.state};
        newState.modules = modules;
        this.setState(newState);
    }

    addModule = (module) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.createModule(courseId);
        let newState = {...this.state}
        newState['modules'] = this.moduleService.findAllModules(courseId);
        this.setState(newState);
    }

    deleteModule = (moduleId) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.deleteModule(courseId,moduleId);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        this.setState(newState,() => {console.log(JSON.stringify(newState))});
    }

    updateModule = (moduleId) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.updateModule(courseId,moduleId);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        this.setState(newState);
    }

    selectModule = (moduleId) => {
        let state = {...this.state};
        state.selectedModule = moduleId;
        this.setState(state);
    }

    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <LessonNavBar/>
                <Module
                    deleteModule = {this.deleteModule}
                    addModule = {this.addModule}
                    modules = {this.state.modules}
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