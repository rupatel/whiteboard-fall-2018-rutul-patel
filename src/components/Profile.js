import React from 'react';

const Profile = (logout, user) => {
    return (
        <div className="container-fluid" style={{background: "#e6e6e6",height:"100vh"}}>
            <div className="container">
                <h1>
                    Profile
                </h1>
                <form className="p-2" style={{background: "#FFFFFF"}}>
                    <p className="text-justify text-center text-success">Profile successfully saved</p>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            <span className="mr-2">Username</span>
                            <i className="fas fa-user"></i>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" disabled id="username" placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">
                            <span className="mr-2">Phone</span>
                            <i className="fas fa-phone"></i>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="phone" placeholder="(555) 123-4324"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            <span className="mr-2">Email</span>
                            <i className="fas fa-envelope-square"></i>
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="alice@wonderland.com"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">
                            <span className="mr-2">Role</span>
                        </label>
                        <div className="col-sm-10">
                            <select id="role" className="custom-select">
                                <option selected value="FACULTY">Faculty</option>
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
                            <input type="date" className="form-control" id="dob" placeholder="yyyy-MM-dd"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block btn-success">
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
                </form>
            </div>
        </div>
    );
}
export default Profile;