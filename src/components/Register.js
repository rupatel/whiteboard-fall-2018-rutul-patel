import React from 'react';
const Register  = (register) => {
    return(
        <div className="container-fluid" style={{background: "#e6e6e6",height:"100vh"}}>
            <div className="container">
                <h1>
                    Sign Up
                </h1>
                <form className="p-2" action="/profile/profile.template.client.html" style={{background: "#FFFFFF"}}>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            <span className="mr-2">Username</span>
                            <i className="fas fa-user"></i>
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="username" placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            verify Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="verify-password" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block">
                            Sign Up
                            <i className="fas fa-user-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button type="button"
                                onClick="window.location.href='/home/home.template.client.html'"
                                className="btn btn-primary btn-block">
                            Cancel
                            <i className="fas fa-home"></i>
                        </button>
                        <div className="row">
                            <div className="col-12">
                                <a href="/login/login.template.client.html" className="float-left">
                                    Login
                                    <i className="fas fa-sign-in-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Register;