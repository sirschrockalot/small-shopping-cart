import React from "react";

import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/Login";
// import Logout from "./components/Logout";

class App extends React.Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
