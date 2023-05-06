import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from 'axios';
import './login.css';

// const BASE_URL = 'http://13.235.87.215:4000';

function Login() {

    const [showSignup, setShowSignup] = useState(false);
    //toggle between signin and signup

    // const [message, setMessage] = useState('');
    //toggle between error messages

    const toggleSignup = () => {
        setShowSignup(!showSignup); //opposite of show sign up, to toggle
    }



    return(
        <div id='loginPage'>
            <div id="header">
                <div className=" bg-light py-3">
                    <div className="row">
                        <div className="head-wrapper d-flex justify-content-center align-items-center">
                            <div>
                            <Link to={"/"} className="text-decoration-none text-dark">Ecommerce</Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-center">Welcome to Ecommerce</h2>
                        </div>

                        <div>

                        {
                            !showSignup ? (
                                <div className="login-wrapper">
                                    <h4 className="text-center">Login
                                    </h4>

                                    <div className="input-group">
                                    <input type="text" id="username" placeholder="username..." className="form-control" />
                                    </div>

                                    <div className="input-group">
                                    <input type="password" id="password" placeholder="password..." className="form-control" />
                                    </div>

                                    <div className="input-group">
                                    <Link to="/home" className="btn btn-primary form-control">Login as user</Link>
{ //                                   <input type="submit" value="Login as user" className="btn btn-primary form-control" onClick={loginFn}/>
}                                    </div>

                                    <div className="text-center text-info" onClick={toggleSignup}>Don't have an account? Sign up...</div>
{                                   // <div className="text-danger text-center">{message}</div>
}                                    
                                </div>

                                
                            ) : (
                                <div className="login-wrapper">
                                    <h4 className="text-center">Login
                                    </h4>

                                    <div className="input-group">
                                    <input type="text" id="username" placeholder="username..." className="form-control" />
                                    </div>

                                    <div className="input-group">
                                    <input type="password" id="password" placeholder="password..." className="form-control" />
                                    </div>

                                    
                                    <input type="email" id="email" placeholder="email id..." className="form-control" />
                                    <br />
                                    

                                    <div className="input-group">
                                    <input type="submit" value="Sign Up as new user" className="btn btn-primary form-control"/>
                                    </div>

                                    <div className="text-center text-info" onClick={toggleSignup}>Already have an account? Sign In...</div>
                                    { //<div className="text-danger text-center">{message}</div>
}
                                    
                                </div>

                            )
                        }

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;


//removed below lines to add api cuz api not working backend
    // function loginFn() {
    //     //grab elements
    //     const username = document.getElementById("username");
    //     const password = document.getElementById("password");

    //     setMessage(''); //initial state

    //     const data = {
    //         username: username.value,
    //         password: password.value //saving values caught
    //     }

    //     axios.post(BASE_URL + '/api/v1/user/login', data) //using api
    //     .then(
    //         function (response) {
    //             //store the data we received in local storage
    //             if(response.status === 200) { //200 means api call made was success, 200 is status codes.
    //                 localStorage.setItem("username", response.data.username);
    //                 localStorage.setItem("userID", response.data.id);
    //                 localStorage.setItem("token", response.data.accessToken);
    //                 //setItem takes 2 args, name of the string to store, value to store

    //             }

    //             else {
    //                 setMessage("Invelid username or password");
    //             }
    //         }
    //     ).catch(function(error) {
    //         setMessage(error.response.data.message); //catching error if any issue occurs
    //     })
    
    // }