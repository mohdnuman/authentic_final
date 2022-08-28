import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect,useHistory } from "react-router";
import { signup } from "../actions/auth";
import { clearAuthState } from "../actions/auth";
import { TextField, Button } from "@mui/material";


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      middle_name:"",
      last_name:"",
      aadhar:"",
      pan:"",
      password: "",
      confirm_password: "",
      status:false
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  handleFirstNameChange = (e) => {
    this.setState({
      first_name: e.target.value,
    });
  };
  handleLastNameChange = (e) => {
    this.setState({
      last_name: e.target.value,
    });
  };
  handleMiddleNameChange = (e) => {
    this.setState({
      middle_name: e.target.value,
    });
  };
  handleAadharChange = (e) => {
    this.setState({
      aadhar: e.target.value,
    });
  };
  handlePanChange = (e) => {
    this.setState({
      pan: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirm_password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { email, first_name, middle_name,last_name, password, confirm_password, pan, aadhar} = this.state;
    // console.log(email, first_name, last_name, middle_name , password, confirm_password,pan,aadhar);
    if (email && password && password === confirm_password && first_name && last_name && aadhar && pan) {
      this.props.dispatch(signup(email, first_name, last_name, middle_name , password, confirm_password,pan,aadhar));
      this.setState({
        status:true
      })
    }
    this.props.history.push({
      pathname: `/login`
    })
    
  };
  render() {
    const {inProgress,error,isLoggedIn}=this.props.auth;
    if(isLoggedIn)
    {
       return <Redirect to="/" />
    }
    if(this.state.status==true){
      return <Redirect to="/login" />
    }
    return (
      <div align="center">
     <form className="login-form"  style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}>
         <h2>Sign Up</h2>
         {error&&<div className="alert error-dailog">{error}</div>}
         <div className="field">
             <input type="text" placeholder="First Name" required onChange={this.handleFirstNameChange} className="input-field"/>
         </div>
         <div className="field">
             <input type="text" placeholder="Middle Name" required onChange={this.handleMiddleNameChange} className="input-field"/>
         </div>
         <div className="field">
             <input type="text" placeholder="Last Name" required onChange={this.handleLastNameChange} className="input-field"/>
         </div>
         <div className="field">
             <input type="text" placeholder="Aadhar Number" required onChange={this.handleAadharChange} className="input-field"/>
         </div>
         <div className="field">
             <input type="text" placeholder="Pan Number" required onChange={this.handlePanChange} className="input-field"/>
         </div>
         <div className="field">
             <input type="email" placeholder="Email" required onChange={this.handleEmailChange} className="input-field"/>
         </div>
         <div className="field">
             <input type="password" placeholder="Password" required onChange={this.handlePasswordChange} className="input-field"/>
         </div>
         <div className="field">
             <input type="password" placeholder=" Confirm Password" required onChange={this.handleConfirmPasswordChange} className="input-field"/>
         </div>
         <div className="field">
             {/* <button type="submit" onClick={this.handleSubmit}>Sign Up</button> */}
             {inProgress?<button type="submit" onClick={this.handleSubmit} disabled={inProgress}>Signing Up...</button>:
             <Button variant="contained" onClick={this.handleSubmit}>
             Submit
           </Button>
            }
         </div>
     </form>
     </div>
    );
}
}

function mapStateToProps(state){
  return{
      auth:state.auth
  }
}
export default connect(mapStateToProps)(SignUp);