import React, { useState } from "react";
import { Test, UpcomminCard } from "../../components/card/test_card";
import FAQQuestion from "../../components/FaQ/FAQQuestion";


export function Upcomming() {
    const [selectedOption, setSelectedOption] = useState('CAT');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div>
            {/* <div className="head_six">
                <div className="heading_content_six">
                    <div className="heading_six">
                    Upcoming Batches at TCM Education
                    </div>
                    <div className="detail_six">
                    Tailored programs for all CAT, IPMAT, CLAT and CUET (UG) offering in-depth knowledge and effective strategies to excel in each exam.
                    </div>
                    <button className="book">
                        Book Live Trial Class <img src="./images/Icon.svg" className='bellll' alt='bell'/>
                    </button>
                </div>
                <img src="/mock-paper-ill.png" alt="hero" className="pages" />
            </div> */}

            <div className="test_series_select">

                <div className='course-head'>
                    <div className="heading_six">
                        Choose your Stream
                    </div>
                    <div className='course-head-option'>
                        <div className='option' onClick={() => handleOptionClick('CAT')} style={{backgroundColor: selectedOption === 'CAT' ? '#14A4F5' : '' ,color: selectedOption === 'CAT' ? 'white' : ''}} >CAT</div>
                        <div className='option' onClick={() => handleOptionClick('IPMAT')} style={{backgroundColor: selectedOption === 'IPMAT' ? '#14A4F5' : '' ,color: selectedOption === 'IPMAT' ? 'white' : ''}}>IPMAT</div>
                        <div className='option' onClick={() => handleOptionClick('CLAT')} style={{backgroundColor: selectedOption === 'CLAT' ? '#14A4F5' : '' ,color: selectedOption === 'CLAT' ? 'white' : ''}}>CLAT</div>
                        <div className='option' onClick={() => handleOptionClick('CUET')} style={{backgroundColor: selectedOption === 'CUET' ? '#14A4F5' : '' ,color: selectedOption === 'CUET' ? 'white' : ''}}>CUET</div>
                    </div>
                </div>

                <div className='test-contents'>
                {selectedOption === 'CAT' && (
                    <>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'}/>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'}/>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."}/>
                    </>
                )}

                {selectedOption === 'IPMAT' && (
                    <>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'}/>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'}/>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."}/>
                    </>
                )}

                {selectedOption === 'CLAT' && (
                    <>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'}/>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'}/>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."}/>
                
                    </>
                )}

                {selectedOption === 'CUET' && (
                    <>
                   <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'}/>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'}/>
                    <UpcomminCard link="/plans" start="25 June, Monday" button="Enroll Now" heading={'Leaders Batch - CAT 2024'} detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."}/>
                
                    </>
                )}

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
    )
}