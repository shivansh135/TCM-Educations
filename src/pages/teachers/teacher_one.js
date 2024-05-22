import React from 'react';
import './teacher_one.css';
import {Teacher_card} from '../../components/card/teacher_card';
import { HeadingSubheading } from '../../components/headings/headings';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Card_two } from '../../components/card/card2';



export default function Teacher({name,desig,description,f_name,img}) {
    return (
        <div>
            <div className="rectangle">
                <div className='teacher_content'>
                    <div className="teacher_heading">
                        <div className='names'>{name}</div>
                        <div className='desig'>{desig}</div>
                    </div>
                    <div className='content'>
                        {description}                    
                    </div>
                    <button className='Book_Live'>Book Live Trial Class with {f_name} Sir</button>
                </div>

                <img src={`./images/${img}`} className="teacher" alt="teacher"/>
            </div>

            <div className="teacher_cards">
                <Teacher_card feature="120+ Courses" detail="Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance"/> 
                <Teacher_card feature="120+ Courses" detail="Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance"/> 
                <Teacher_card feature="120+ Courses" detail="Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance"/> 
            </div>

            <div className="teacher_wheel">
                <div className="head_five">
                    What does Student say <br/>about Ajai Sir?
                </div>

                <img src="./images/wheel.png" alt="teacher_wheel" className="wheel"/>
            </div>

            <div className="special">
                <div className="special_left">
                    <div className="special_head">
                        Why he is so special?
                    </div>
                    <div className="special_square1">

                    </div>
                    <div className="special_square2">

                    </div>
                </div>
                <div className="special_right">
                    <div className="special_block">
                        <div className="special_block_head">
                            ⁕ New Teaching Methods  
                        </div>
                        <div className="special_detail">
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus u
                        </div>
                    </div>

                    <div className="special_block">
                        <div className="special_block_head">
                            ⁕ New Teaching Methods  
                        </div>
                        <div className="special_detail">
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus u
                        </div>
                    </div>

                    <div className="special_block">
                        <div className="special_block_head">
                            ⁕ New Teaching Methods  
                        </div>
                        <div className="special_detail">
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus u
                        </div>
                    </div>
                </div>
            </div>

            <HeadingSubheading heading={` From Aspirants to Achievers`} sub={`We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.`}/>


            <div className='card-2-container'>
            <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." />
            <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." />
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
    )
}