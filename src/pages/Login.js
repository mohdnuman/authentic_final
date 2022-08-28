import React, { Component } from "react";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import { clearAuthState } from "../actions/auth";
import { Redirect } from "react-router-dom";
import { TextField, Button } from "@mui/material";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
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
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
    console.log(this.state);
  };
  render() {
    const { error, inProgress, isLoggedIn } = this.props.auth;
    const { from } = this.props.location.state || {
      from: "/",
    };
    if (isLoggedIn) {
      return <Redirect to={from} />;
    }
    return (
      <div align="center">
        <form
          className="login-form"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Login</h2>
          {error && <div className="alert error-dailog">{error}</div>}
          <div style={{ width: "25%", marginBottom: "10px" }} className="field">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={this.handleEmailChange}
              value={this.state.email}
              className="input-field"
            />
           
          </div>
          <div style={{ width: "25%", marginBottom: "10px" }} className="field">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={this.handlePasswordChange}
              value={this.state.password}
              className="input-field"
            />
            
          </div>
          <div className="field">
            {inProgress ? (
              <button
                type="submit"
                onClick={this.handleSubmit}
                disabled={inProgress}
              >
                Logging In...
              </button>
            ) : (
              <Button variant="contained" onClick={this.handleSubmit}>
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
