import React, { useState } from "react";
import './test_series.css';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Test } from "../../components/card/test_card";
import { FAQall } from "../home/home";
import { Link } from "react-router-dom";


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
                    TCM’s Exclusive AI Powered Test Series
                    </div>
                    <div className="detail_six">
                    Maximize your preparation with TCM's comprehensive test series, featuring realistic mock exams, detailed performance analysis, and personalized feedback to ensure success.
                    </div>
                    <Link to='/signup' className="book">
                        Book Live Trial Class <img src="./images/Icon.svg" className='bellll' alt='bell'/>
                    </Link>
                </div>
                <img src="/mock-paper-ill.png" alt="hero" className="pages" />
            </div>

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
                    <Test heading={'Test Panel 1'} link="https://tcmedu.tcyonline.com/" detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'}/>
                    <Test heading={'Test Panel 2'} link="https://tcm.testfunda.com/  " detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'}/>
                    <Test heading={'A1 Rankers'} link="https://a1rankers.com/" detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."}/>
                    </>
                )}

                {selectedOption === 'IPMAT' && (
                    <>
                    <Test heading={'Test Panel 1'} link="https://tcmedu.tcyonline.com/" detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'}/>
                    <Test heading={'Test Panel 2'} link="https://tcm.testfunda.com/  " detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'}/>
                    <Test heading={'A1 Rankers'} link="https://a1rankers.com/" detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."}/>
                    </>
                )}

                {selectedOption === 'CLAT' && (
                    <>
                    <Test heading={'Test Panel 1'} link="https://tcmedu.tcyonline.com/" detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'}/>
                    <Test heading={'Test Panel 2'} link="https://tcm.testfunda.com/  " detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'}/>
                    <Test heading={'A1 Rankers'} link="https://a1rankers.com/" detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."}/>
                
                    </>
                )}

                {selectedOption === 'CUET' && (
                    <>
                   <Test heading={'Test Panel 1'} link="https://tcmedu.tcyonline.com/" detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'}/>
                    <Test heading={'Test Panel 2'} link="https://tcm.testfunda.com/ " detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'}/>
                    <Test heading={'A1 Rankers'} link="https://a1rankers.com/" detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."}/>
                
                    </>
                )}

                </div>
            </div>    
            <FAQall/>

        </div>
    )
}