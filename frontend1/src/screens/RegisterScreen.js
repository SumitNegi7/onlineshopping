import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
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
        dispatch(register(name, email, password));
    }
    return <div className="form">
        <form onSubmit={submitHandler} >

            <>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
            </>

            <div className="container-login">

                <div className="image-login">

                </div>

                <div className="content1">
                    <h1 className="h1-login">Sign-Up</h1>

                    <div className="form-group">

                        <br />
                        <input type="text" className="form-control" name="" placeholder="Name" onChange={(e) => setName(e.target.value)} />

                    </div>

                    <div className="form-group">


                        <input type="text" className="form-control" name="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="" placeholder="Re enter Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" name="" placeholder="Re enter Password" onChange={(e) => setRePassword(e.target.value)} />
                    </div>



                    <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Already have an account? Login</Link>
                    <br />
                    <button type="submit" className="btn-signin">Sign Up</button>
                </div>
            </div>






        </form>
    </div>
}

export default RegisterScreen;