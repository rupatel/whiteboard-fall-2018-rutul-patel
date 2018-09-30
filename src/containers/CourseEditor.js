import React from 'react';
import LessonNavBar from "../components/LessonNavBar";
import Module from "../components/Module";
import ModuleService from "../services/ModuleService";
import CourseService from "../services/CourseService";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = new ModuleService();
        this.courseService = new CourseService();
        this.lessonService = new LessonService();
        this.topicService = new TopicService();

        this.state = {
            modules: [],
            selectedModule: '',
            selectedLesson: '',
            selectedTopic: '',
            courseTitle: ''
        };
        this.deleteModule = this.deleteModule.bind(this);
        this.addModule = this.addModule.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.updateModule = this.updateModule.bind(this);

        this.deleteLesson = this.deleteLesson.bind(this);
        this.addLesson = this.addLesson.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.updateLesson = this.updateLesson.bind(this);

        this.deleteTopic = this.deleteTopic.bind(this);
        this.addTopic = this.addTopic.bind(this);
        this.selectTopic = this.selectTopic.bind(this);
        this.updateTopic = this.updateTopic.bind(this);
    }

    componentDidMount() {
        let courseId = this.props.match.params.courseId;
        const modules = this.moduleService.findAllModules(courseId);
        let newState = {...this.state};
        newState.modules = modules;
        const course = this.courseService.findCourseById(courseId);
        newState.courseTitle = course.title;
        newState.selectedModule = modules.length == 0 ? '' : modules[0].id;
        if (newState.selectedModule) {
            let module = newState.modules.filter(m => {
                return m.id == newState.selectedModule
            })[0];
            newState.selectedLesson = (modules.lessons || module.lessons.length == 0) ? '' :
                module.lessons[0].id;
        }
        if (newState.selectedLesson) {
            let module = newState.modules.filter(m => {
                return m.id == newState.selectedModule
            })[0];
            let lesson = module.lessons.filter(l => {
                return l.id == newState.selectedLesson
            })[0];

            newState.selectedTopic = (lesson.topics || lesson.topics.length) == 0 ? '' :
                lesson.topics[0].id;
        }
        this.setState(newState);
    }

    //updating module state
    addModule = (module) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.createModule(courseId, module);
        let newState = {...this.state}
        newState['modules'] = this.moduleService.findAllModules(courseId);
        let selectedModule = (!this.state.selectedModule ? module.id : this.state.selectedModule);
        newState.selectedModule = selectedModule;
        this.setState(newState);
    }

    deleteModule = (moduleId) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.deleteModule(courseId, moduleId);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        if (this.state.selectedModule == moduleId)
            newState.selectedModule = newState.modules.length == 0 ? '' : newState.modules[0].id;
        this.setState(newState);
    }

    updateModule = (module) => {
        let courseId = this.props.match.params.courseId;
        this.moduleService.updateModule(courseId, module);
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
        this.lessonService.createLesson(courseId, moduleId, lesson);
        let newState = {...this.state}
        newState['modules'] = this.moduleService.findAllModules(courseId);
        let selectedLesson = (!this.state.selectedLesson ? lesson.id : this.state.selectedLesson);
        newState.selectedLesson = selectedLesson;
        this.setState(newState);
    }

    deleteLesson = (lessonId) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        this.lessonService.deleteLesson(courseId, moduleId, lessonId);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        let lessons = this.lessonService.findAllLessons(courseId, moduleId, lessonId);
        if (this.state.selectedLesson == lessonId)
            newState.selectedLesson = lessons.length == 0 ? '' : lessons[0].id;
        this.setState(newState);
    }

    updateLesson = (lesson) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        this.lessonService.updateLesson(courseId, moduleId, lesson);
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
        this.topicService.createTopic(courseId, moduleId, lessonId, topic);
        let newState = {...this.state}
        newState['modules'] = this.moduleService.findAllModules(courseId);
        let selectedLesson = (!this.state.selectedTopic ? topic.id : this.state.selectedTopic);
        newState.selectedTopic = selectedLesson;
        this.setState(newState);
    }

    deleteTopic = (topicId) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;
        this.topicService.deleteTopic(courseId, moduleId, lessonId, topicId);
        let newState = {...this.state}
        newState.modules = this.moduleService.findAllModules(courseId);
        let topics = this.topicService.findAllTopics(courseId, moduleId, lessonId, topicId);
        if (this.state.selectedLesson == lessonId)
            newState.selectedTopic = topics.length == 0 ? '' : topics[0].id;
        this.setState(newState);
    }

    updateTopic = (topic) => {
        let courseId = this.props.match.params.courseId;
        let moduleId = this.state.selectedModule;
        let lessonId = this.state.selectedLesson;
        this.topicService.updateTopic(courseId, moduleId, lessonId, topic);
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
        let module, lesson, topic;
        module = this.state.modules.filter(m => m.id == this.state.selectedModule)[0];
        if (module && module.lessons)
            lesson = module.lessons.filter(l => l.id == this.state.selectedLesson)[0];
        if (lesson && lesson.topics)
            topic = lesson.topics.filter(t => t.id == this.state.selectedTopic)[0];


        let lessons = (module ? (module.lessons ? module.lessons : []) : []);
        let topics = (lesson ? (lesson.topics ? lesson.topics : []) : []);
        return (
            <div className="container-fluid m-0 p-0">
                <LessonNavBar
                    courseTitle={this.state.courseTitle}
                    updateLesson={this.updateLesson}
                    deleteLesson={this.deleteLesson}
                    addLesson={this.addLesson}
                    selectedLesson={this.state.selectedLesson}
                    selectLesson={this.selectLesson}
                    lessons={lessons}
                />
                <Module
                    deleteModule={this.deleteModule}
                    addModule={this.addModule}
                    modules={this.state.modules}
                    updateModule={this.updateModule}
                    selectedModule={this.state.selectedModule}
                    selectModule={this.selectModule}
                    updateTopic={this.updateTopic}
                    deleteTopic={this.deleteTopic}
                    addTopic={this.addTopic}
                    selectedTopic={this.state.selectedTopic}
                    selectTopic={this.selectTopic}
                    topics={topics}
                />
                <button className="btn btn-danger bottom-right m-4">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
        );
    }
}

export default CourseEditor;