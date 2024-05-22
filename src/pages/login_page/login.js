import React from "react";
import './login.css';

export function Login() {
    return (
        <div>
                <div className="login">
                    <div className="login_left">
                        <div className="Email_Pass">
                            <div className="Welcome">Welcome back</div>
                            <form action="/"  method="post" >
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

                        <div className="google">
                            <img src="./images/Google.png" alt="google" className="google_img"/> Sign in with Google
                        </div>

                        <div className="facebook">
                            <img src="./images/Facebook.png" alt="Facebook" className="facebook_img"/>Sign in with Facebook
                        </div>

                        <div className="new_user">
                            Don't you have an account? <div className="sign_up">Sign up</div>
                        </div>
                    </div>

                    <img src="./images/couple.png" alt="login" className="login_right"/>

                </div>
        </div>
    )
}