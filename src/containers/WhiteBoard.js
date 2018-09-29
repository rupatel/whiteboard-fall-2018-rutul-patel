import React from 'react';
import CourseService from "../services/CourseService";
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import CourseEditor from "./CourseEditor";
import Switch from "react-router/es/Switch";
import ModuleService from "../services/ModuleService";

export default class WhiteBoard extends React.Component
{
    constructor(props){
        super(props);
        this.courseService = new CourseService();
        this.moduleService = new ModuleService();
        this.state = {
            courses:this.courseService.findAllCourses()
        }
    }

    addCourse = c => {
        this.courseService.createCourse(c);
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    deleteCourse = c => {
        this.courseService.deleteCourse(c.id)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    updateCourse = courseId => {
        this.courseService.updateCourse(courseId)
        let newState = {...this.state}
        newState.courses = this.courseService.findAllCourses();
        this.setState(newState);
    }

    addModule = (courseId,moduleId) => {
        this.moduleService.createModule(courseId,moduleId);
        let newState = {...this.state}
        newState.courses = this.courseService.findAllCourses();
        this.setState(newState);
    }

    deleteModule = (courseId,moduleId) => {
        this.moduleService.deleteModule(courseId,moduleId);
        let newState = {...this.state}
        newState.courses = this.courseService.findAllCourses();
        this.setState(newState);
    }

    updateModule = (courseId,moduleId) => {
        this.moduleService.updateModule(courseId,moduleId);
        let newState = {...this.state}
        newState.courses = this.courseService.findAllCourses();
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Redirect exact path="/" to="/course/table"/>
                        <Route exact path="/course/table"
                               render={() =>
                                   <CourseTable
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route exact path="/course/grid"
                               render={() =>
                                   <CourseGrid
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       courses={this.state.courses}/>}/>
                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    findCourseById = {this.courseService.findCourseById}
                                    deleteModule = {this.deleteModule}
                                    addModule = {this.addModule}
                                    updateModule = {this.updateModule}
                                    findAllModules = {this.moduleService.findAllModules}
                                    />}
                            path="/course/:courseId/edit"/>
                    </Switch>
                </Router>
            </div>
        );
    }
}