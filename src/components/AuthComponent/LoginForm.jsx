import React from 'react';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/actionCreators/authActionsCreator';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [success, setSuccess] = React.useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill form correct");
            return;
        }

        dispatch(signInUser(email, password, setSuccess));
    }
    useEffect(() => {
        if (success) {
            navigate("/react-firebase/dashboard")
        }
    }, [success]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group my-2" >
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group my-2">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary my-2 form-control">Login</button>
        </form>
    )
}

export default LoginForm