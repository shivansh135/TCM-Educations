import React from "react";
import './signup.css';

export function Signup() {
    return (
        <div>
                <div className="signup">
                    <div className="signup_left">
                        <div className="email_pass">
                            <div className="Welcome">Join TCM Family Today</div>
                            <form action="/"  method="post" >
                                <div class="input-group" className="input">
                                    <div class="input-field" className="Name">
                                        <label for="Name" className="Name_text">Name</label>
                                        <input type="text" name="Name" placeholder="Name" className="Name_input" />
                                    </div>
                                    <div class="input-field" className="Contact">
                                        <label for="Contact" className="Contact_text">Contact No</label>
                                        <input type="text" name="Contact" placeholder="Contact" className="Contact_input" />
                                    </div>
                                    <div class="input-field" className="email">
                                        <label for="Email" className="email_text">Email</label>
                                        <input type="text" name="Email" placeholder="Email" className="email_input" />
                                    </div>
                                    <div class="input-field" className="Password">
                                        <label for="Password" className="Password_text">Password</label>
                                        <input type="text" name="Password" placeholder="Password" className="Password_input" />
                                    </div>
                                </div>
                            </form>
 
                            <div className="forgot_pass">
                                Password should be more than 8 characters
                            </div>
                        </div>
                        <div className="login_button">
                            Sign In
                        </div>

                        <div className="or">
                            <div className="or_line">-</div>
                            or
                            <div className="or_line">-</div>
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