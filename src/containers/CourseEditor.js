import React from 'react';
import LessonNavBar from "../components/LessonNavBar";
import Module from "../components/Module";
import ModuleService from "../services/ModuleService";
import CourseService from "../services/CourseService";

class CourseEditor extends React.Component{
    constructor(props) {
        super(props);
        this.moduleService = new ModuleService();
        this.courseService = new CourseService();
        this.lessonService = new LessonService();
        this.topicService = new TopicService();

        this.state = {
            modules:[],
            selectedModule: '',
            selectedLesson: '',
            selectedTopic: '',
            courseTitle:''
        };
        this.deleteModule = this.deleteModule.bind(this);
        this.addModule = this.addModule.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.updateModule = this.updateModule.bind(this);
    }
    componentDidMount() {
        let courseId = this.props.match.params.courseId;
        const modules = this.moduleService.findAllModules(courseId);
        let newState = {...this.state};
        newState.modules = modules;
        const course = this.courseService.findCourseById(courseId);
        newState.courseTitle = course.title;
        newState.selectedModule = modules.length == 0 ? '' : modules[0].id;
        this.setState(newState);
    }

    //updating module state
    addModule = (module) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.createModule(courseId,module);
        let newState = {...this.state}
        newState['modules'] = this.moduleService.findAllModules(courseId);
        let selectedModule = (!this.state.selectedModule ?  module.id : this.state.selectedModule);
        newState.selectedModule = selectedModule;
        this.setState(newState);
    }

    deleteModule = (moduleId) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.deleteModule(courseId,moduleId);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        if(this.state.selectedModule == moduleId)
            newState.selectedModule = newState.modules.length==0? '' : newState.modules[0].id;
        this.setState(newState);
    }

    updateModule = (module) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.updateModule(courseId,module);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        this.setState(newState);
    }

    selectModule = (moduleId) => {
        let state = {...this.state};
        state.selectedModule = moduleId;
        this.setState(state);
    }

    // updating lesson state
    addLesson = (lesson) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        this.lessonService.createLesson(courseId,moduleId,lesson);
        let newState = {...this.state}
        newState['modules'] = this.moduleService.findAllModules(courseId);
        let selectedLesson = (!this.state.selectedLesson ?  lesson.id : this.state.selectedLesson);
        newState.selectedLesson = selectedLesson;
        this.setState(newState);
    }

    deleteLesson = (lessonId) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        this.lessonService.deleteLesson(courseId,moduleId,lessonId);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        let lessons = lessonService.findAllLessons(courseId,moduleId,lessonId);
        if(this.state.selectedLesson == lessonId)
            newState.selectedLesson = lessons.length==0? '' : lessons[0].id;
        this.setState(newState);
    }

    updateLesson = (lesson) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        this.lessonService.updateLesson(courseId,moduleId,lesson);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        this.setState(newState);
    }

    selectLesson = (lessonId) => {
        let state = {...this.state};
        state.selectedLesson = lessonId;
        this.setState(state);
    }

    //updating Topic State

    addTopic = (topic) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;
        this.topicService.createLesson(courseId,moduleId,lessonId,topic);
        let newState = {...this.state}
        newState['modules'] = this.moduleService.findAllModules(courseId);
        let selectedLesson = (!this.state.selectedTopic ?  topic.id : this.state.selectedTopic);
        newState.selectedTopic = selectedLesson;
        this.setState(newState);
    }

    deleteTopic = (topicId) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;
        this.topicService.deleteTopic(courseId,moduleId,lessonId,topicId);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        let topics = topicService.findAllTopics(courseId,moduleId,lessonId,topicId);
        if(this.state.selectedLesson == lessonId)
            newState.selectedTopic = topics.length==0? '' : topics[0].id;
        this.setState(newState);
    }

    updateTopic = (topic) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;
        this.topicService.updateTopic(courseId,moduleId,lessonId,topic);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        this.setState(newState);
    }

    selectTopic = (topicId) => {
        let state = {...this.state};
        state.selectedTopic = topicId;
        this.setState(state);
    }

    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <LessonNavBar
                courseTitle={this.state.courseTitle}/>
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