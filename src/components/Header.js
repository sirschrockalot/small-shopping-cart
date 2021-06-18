import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav class="navbar justify-content-center navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="https://redemptionfitnesswi.com/wp-content/uploads/2020/10/Redemption-Fitness-Logo-long-web.png"
          alt=""
          width="300"
          height="100"
        />
      </a>

      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link "
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            value="Protein"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={(e) => props.onNavBarClick(e)}
          >
            Proteins
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            value="pre-intra-workout"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            onClick={(e) => props.onNavBarClick(e)}
          >
            Pre/Post Workout
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            value="Amino Acids"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            onClick={(e) => props.onNavBarClick(e)}
          >
            Amino Acids
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            value="performance-pantry"
            onClick={(e) => props.onNavBarClick(e)}
          >
            Performance Pantry
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            value="cart"
            // onClick={(e) => props.onNavBarClick(e)}
          >
            Cart {""}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ""
            )}
          </button>
        </li>
      </ul>
    </nav>

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
