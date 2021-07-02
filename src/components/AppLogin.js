import React, { Component } from "react";
import GLogin from "./GLogin";
import Logout from "./Logout";
import { BrowserRouter, Redirect} from "react-router-dom";

export default class AppLogin extends Component {
  render() {
    // if (localStorage.getItem("user")) {

    //    <Redirect to="/products" />;
    // }
    return (
      <div className="container">
        <form>
          <h3>Log in</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="container">
            <GLogin  isLogin={this.props.isLogin}/>
            <Logout isLogin={this.props.isLogin}/>
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    );
  }
}
