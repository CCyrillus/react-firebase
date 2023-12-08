import React from "react";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a href="/" className="navbar-brand ms-5">React Firebase-File-Manage</a>

            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item mx-2">
                    <Link to="/react-firebase/login" className="btn btn-primary btn-sm ">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/react-firebase/register" className="btn btn-success btn-sm">
                        Register
                    </Link>
                </li>
            </ul>

        </nav>
    )
}
export default NavigationComponent;