
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import "./Signin.css";

function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));

    }
    return <div className="form">
        <form onSubmit={submitHandler} >

            {<div>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
            </div>}


            <div className="container-login">

                <div className="image-login">

                </div>

                <div className="content-login">
                    <h1 className="h1-login">Login</h1>

                    <div className="form-group">

                        <input type="text" className="form-control" name="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="form-group">

                        <input type="password" className="form-control" name="" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <Link to="/register">Dont have an account? Sign Up </Link>
                    <br />
                    <button type="submit" className="btn-signin">Login</button>
                </div>

            </div>
        </form>
    </div>
}
export default SigninScreen;