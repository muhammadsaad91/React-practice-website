import React from "react";
import imsvg from "./1.svg";

const Navbar = () => {
  const styles = {
    backgroundColor: "#DFFFDE",
    // height: "50px",
    width: "100%",
    position: "fixed",
  }
    return (
        <>
          <nav className="navbar navbars navbar-expand-lg navbar-light " style={styles}>
            
          <a href="#"> <img src={imsvg} alt="svg" width="200px" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Why Ho0tsuite <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">What we do</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>
          </ul>
      <div className="navleft">
      <ul className="navbar-nav">
      <li className="nav-item">
              <a className="nav-link" href="#">Need Help?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <button>Signup</button>
            </li>
            </ul>
      
      </div>
        </div>
      </nav>

        </>
    );
}


export default Navbar;