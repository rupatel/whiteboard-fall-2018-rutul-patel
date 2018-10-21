import React from 'react';
import {Link} from 'react-router-dom';
const Register  = ({register,setUserName,setPassword,setVerifyPassword,setRole,setFirstName,setLastName,
                   username,password,verifyPassword,role,firstName,lastName}) => {
    return(
        <div className="container-fluid" style={{background: "#e6e6e6",height:"100vh"}}>
            <div className="container">
                <h1>
                    Sign Up
                </h1>
                <div className="p-2" action="/profile/profile.template.client.html" style={{background: "#FFFFFF"}}>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            <span className="mr-2">Username</span>
                            <i className="fas fa-user"></i>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="username" placeholder="Alice"
                            onChange={e=>{
                                setUserName(e.currentTarget.value)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password" placeholder="123qwe#$%"
                                   onChange={e=>{setPassword(e.currentTarget.value)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            verify Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="verify-password" placeholder="123qwe#$%"
                                   onChange={e=>{setVerifyPassword(e.currentTarget.value)}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="custom-select"
                                    onChange={e=> {
                                        setRole(e.currentTarget.value);
                                    }}
                                    value={role}>
                                <option>STUDENT</option>
                                <option>FACULTY</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block"
                            onClick={e => {
                                register(username,password,verifyPassword,role,firstName,lastName);
                            }}>
                                Sign Up
                                <i className="fas fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col-12">
                                    <Link to="/" className="float-left">
                                        Login
                                        <i className="fas fa-sign-in-alt"></i>
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
export default Register;