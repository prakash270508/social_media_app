import React from "react";
import { FaUser, FaHome, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mx-5">
          <h2 className="navbar-brand mx-5">Mediaa</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
                <Link to={"/"} className="nav-link " aria-current="page" title="Home">
                  <FaHome />
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to={"/auth/login"} className="nav-link " aria-current="page" title="Login">
                  <FaUser />
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link " aria-current="page" title="Friends">
                  <FaUserCircle />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
