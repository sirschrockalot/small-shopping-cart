import React from "react";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
    // <Router>
    //   <div className="ui secondary  menu">
    //     <Link to="/" className="item active">
    //       Home
    //     </Link>
    //     <Link to="/about" className="item">
    //       About
    //     </Link>
    //     <Link to="/create" className="item">
    //       Create
    //     </Link>
    //     <div className="right menu">
    //       <div className="item">
    //         <div className="ui icon input">
    //           <input type="text" placeholder="Search..." />
    //           <i className="search link icon"></i>
    //         </div>
    //       </div>
    //       <Link to="/login" className="ui item">
    //         Sign in
    //       </Link>
    //       <Link to="/cart" className="ui item">
    //         <div className="ui icon buttons">
    //           <button className="ui button">
    //             <i className="shopping cart icon"></i>
    //           </button>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    //   <Switch>
    //     <Route path="/" exact>
    //       <Home />
    //     </Route>
    //     <Route path="/about" exact>
    //       <About />
    //     </Route>
    //     <Route path="/create" exact>
    //       <Create />
    //     </Route>
    //     <Route path="/login" exact>
    //       <Login />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
