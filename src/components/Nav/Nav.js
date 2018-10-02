import React from "react";
import "./Nav.css";

const Nav = () => (
<div>
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#">Click-Away</a>
    <p className="pt-4">(Parks and Recreaction Theme)</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end flex-column" id="navbarNavAltMarkup">
      <p className="m-0">Score: </p>
      <p className="m-0">Top Score: </p>
    </div>
  </nav>

  <div className="instructions">
    <p >Click on an image to begin. Keep clicking, making sure to only select an image you haven't selected before.</p>
  </div>
</div>
);


export default Nav;