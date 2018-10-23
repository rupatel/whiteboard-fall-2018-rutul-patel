import React from 'react';
import CourseService from "../services/CourseService";
import {Router,Route,Switch,Redirect} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import {CourseGridContainer} from "./CourseGridContainer";
import {CourseTableContainer} from "./CourseTableContainer";
export default class WhiteBoard extends React.Component
{
    constructor(props){
        super(props);
        let courses = [];
        CourseService.findAllCourses().
            then(res =>{
                if(!res)
                    return {courses:[]}
                else
                    return res.json()})
            .then(user=> {
                if(user.courses)
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
        CourseService.createCourse(c)
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
        CourseService.deleteCourse(c.id)
            .then(res=>{
            this.setState(state => {
                let newState = {...state}
                let oldCourses = [... state.courses]
                newState.courses= oldCourses.filter(course => course.id != c.id);
                return newState;
            })
        });
    }

    updateCourse = courseId => {
        CourseService.updateCourse(courseId)
            .then(res=>res.json()).then(c=>{
            this.setState(state => {
                let newState = {...state}
                let oldCourses = [... state.courses]
                newState.courses= oldCourses.map(course => {
                    if(course.id != c.id)
                        return course;
                    else
                        return c;
                });
                return newState;
            })
        });
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
                            findCourseById = {CourseService.findCourseById}
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