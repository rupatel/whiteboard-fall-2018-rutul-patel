import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount()
    {
        this.props.setProfile();
    }
    render() {
        return (
            <div className="container-fluid" style={{background: "#e6e6e6", height: "100vh"}}>
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
                                       value={this.props.username} placeholder="Alice"
                                       onChange={e => {
                                           this.props.setUserName(e.currentTarget.value)
                                       }}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">
                                <span className="mr-2">First Name</span>
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control" id="username"
                                       value={this.props.firstName} placeholder="Alice"
                                       onChange={e => {
                                           this.props.setFirstName(e.currentTarget.value)
                                       }}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">
                                <span className="mr-2">Last Name</span>
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control" id="username"
                                       value={this.props.lastName} placeholder="Wonderland"
                                       onChange={e => {
                                           this.props.props.setLastName(e.currentTarget.value)
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
                                       value={this.props.phone} placeholder="(555) 123-4324"
                                       onChange={e => {
                                           this.props.setPhone(e.currentTarget.value)
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
                                       value={this.props.email} placeholder="alice@wonderland.com"
                                       onChange={e => {
                                           this.props.setEmail(e.currentTarget.value)
                                       }}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="role" className="col-sm-2 col-form-label">
                                <span className="mr-2">Role</span>
                            </label>
                            <div className="col-sm-10">
                                <select id="role" disabled className="custom-select"
                                        value={this.props.role}
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
                                       value={this.props.dob} placeholder="yyyy-MM-dd"
                                       onChange={e => {
                                           this.props.setDOB(e.currentTarget.value)
                                       }}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10">
                                <button className="btn btn-primary btn-block btn-success"
                                        onClick={(e) => {

                                            this.props.updateProfile({
                                                username: this.props.username,
                                                id: this.props.id,
                                                role: this.props.role,
                                                firstName: this.props.firstName,
                                                lastName: this.props.lastName,
                                                dob: this.props.dob,
                                                phone: this.props.phone,
                                                email: this.props.email
                                            })
                                        }}>
                                    Update
                                    <i className="fas fa-pen"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;