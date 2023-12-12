import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { SignOutUser } from "../../redux/actionCreators/authActionsCreator";

const NavigationComponent = () => {

    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 ">
            <Link to="/react-firebase/" className="navbar-brand ms-5 text-white">
                React Firebase - File Manager
            </Link>

            <ul className="navbar-nav ms-auto me-5">

                {isAuthenticated ? (
                    <>
                        <li className="nav-item mx-2">
                            <p className="my-0 mt-1 mx-2">
                                <span className="text-light mx-1">Welcome,</span>
                                <span className="fw-bold text-warning">{user.displayName}</span>
                            </p>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/react-firebase/dashboard" className="btn btn-primary btn-sm">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button
                                to="/react-firebase/logout"
                                className="btn btn-success btn-sm"
                                onClick={() => dispatch(SignOutUser())}
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </ul>

        </nav >
    )
}
export default NavigationComponent;