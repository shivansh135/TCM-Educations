import React from "react";
import './test_series.css';
import FAQQuestion from '../../components/FaQ/FAQQuestion';

export function Test_series() {
    return (
        <div>
            <div className="head">
                <div className="heading_content">
                    <div className="heading">
                        Solve the test papers <br/>and test your skills
                    </div>
                    <div className="detail">
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
                        <div className='option'>CAT</div>
                        <div className='option'>IPMAT</div>
                        <div className='option'>CLAT</div>
                        <div className='option'>CUET</div>
                    </div>
                </div>

                <div className='test-contents'>
                    <div className='test-card'>
                        <div className='test-card-content'>
                            <div className="test-card-title">
                                TCY Test Series
                            </div>
                            <div className="test-card-detail">
                                Analysis & Solutions available <br/>after Submission
                            </div>
                            <div className="test-card-button">
                                <button className="start_test">Start Test {'>'}</button>
                                <button className="view_more">View Details {'>'}</button>
                            </div>
                        </div>
                    </div>

                    <div className='test-card'>
                        <div className='test-card-content'>
                            <div className="test-card-title">
                                TCY Test Series
                            </div>
                            <div className="test-card-detail">
                                Analysis & Solutions available <br/>after Submission
                            </div>
                            <div className="test-card-button">
                                <button className="start_test">Start Test {'>'}</button>
                                <button className="view_more">View Details {'>'}</button>
                            </div>
                        </div>
                    </div>
                    <div className='test-card'>
                        <div className='test-card-content'>
                            <div className="test-card-title">
                                TCY Test Series
                            </div>
                            <div className="test-card-detail">
                                Analysis & Solutions available <br/>after Submission
                            </div>
                            <div className="test-card-button">
                                <button className="start_test">Start Test {'>'}</button>
                                <button className="view_more">View Details {'>'}</button>
                            </div>
                        </div>
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
    )
}