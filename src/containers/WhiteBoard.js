import React from 'react';
import CourseService from "../services/CourseService";
import CourseTable from "../components/CourseTable";
import CourseGrid from "../components/CourseGrid";
import {Router,Route,Switch,Redirect} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import ModuleService from "../services/ModuleService";
import {history} from '../helpers/history';
import {connect} from 'react-redux';
import {login, logout} from "../actions/UserActions";
import UserService from "../services/UserService";
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
        let CourseTableContainer = connect((state,props) => {},
                                   (dispatch,props) => ({logout : () =>
                                           UserService.logout()
                                               .then(
                                                   response => dispatch(logout()))
                                       }))(CourseTable);
        let CourseGridContainer = connect((state,props) => {},
            (dispatch,props) => ({logout : () =>
                    UserService.logout()
                        .then(
                            response => dispatch(logout()))
            }))(CourseGrid);
        return (
            <div>

                <Route exact path="/course/grid"
                       render={() =>
                           <CourseGridContainer
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
                <Route exact path="/home"
                       render={() =>
                           <CourseTableContainer
                               addCourse={this.addCourse}
                               deleteCourse={this.deleteCourse}
                               courses={this.state.courses}/>}/>
            </div>
        );
    }
}