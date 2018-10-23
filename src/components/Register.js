import React from 'react';
import {Link} from 'react-router-dom';
const Register  = ({register,setUserName,setPassword,setVerifyPassword,setRole,setFirstName,setLastName,
                       setEmail,setPhone,setDOB,
                   username,password,verifyPassword,role,firstName,lastName,dob,phone,email}) => {
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
                                   value={username}
                                   onChange={e=>{
                                            setUserName(e.currentTarget.value)}}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            <span className="mr-2">First Name</span>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="firstName"
                                   value={firstName} placeholder="Alice"
                                   onChange={e => {
                                       setFirstName(e.currentTarget.value)
                                   }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            <span className="mr-2">Last Name</span>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="lastname"
                                   value={lastName} placeholder="Alice"
                                   onChange={e => {
                                       setLastName(e.currentTarget.value)
                                   }}/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">
                            <span className="mr-2">Phone</span>
                            <i className="fas fa-phone"></i>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="phone"
                                   value={phone} placeholder="(555) 123-4324"
                            onChange={e=>{
                                setPhone(e.currentTarget.value)
                            }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            <span className="mr-2">Email</span>
                            <i className="fas fa-envelope-square"></i>
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email"
                                   placeholder="alice@wonderland.com"
                                   onChange={e=>{
                                       setEmail(e.currentTarget.value)
                                   }}
                                   value={email}
                                   />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="dob" className="col-sm-2 col-form-label">
                            <span className="mr-2">Date Of Birth</span>
                        </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="dob" placeholder="yyyy-MM-dd"
                                   value={dob}
                                   onChange={e=>{
                                       setDOB(e.currentTarget.value)
                                   }}/>
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
                                register({username:username,
                                    password:password,
                                    verifyPassword:verifyPassword,
                                    role:role,
                                    firstName:firstName,
                                    lastName:lastName,
                                    dob:dob,
                                    phone:phone,
                                    email:email},verifyPassword);
                            }}>
                                Sign Up
                                <i className="fas fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}
export default Register;