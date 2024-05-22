import React from 'react';
import './panchmukhi.css';
import { Step_odd } from '../../components/Panchmukhi_process/step_odd';
import { Step_even } from '../../components/Panchmukhi_process/step_even';
import { Card_four } from '../../components/card/card4';
import { Card_three } from '../../components/card/card3';
import FAQQuestion from '../../components/FaQ/FAQQuestion';


export default function Panchmukhi() {
    return (
        <div>
            <div className="rectangle_one">
                <div className="panckmukhi_heading">
                TCM’ Exclusive Panchukhi Approach for Aspirants
                </div>
            </div>
            <div className='CAT_video'>
                <div className='CAT_video_button'>
                    <img src='./images/play_arrow.png'  alt='play' />
                </div>
            </div>

            <div className='roadmap'>
                <div className='roadmap-head'>
                <div className='roadmap-heading'>
                    <div className='BLUE'>
                        TCM’s Scientific 
                        <div className='BLACK'> Process of Preparation</div> 
                    </div>
                </div>
                    <div className='roadmap-heading-detail'>
                        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apten
                    </div>
                    <div className='buttons'>
                        <button className='counsel'>Counceling Call {'>'}</button>
                        <button className='trial'>Book Trial Class {'>'}</button>
                    </div>
                </div>
                    <img src = './images/Slide2.png' className='slide-img' alt='group_photo' />
            </div>

            <Step_odd 
                step="Step 1"
                title="Fundamental Process"
                detail="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apten"
                image='asking-question.png'/>

            <Step_even 
                step="Step 2"
                title="Fundamental Process"
                detail="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apten"
                image='asking-question.png'/>

            <Step_odd 
                step="Step 1"
                title="Fundamental Process"
                detail="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apten"
                image='asking-question.png'/>

            <Step_even 
                step="Step 2"
                title="Fundamental Process"
                detail="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apten"
                image='asking-question.png'/>

            <Step_odd 
                step="Step 1"
                title="Fundamental Process"
                detail="Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apten"
                image='asking-question.png'/>       
            

            <div className='course-select'>
                <div className='course-select-area'>
                    <div className='course-head'>
                        <div className='course-head-title'>
                            Choose a Course that Fits you
                        </div>
                        <div className='course-head-option'>
                            <div className='option'>CAT</div>
                            <div className='option'>IPMAT</div>
                            <div className='option'>CLAT</div>
                            <div className='option'>CUET</div>
                        </div>
                    </div>
                    <div className='course-body'>

                        <Card_four
                        course_name='CAT'
                        course_price='Rs.50,000'
                        detail='New batch starts 10th April 2024.'
                        course_timing='Class Timing 8:30PM to 10:30PM'
                        />
                        <Card_three
                        course_name='CAT'
                        course_price='Rs.50,000'
                        detail='New batch starts 10th April 2024.'
                        course_timing='Class Timing 8:30PM to 10:30PM'
                        />
                        <Card_four
                        course_name='CAT'
                        course_price='Rs.50,000'
                        detail='New batch starts 10th April 2024.'
                        course_timing='Class Timing 8:30PM to 10:30PM'
                        />
                    </div>

                </div>
            </div>

            <div className='FQA'>
                <div className='FQA-area'>
                    <div className='FQA-head'>
                        Frequently Asked Questions
                    </div>
                    <div className='FQA-body'>
                        <FAQQuestion
                        question='What is the eligibility criteria for CAT 2024?'
                        answer="The eligibility criteria for CAT 2024 is a Bachelor's degree with at least 50% marks or equivalent CGPA. For SC, ST and PwD candidates, the minimum percentage required is 45%."
                        />
                            <FAQQuestion
                        question='What is the eligibility criteria for CAT 2024?'
                        answer="The eligibility criteria for CAT 2024 is a Bachelor's degree with at least 50% marks or equivalent CGPA. For SC, ST and PwD candidates, the minimum percentage required is 45%."
                        />
                        <FAQQuestion
                        question='What is the eligibility criteria for CAT 2024?'
                        answer="The eligibility criteria for CAT 2024 is a Bachelor's degree with at least 50% marks or equivalent CGPA. For SC, ST and PwD candidates, the minimum percentage required is 45%."
                        />
                        <FAQQuestion
                        question='What is the eligibility criteria for CAT 2024?'
                        answer="The eligibility criteria for CAT 2024 is a Bachelor's degree with at least 50% marks or equivalent CGPA. For SC, ST and PwD candidates, the minimum percentage required is 45%."
                        />
                        <FAQQuestion
                        question='What is the eligibility criteria for CAT 2024?'
                        answer="The eligibility criteria for CAT 2024 is a Bachelor's degree with at least 50% marks or equivalent CGPA. For SC, ST and PwD candidates, the minimum percentage required is 45%."
                        />
                    </div>
                </div>
            </div>            

            

            
        </div>

    );
}