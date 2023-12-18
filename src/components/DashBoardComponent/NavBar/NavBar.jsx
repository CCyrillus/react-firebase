
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { SignOutUser } from "../../../redux/actionCreators/authActionsCreator";

const NavBar = () => {

  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3"
    >
      <Link to="/react-firebase/dashboard" className="navbar-brand ms-5">
        File - Manager
      </Link>

      <ul className="navbar-nav ms-auto me-5">

        {isAuthenticated ? (
          <>
            <li className="nav-item mx-2">
              <p className="my-0 mt-1 mx-2">
                <span className="text-light mx-1 text-dark">Welcome,</span>
                <span className="fw-bold text-dark">{user.displayName}</span>
              </p>
            </li>
            <li className="nav-item mx-2">
              <Link to="/react-firebase/" className="btn btn-primary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <button
                to="/react-firebase/logout"
                className="btn btn-danger"
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
export default NavBar;
