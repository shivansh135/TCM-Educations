
import React from "react";
import './stud_testimonial.css';
import { HeadingSubheading } from '../../components/headings/headings';
import { Card_two } from '../../components/card/card2';
import FAQQuestion from '../../components/FaQ/FAQQuestion';

export function Testimonial() {
    return (
        <div>
            <div className="container">
                <img src="./images/student1.png" alt="stud_img" className="stud_img"/>
                <div className="container_text">
                    <button className="btn">Student</button>
                    <div className="stud_name">
                        Sharad Singh,<br/> Prayagraj
                    </div>
                    <div className="stud_detail">
                        Hello Everyone!! I am Ajai Singh, Founder and CEO of Toil Chamber of Mathematics Pvt. Ltd. (TCM Education), a leading national brand, based in Prayagraj, for CAT, CLAT, IPMAT & OMET exams. The identity that I love the most is of being a mentor and teacher to young minds. Teaching has always been my first love, right from my childhood.
                    </div>
                    <div className="buttons">
                            <button className="register">Register for Free Workshops</button>
                            <button className="book">Book Live Trial Class</button>
                    </div>

                </div>
            </div>

            <div className="road_map">
            <img src="./images/Roadmap detail.png" alt="road_map" className="road_map_img"/>
            <img src="./images/IIM.png" alt="road_map" className="IIM_img"/>
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