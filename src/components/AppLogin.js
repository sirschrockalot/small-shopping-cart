import React, { Component, useState } from "react";
import GLogin from "./GLogin";
import Logout from "./Logout";
import { BrowserRouter, Redirect} from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { render } from "@testing-library/react";


export default class AppLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: props.modal };
  }
  // handleShow = () => {
  //   this.setState({show: true})
  // };

  // handleClose = () => 
  // this.setState({show: false});
  // const [open, setOpen] = React.useState(false)
 
    // if (localStorage.getItem("user")) {

    //    <Redirect to="/products" />;
    // }
    componentWillReceiveProps(nextProps){
    	if(this.state.show!==nextProps.modal){
      	this.setState({show: nextProps.modal})
      }
    }
    render() {


    
      return (
        <div className="container">
        
  
         <>

      <Modal show={this.state.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> RedemptionLogin</Modal.Title>
        </Modal.Header>
        <Modal.Body>    
           <form>
          <h3>Log in</h3>

          <div className="form-group row pb-2">
          <div className="col-md-3">

</div>
            <div className="col-md-1">
            <label>Email</label>

            </div>
            <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />

            </div>
            <div className="col-md-3">

            </div>
          </div>

          <div className="form-group row">
          <div className="col-md-3">

</div>

            <div className="col-md-1">
            <label>Password</label>
            </div>
            <div className="col-md-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
            </div>

            <div className="col-md-3">

            </div>


 

          </div>

          <div className="form-group row">

            <div className="col-md-7">

            </div>
            <div className="custom-control custom-checkbox col-md-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          <div className="col-md-3">

          </div>
          </div>
          <div className="container row pb-2">
            <div className="col-sm-3">

            </div>
            <div className="col-sm-2">

</div>

            <div className="col-sm-2">
            <GLogin isLogin={this.props.isLogin}/>

            </div>
            <div className="col-sm-2">
            <Logout isLogin={this.props.isLogin}/>

            </div>
            <div className="col-sm-3">
              
            </div>
          </div>

<div className="row">
  <div className="col-sm-4">

  </div>
<div className="col-sm-3">

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
</div>
<div className="col-sm-3">

</div>
</div>
        </form>
  </Modal.Body>

      </Modal>
    </> 
     </div>
    );
      }
  
}
