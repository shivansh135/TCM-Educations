import React, { useState } from "react";
import './test_series.css';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Test } from "../../components/card/test_card";


export function Test_series() {
    const [selectedOption, setSelectedOption] = useState('CAT');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div>
            <div className="head_six">
                <div className="heading_content_six">
                    <div className="heading_six">
                        Solve the test papers <br/>and test your skills
                    </div>
                    <div className="detail_six">
                        Hello Everyone!! I am Ajai Singh, Founder and CEO of Toil Chamber of Mathematics Pvt. Ltd. (TCM Education), a leading national brand, based in Prayagraj, for CAT, CLAT, IPMAT & OMET exams.
                    </div>
                    <button className="book">
                        Book Live Trial Class {'>'}
                    </button>
                </div>
                <img src="./images/Test_Series_Page.png" alt="hero" className="pages" />
            </div>

            <div className="test_series_select">

                <div className='course-head'>
                    <div className='course-head-title'>
                        Select Test Series
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
                    <Test/>
                    <Test/>
                    <Test/>
                    </>
                )}

                {selectedOption === 'IPMAT' && (
                    <>
                    <Test/>
                    <Test/>
                    <Test/>
                    </>
                )}

                {selectedOption === 'CLAT' && (
                    <>
                    <Test/>
                    <Test/>
                    <Test/>
                    </>
                )}

                {selectedOption === 'CUET' && (
                    <>
                    <Test/>
                    <Test/>
                    <Test/>
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