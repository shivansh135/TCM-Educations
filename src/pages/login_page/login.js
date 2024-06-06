import React from "react";
import './login.css';
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div>
                <div className="login">
                    <div className="login_left">
                        <div className="Email_Pass">
                            <div className="Welcome">Welcome back</div>
                            <form style={{width: "80%"}} action="/"  method="post" >
                                <div class="input-group" className="input_group">
                                    <div class="input-field" className="email">
                                        <label for="Email" className="email_text">Email</label>
                                        <input type="text" name="Email" placeholder="Email" className="email_input" />
                                    </div>
                                    <div class="input-field" className="password">
                                        <label for="Password" className="password_text">Password</label>
                                        <input type="text" name="Password" placeholder="Password" className="password_input" />
                                    </div>
                                </div>
                            </form>
 
                            <div className="forgot_pass">
                                Forgot Password?
                            </div>
                        </div>
                        <div className="login_button_one">
                            Sign In
                        </div>

                        <div className="or">
                            <div className="or_line"></div>
                            or
                            <div className="or_line"></div>
                        </div>

                        <div className="ggoogle">
                            <img src="./images/Google.png" alt="google" className="ggoogle_img"/> Sign in with Google
                        </div>

                        <div className="ffacebook">
                            <img src="./images/Facebook.png" alt="Facebook" className="ffacebook_img"/>Sign in with Facebook
                        </div>

                        <div className="nnew_user">
                            Don't you have an account? <div className="sign_up"><Link to="/signup">Sign up</Link></div>
                        </div>
                    </div>

                    <img src="./images/couple.png" alt="login" className="login_right" style={{width:'35%'}}/>

                </div>
        </div>
    )
}