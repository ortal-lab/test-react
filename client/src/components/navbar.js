import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="font-weight-bold font-weight-bolder navbar navbar-expand-lg navbar-light shadow-sm">
            <div className="container">
                <Link
                    className="align-items-center d-flex nav-item nav-link"
                    to="/"
                ></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-item nav-link"
                                    to="/step1"
                                >
                                    step1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav-item nav-link text-success"
                                    to="/step2"
                                >
                                    step2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav-item nav-link text-info"
                                    to="/step3"
                                >
                                    step3
                                </NavLink>
                            </li>
                        </React.Fragment>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
