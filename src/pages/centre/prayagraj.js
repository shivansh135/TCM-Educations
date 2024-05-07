
import React from 'react';
import './prayagraj.css';
import { Centre_card } from '../../components/card/centre_card';
import { Batch_card } from '../../components/card/centre_batch_card';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Centre } from '../../components/Centre_Location/Centre';

export default function Prayagraj() {
    return (
        <div>
            <div className='location_image'>
                <Centre
                Location='Prayagraj'
                />
            </div>

            <div className='center_card'>
                <Centre_card 
                image='centre_img_one.png'
                title='Limited Batch Size of 25'
                description={'Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance.'}
                />

                <Centre_card 
                image='centre_img_one.png'
                title='Limited Batch Size of 25'
                description={'Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance.'}
                />

                <Centre_card 
                image='centre_img_one.png'
                title='Limited Batch Size of 25'
                description={'Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance.'}
                />

            </div>
            <div className='core_team'>
                <div className='core_team_heading'>
                    <div className='team_quote'>
                        The Core Team at Prayagraj Centre
                    </div>

                    <div className='team_content'>
                    We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.
                    </div>                
                </div>
                <img src='./images/faculty_image.png' className='faculties' alt='faculties'/>
            </div>

            <div className='centre_class'>
                <div className='centre_quote'>
                    An Extraordinary Learning Experience
                </div>
                <div className='students'>
                    <img src='./images/student1.jpg' alt='student'/>
                    <img src='./images/student1.jpg' alt='student'/>
                    </div>
            </div>

            <div className='course_batch'>
                <div className='course-head'>
                    <div className='course-head-title'>
                        Upcoming Batches at Prayagraj Centre
                    </div>
                    <div className='course-head-option'>
                        <div className='option'>CAT</div>
                        <div className='option'>IPMAT</div>
                        <div className='option'>CLAT</div>
                        <div className='option'>CUET</div>
                    </div>
                </div>
                <div className='Batch-Card'>
                    <Batch_card 
                    course='CLAT 2024'
                    date='Starting Aug,23'
                    detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                    />
                    <Batch_card 
                    course='CLAT 2024'
                    date='Starting Aug,23'
                    detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                    />
                    <Batch_card 
                    course='CLAT 2024'
                    date='Starting Aug,23'
                    detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                    />
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