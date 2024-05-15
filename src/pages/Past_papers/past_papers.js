import React from "react";
import './past_papers.css';
import { Card_four } from '../../components/card/card4';
import { Card_three } from '../../components/card/card3';
import FAQQuestion from '../../components/FaQ/FAQQuestion';

export function Past_papers() {
    return (
        <div>
            <div className='past_papers'>
                <div className='past_papers-head'>
                    <div className='past_papers-heading'>
                        Explore Past Year Papers
                    </div>
                    <div className='past_papers-subheading'>
                        <div className='option'>CAT</div>
                        <div className='option'>IPMAT</div>
                        <div className='option'>CLAT</div>
                        <div className='option'>CUET</div>     
                        <div className='option'>CUET</div> 
                        <div className='option'>CUET</div>    
                    </div>      
                </div>
                <div className='past_papers-body'>
                    <div className='past_papers-card'>
                        <div className='past_papers-card-image'>
                            
                        </div>
                        <div className='past_papers-card-content'>
                            <div className="past_papers-card-title">
                                CLAT 2020 Paper Set 1
                            </div>
                            <button className='past_papers-card-button'>
                                View Paper
                            </button>
                        </div>
                    </div>
                    <div className='past_papers-card'>
                        <div className='past_papers-card-image'>
                            
                        </div>
                        <div className='past_papers-card-content'>
                            <div className="past_papers-card-title">
                                CLAT 2020 Paper Set 1
                            </div>
                            <button className='past_papers-card-button'>
                                View Paper
                            </button>
                        </div>
                    </div>
                    <div className='past_papers-card'>
                        <div className='past_papers-card-image'>
                            
                        </div>
                        <div className='past_papers-card-content'>
                            <div className="past_papers-card-title">
                                CLAT 2020 Paper Set 1
                            </div>
                            <button className='past_papers-card-button'>
                                View Paper
                            </button>
                        </div>
                    </div>
                    <div className='past_papers-card'>
                        <div className='past_papers-card-image'>
                            
                        </div>
                        <div className='past_papers-card-content'>
                            <div className="past_papers-card-title">
                                CLAT 2020 Paper Set 1
                            </div>
                            <button className='past_papers-card-button'>
                                View Paper
                            </button>
                        </div>
                    </div>
                    <div className='past_papers-card'>
                        <div className='past_papers-card-image'>
                            
                        </div>
                        <div className='past_papers-card-content'>
                            <div className="past_papers-card-title">
                                CLAT 2020 Paper Set 1
                            </div>
                            <button className='past_papers-card-button'>
                                View Paper
                            </button>
                        </div>
                    </div>
                    <div className='past_papers-card'>
                        <div className='past_papers-card-image'>
                            
                        </div>
                        <div className='past_papers-card-content'>
                            <div className="past_papers-card-title">
                                CLAT 2020 Paper Set 1
                            </div>
                            <button className='past_papers-card-button'>
                                View Paper
                            </button>
                        </div>
                    </div>
                </div>
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

    )
}