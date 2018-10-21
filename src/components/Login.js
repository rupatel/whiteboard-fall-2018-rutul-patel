import React from 'react';

const Login = (login) => {

    return(
        <div className="container-fluid" style={{background: "#e6e6e6",height:"100vh"}}>
            <div className="container">
                <h1>
                    Sign In
                    <i className="fas fa-chalkboard-teacher"></i>
                </h1>
                <form className="p-2" action="/profile/profile.template.client.html" style={{background: "#FFFFFF"}}>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
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
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary btn-block">
                                Sign in
                                <i className="fas fa-sign-in-alt"></i>
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick="window.location.href='/home/home.template.client.html'">
                                Cancel
                                <i className="fas fa-home"></i>
                            </button>
                            <div className="row">
                                <div className="col-12">
                                    <a href="/register/register.template.client.html" className="float-right"
                                       style={{textDecoration:"none"}}>
                                        Sign up
                                        <i className="fas fa-user-plus ml-1"></i>
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
export default Login;