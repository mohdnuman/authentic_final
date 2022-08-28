import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { authenticateUser } from "./actions/auth";
import { getAuthTokenFromLocalStorage } from "./helpers/utils";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { Profile } from "./pages/Profile";
import AddAsset from "./pages/AddAsset";

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location, //{pathname:'/settings'}
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  async componentDidMount() {
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      console.log(user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }

  }

  render() {
    const { auth } = this.props;
    return (
      <Router>
        <div>
          <Navbar isLoggedIn={auth.isLoggedIn} dispatch={this.props.dispatch} />
          <Switch>
            <Route
              exact
              path="/"
              component={withRouter(Home)}
            />
            <Route exact path="/login" component={withRouter(Login)} />
            <Route exact path="/signUp" component={withRouter(SignUp)} />

            <Route exact path="/profile" component={withRouter(Profile)} />
            <Route exact path="/addAsset" component={withRouter(AddAsset)} />

            {/* <PrivateRoute path="/user/:userId" component={User} isLoggedIn={auth.isLoggedIn}/> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(App);
