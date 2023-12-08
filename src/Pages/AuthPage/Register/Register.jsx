import React from 'react'
import RegisterForm from '../../../components/AuthComponent/RegisterForm'
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="container-fluid">
            <h1 className="display-1 my-5 text-center">Register here</h1>
            <div className="row">
                <div className="col-md-5 mx-auto mt-5">
                    <RegisterForm />
                    <Link to="/react-firebase/login">
                        Already have an account? Login
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Register