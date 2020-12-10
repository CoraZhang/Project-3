import React from "react";
import { NavLink } from "react-router-dom";

import  rubberducky from "./assets/rubberducky.png"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
      <NavLink className="navbar-brand" to="/">
        Producky{" "}
        <img className="rubberducky" src={rubberducky} alt="rubber duck" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Events">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
             <NavLink className="nav-link" to="/CalendarMain">Calendar <span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/NewNote">
              Create Notes <span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Notes">
              View Notes <span className="sr-only"></span>
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/EditNote">
              Update Notes <span className="sr-only"></span>
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/Kanban">
              Kanban <span className="sr-only"></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

