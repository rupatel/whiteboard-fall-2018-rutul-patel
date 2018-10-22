import React from 'react';
import {connect} from "react-redux";
import UserService from "../services/UserService";
import {logout} from "../actions/UserActions";
import CourseTable from "../components/CourseTable";


const mapStateToProps = (state,props) => {
return {};
};

const mapDispatchToProps = (dispatch,props) => ({logout : () =>
        UserService.logout()
            .then(response => dispatch(logout()))
});

export const CourseTableContainer = connect(mapStateToProps,mapDispatchToProps)(CourseTable);