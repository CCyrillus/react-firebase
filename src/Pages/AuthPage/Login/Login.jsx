import React from 'react'
import { Link } from "react-router-dom";

import LoginForm from '../../../components/AuthComponent/LoginForm'
import CloseIcon from '../../../components/Buttons/Close/CloseIcon';

const Login = () => {

  return (
    <div className="container-fluid">

      <div className="nav justify-content-end">
        <CloseIcon path={"/react-firebase/"}/>
      </div>


      <h1 className="display-1 my-5 text-center">Login here</h1>
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <LoginForm />
          <Link to="/react-firebase/register">
            Don't have an account? Register
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login