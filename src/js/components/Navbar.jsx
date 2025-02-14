import React from "react";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "#c0c0c0" }}>Start Bootstrap</a>
      
     
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
       
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "#ffffff", fontWeight: "bold" }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#c0c0c0" }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#c0c0c0" }}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#c0c0c0" }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      
        
    );
};

export default Navbar;





