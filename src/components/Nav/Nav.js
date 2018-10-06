import React from "react";
import "./Nav.css";

const Nav = (props) => (
<div>
  <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
    <a className="navbar-brand flex-column" href="/">Click-Away <p className="flex-column flex-inline subtitle">(Parks and Recreaction Theme)</p></a>
    <div className="scores">
      <p className="m-0">Score: {props.score}</p>
      <p className="m-0">Top Score: {props.topScore}</p>
    </div>
    <p className="todo">{props.children}</p>
  </nav>

  <div className="instructions">
    <p >Click on an image to begin. Keep clicking, making sure to only select an image you haven't selected before.</p>
  </div>
</div>
);


export default Nav;