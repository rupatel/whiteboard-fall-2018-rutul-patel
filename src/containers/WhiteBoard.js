import React from 'react';
import CourseService from "../services/CourseService";
import CourseTable from "../components/CourseTable";
import CourseGrid from "../components/CourseGrid";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import CourseEditor from "./CourseEditor";
import Switch from "react-router/es/Switch";
import ModuleService from "../services/ModuleService";
import {history} from '../helpers/history'
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


    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Redirect exact path="/home" to="/course/table"/>
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
                                    updateCourse = {this.updateCourse}
                                    />}
                            path="/course/:courseId/edit"/>
                    </Switch>
                </Router>
            </div>
        );
    }
}