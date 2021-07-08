import React from "react";

import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppLogin from "./components/AppLogin";
import { Switch, Route } from "react-router-dom";
import Product from "./components/Product";
// import Login from "./components/Login";
// import Logout from "./components/Logout";

class App extends React.Component {
  state = {
    show: false,
    isLog:false,
  };



  handleLogin = (isLog) => this.setState({isLog})

  render() {
    const {isLog} = this.state;
    return (
      <div className="App">
        <Switch>
          {
            // !isLog && !localStorage.getItem('user')?
            // <Route exact path='/' render={() => <AppLogin  isLogin={this.handleLogin}/>}/>
            //   :
            <Route path='/' render={() =><NavBar isLogin={this.handleLogin}/> }/>
          }
        
        </Switch>
        {/* <NavBar /> */}
      </div>
    );
  }
}

export default App;
