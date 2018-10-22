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
import {CourseGridContainer} from "./CourseGridContainer";
import {CourseTableContainer} from "./CourseTableContainer";
export default class WhiteBoard extends React.Component
{
    constructor(props){
        super(props);
        this.courseService = new CourseService();
        let courses = [];
        CourseService.findAllCourses().
            then(res => res.json()).then(user=> {
                courses = user.courses;
                let newState = {...this.state};
                newState.courses = courses;
                this.setState(newState);
        });
        this.state = {
            courses:courses
        }
    }

    addCourse = c => {
        this.courseService.createCourse(c)
            .then(res=>res.json()).then(c=>{
            this.setState(state => {
                let newState = {...state}
                let oldCourses = [... state.courses]
                oldCourses.push(c);
                newState.courses= oldCourses;
                return newState;
            })
        });
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