import React from 'react';

const Profile = ({updateProfile,setUserName,setDOB,setPhone,setFirstName,setLastName,setEmail,
                     username,role,firstName,lastName,phone,dob,email,id}) => {
    return (
        <div className="container-fluid" style={{background: "#e6e6e6",height:"100vh"}}>
            <div className="container">
                <h1>
                    Profile
                </h1>
                <div className="p-2" style={{background: "#FFFFFF"}}>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            <span className="mr-2">Username</span>
                            <i className="fas fa-user"></i>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" disabled id="username"
                                   value={username} placeholder="Alice"
                            onChange={e => {
                                setUserName(e.currentTarget.value)
                            }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            <span className="mr-2">First Name</span>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="username"
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
                            <input className="form-control" id="username"
                                   value={lastName} placeholder="Wonderland"
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
                                   onChange={e => {
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
                                   value={email} placeholder="alice@wonderland.com"
                                   onChange={e => {
                                       setEmail(e.currentTarget.value)
                                   }}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">
                            <span className="mr-2">Role</span>
                        </label>
                        <div className="col-sm-10">
                            <select id="role" disabled className="custom-select"
                                    value={role}
                                    >
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="dob" className="col-sm-2 col-form-label">
                            <span className="mr-2">Date Of Birth</span>
                        </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="dob"
                                   value={dob} placeholder="yyyy-MM-dd"
                                   onChange={e => {
                                       setDOB(e.currentTarget.value)
                                   }}
                                  />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block btn-success"
                                    onClick={(e) => {

                                        updateProfile({username:username,
                                            id:id,
                                            role:role,
                                            firstName:firstName,
                                            lastName:lastName,
                                            dob:dob,
                                            phone:phone,
                                            email:email})
                                    }}>
                                Update
                                <i className="fas fa-pen"></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button type="button"
                                    onClick="window.location.href='/home/home.template.client.html'"
                                    className="btn btn-primary btn-block btn-danger">
                                Logout
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;