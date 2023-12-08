import React from "react";

const NavigationComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a href="/" className="navbar-brand ms-5">React Firebase-File-Manage</a>

            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item mx-2">
                    <a href="/login" className="btn btn-primary btn-sm ">
                        Login
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/register" className="btn btn-success btn-sm">
                        Register
                    </a>
                </li>
            </ul>

        </nav>
    )
}
export default NavigationComponent;