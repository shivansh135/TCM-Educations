import React from 'react';
import './home.css';
import Button from './button.js';
import Card from './card.js';
import Card_two from './card2.js';
import Card_three from './card3.js';
import Card_four from './card4.js';
import FAQQuestion from './FAQQuestion.js';

export default function Home() {
    return (
        <div>
        <div className='home'>
        <div className='head'>
            <div className='blue-head'>
                TCM Education
            </div>
            <div className='black-head'>
            Trusted Gateway<br/>to Top Colleges
            </div>
            <div className='para-one'>
                <p>We're India's leading coaching institute, empowering students to <br/>conquer CAT, IPMAT, CLAT & CUET with our expert faculty,<br/> personalized approach, and proven strategies. We'll equip you with <br/>the knowledge and confidence to ace your exams and gain<br/> admission to the top colleges in India.</p>
            </div>
            <Button/>
        </div>
        <div className='head-img'>
            <img src="/Group.png" alt='hero'/>
        </div>
        </div>
        <div className='quote'>
            Why TCM is India’s Fastest Growing Institute?
            </div>

            <div className='home_two_content'>
            We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.
            </div>

            <div className='but2'>
            <button className='Counsel '>Counseling Call {'>'}</button>
            <button className='book'>Book Live Trial Class {'>'}</button>
            </div>

            <div className='home_two_img'>
                <img src="/Group2.png" alt='hero'/>
            </div>
            <div className='quote2'>
            Meet the TCM Avengers
            </div>

            <div className='home_three_content'>
            We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.
            </div>

            <div className='card-1-container'>

                <Card src='./images/teacher1.png' title='Ajai Singh' faculty='Lead Mentor and Director' viewmore='View More'/>
                <Card src='./images/teacher1.png' title='Ajai Singh' faculty='Lead Mentor and Director' viewmore='View More'/> 

            </div>

            <div className='panchmukhi-img'>
                {/* <Link to='#'> */}
                <img src="./images/Frame.png" style={{width:'840px'}} alt='frame'/>
                {/* </Link> */}
            </div>

            <div className='quote3'>
            From Aspirants to Achievers
            </div>

            <div className='home_four_content'>
            We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.
            </div>

            <div className='card-2-container'>
            <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." />
            <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." />
            </div>

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