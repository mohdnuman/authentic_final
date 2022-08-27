import React, { Component } from "react";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import { clearAuthState } from "../actions/auth";
import { Redirect } from "react-router-dom";

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
        <form className="login-form">
          <span className="login-signup-header">Log In</span>
          {error && <div className="alert error-dailog">{error}</div>}
          <div className="field">
            {/* <input type="email" placeholder="Email" required ref={this.emailInputRef} /> */}
            <input
              type="email"
              placeholder="Email"
              required
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={this.handlePasswordChange}
              value={this.state.password}
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
              <button type="submit" onClick={this.handleSubmit}>
                Log In
              </button>
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
