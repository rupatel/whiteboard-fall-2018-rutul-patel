import React from 'react';
import {history} from "../helpers/history";
import {Link} from 'react-router-dom'
const Login = ({login,setUserName,setPassword,username,password,currentUser}) => {
    return(
        <div className="container-fluid" style={{background: "#e6e6e6",height:"100vh"}}>
            <div className="container">
                <h1>
                    <span className="mr-2">Sign In</span>
                    <i className="fas fa-chalkboard-teacher"></i>
                </h1>
                <div className="p-2" action="/profile/profile.template.client.html" style={{background: "#FFFFFF"}}>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="username" placeholder="Alice"
                            onChange={(e)=>setUserName(e.currentTarget.value)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password" placeholder="123qwe#$%"
                                   onChange={(e)=>setPassword(e.currentTarget.value)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block"
                            onClick={() =>
                            {
                                login(username,password,"FACULTY");
                            }}>
                                Sign in
                                <i className="fas fa-sign-in-alt"></i>
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col-12">
                                    <Link to='/register' className="float-right"
                                       style={{textDecoration:"none"}}>
                                        Sign up
                                        <i className="fas fa-user-plus ml-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;