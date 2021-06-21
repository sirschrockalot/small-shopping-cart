import React from "react";
// import Basket from "./Basket";

export default function Header(props) {
  return (
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
      {/* <li class="nav-item" role="presentation">
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
      </li> */}
    </ul>
  );
}
