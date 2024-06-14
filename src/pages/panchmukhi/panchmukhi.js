import React , { useState } from 'react';
import './panchmukhi.css';
import { Step_odd } from '../../components/Panchmukhi_process/step_odd';
import { Step_even } from '../../components/Panchmukhi_process/step_even';
import { Card_four } from '../../components/card/card4';
import { Card_three } from '../../components/card/card3';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Link } from 'react-router-dom';
import { cardsData } from '../home/home';
import PricingCards from '../../components/pricingCards/pricingCards';


export default function Panchmukhi() {
    const [selectedOption, setSelectedOption] = useState('CAT');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <>
            <div className="rectangle_one">
                <div className="panckmukhi_heading">
                TCM’ Exclusive Panchukhi Approach for Aspirants
                </div>
                <div className='CAT_video'>
                <div className='CAT_video_button'>
                    <img src='./images/play_arrow.png'  alt='play' />
                </div>
            </div>
            </div>
            
            <div className='roadmaps'>
                <div className='roadmaps-head'>
                    <div className='roadmaps-heading'>
                    
                    <div className='BLACK'>
                    <span className='BLUEE'>TCM’s </span>
                        The Plan for Acting</div>
                    </div>
                    <div className='roadmaps-heading-detail'>
                        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class apten
                    </div>
                    <div className='buttonns' style={{left:'0'}}>
                        <button className='live-class'><Link to="/form-page">Counceling Call</Link></button>
                        <button className='buy-now'><Link to="/signup">Book Trial Class</Link></button>
                    </div>
                </div>
                <div className='slide-img'>
                    <Link to="/checkout">
                    <picture>
                        <source 
                            media="(max-width: 760px)"
                            srcset="/images/slide-p.svg"/>
                        <source 
                            media="(min-width: 761px)"
                            srcset="/images/Slide.svg"/>
                        <img src="/images/Slide.svg" 
                        className='slides-imgg'
                        alt="def"/>
                    </picture>

                    </Link>
                </div>
            </div>

            <Step_odd 
                step="Step 1"
                title="Fundamental Process"
                detail="The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams"
                image='ask1.png'/>

            <Step_even 
                step="Step 2"
                title="Concept Building Stage"
                detail="The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams"
                image='ask2.png'/>

            <Step_odd 
                step="Step 3"
                title="Advanced Stage"
                detail="The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams"
                image='ask3.png'/>

            <Step_even 
                step="Step 4"
                title="Challenger Stage"
                detail="The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams"
                image='ask4.png'/>

            <Step_odd 
                step="Step 5"
                title="Holistic Development"
                detail="The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams"
                image='ask5.png'/>       
            

            <div className="course-select">
        <div className="course-select-area">
          <div className="course-head">
            <div className="course-head-title">
              Choose a Course that Fits you
            </div>
            <div className="course-head-option">
              <div
                className="option"
                onClick={() => handleOptionClick("CAT")}
                style={{
                  backgroundColor: selectedOption === "CAT" ? "#14A4F5" : "",
                  color: selectedOption === "CAT" ? "white" : "",
                }}
              >
                CAT
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("IPMAT")}
                style={{
                  backgroundColor: selectedOption === "IPMAT" ? "#14A4F5" : "",
                  color: selectedOption === "IPMAT" ? "white" : "",
                }}
              >
                IPMAT
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("CLAT")}
                style={{
                  backgroundColor: selectedOption === "CLAT" ? "#14A4F5" : "",
                  color: selectedOption === "CLAT" ? "white" : "",
                }}
              >
                CLAT
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("CUET")}
                style={{
                  backgroundColor: selectedOption === "CUET" ? "#14A4F5" : "",
                  color: selectedOption === "CUET" ? "white" : "",
                }}
              >
                CUET
              </div>
            </div>
          </div>
          <PricingCards data={cardsData} />
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

            

            
        </>

    );
}