import React,{ useState } from "react";
import './form_page.css';
import { Confirmation } from './confirmation';

export function Form_page() {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirmation(true);
    }
    return (
            <div>   
                <div className="email_pass">
                    <div className="Welcome_form">Counselling Call with Chief Mentor</div>
                    <div className="email_pass_text">
                        <form action="/"  method="post" >
                            <div class="input-group" className="iinput">
                                <div class="input-field" className="nname">
                                    <label for="name" className="name_text">Enter Name</label>
                                    <input type="text" name="name" placeholder="name" className="nname_input" />
                                </div>
                                <div class="input-field" className="Mobile">
                                    <label for="Mobile" className="Mobile_text">Mobile No</label>
                                    <input type="text" name="Mobile" placeholder="Mobile" className="Mobile_input" />
                                </div>
                            </div>

                            <div class="input-group" className="iinput">
                                <div class="input-field" className="guardian">
                                    <label for="guardian" className="guardian_text">Guardian Contact No</label>
                                    <input type="text" name="guardian" placeholder="guardian" className="guardian_input" />
                                </div>
                                <div class="input-field" className="course">
                                    <label for="course" className="course_text">Select Exam</label>
                                    <input type="text" name="course" placeholder="course" className="course_input" />
                                </div>
                            </div>

                            <div class="input-field" className="school">
                                <label for="school" className="school_text">School / College Name</label>
                                <input type="text" name="school" placeholder="school" className="school_input" />
                            </div>
                            <div class="input-field" className="message">
                                <label for="message" className="message_text">Enter Message</label>
                                <textarea name="message" placeholder="Enter message" className="message_input"></textarea>
                            </div>

                        </form>
                    </div>
                    <div className="login_button" onClick={handleSubmit}>
                        Submit
                    </div>
                    {showConfirmation && <Confirmation closeConfirmation={() => setShowConfirmation(false)} />}                    
                </div>
            </div>


    )
}