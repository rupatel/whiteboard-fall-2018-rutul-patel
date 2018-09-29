import React from 'react';
import CourseService from "../services/CourseService";
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import CourseEditor from "../components/CourseEditor";
import Switch from "react-router/es/Switch";

export default class WhiteBoard extends React.Component
{
    constructor(props){
        super(props);
        this.courseService = new CourseService();
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
                                    courses={this.state.courses}/>}
                            path="/course/:courseId/edit"/>
                    </Switch>
                </Router>
            </div>
        );
    }
}