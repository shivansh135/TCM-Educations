import React from "react";
import './signup.css';

export function Signup() {
    return (
        <div>
                <div className="signup">
                    <div className="signup_left">
                        <div className="email_pass_signup">
                        <div className='black-head' style={{position:'relative',margin:'auto',left:'10px',textAlign:'center',textAlign:'center'}}>
                           Join <span className='blue-head'>TCM Family </span> Today
                            </div>
                            <form action="/"  method="post" style={{width: "80%"}}>
                                <div class="input-group" className="input_to">
                                    <div class="input-field" className="Name">
                                        <label for="Name" className="Name_text">Name*</label>
                                        <input type="text" name="Name" placeholder="Name" className="Name_input" />
                                    </div>
                                    <div class="input-field" className="Contact">
                                        <label for="Contact" className="Contact_text">Contact No*</label>
                                        <input type="text" name="Contact" placeholder="Contact" className="Contact_input" />
                                    </div>
                                    <div class="input-field" className="Email">
                                        <label for="Email" className="Email_text">Email*</label>
                                        <input type="text" name="Email" placeholder="Email" className="Email_input" />
                                    </div>
                                    <div class="input-field" className="Password">
                                        <label for="Password" className="Password_text">Qualification*</label>
                                        <input type="text" name="quali" placeholder="B.com/B.A/..." className="Password_input" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="Login_button">
                            Sign In
                        </div>

                        <div className="Or">
                            <div className="Or_line"></div>
                            or
                            <div className="Or_line"></div>
                        </div>

                        <div className="google">
                            <img src="./images/Google.png" alt="google" className="google_img"/> Sign in with Google
                        </div>

                        <div className="facebook">
                            <img src="./images/Facebook.png" alt="Facebook" className="facebook_img"/>Sign in with Facebook
                        </div>

                    </div>

                    <img src="./images/couple.png" alt="login" className="Login_right"/>

                </div>
        </div>
    )
}