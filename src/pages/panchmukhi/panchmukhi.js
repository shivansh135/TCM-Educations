import React , { useState } from 'react';
import './panchmukhi.css';
import { Step_odd } from '../../components/Panchmukhi_process/step_odd';
import { Step_even } from '../../components/Panchmukhi_process/step_even';
import { Card_four } from '../../components/card/card4';
import { Card_three } from '../../components/card/card3';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Link } from 'react-router-dom';
import { FAQall, cardsData } from '../home/home';
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
                        Plan for Acing Exams</div>
                    </div>
                    <div className='roadmaps-heading-detail'>
                    Unlock your potential with TCM's comprehensive plan, featuring expert guidance, strategic study methods, and targeted practice to ace the exams.
                    </div>
                    <div className='buttonns' style={{left:'0'}}>
                        <button className='live-class'><Link to="/form-page">Counselling Call</Link></button>
                        <button className='buy-now'><Link to="/signup">Book Trial Class</Link></button>
                    </div>
                </div>
                <div className='slide-img'>
                    <Link to="/checkout">
                    <picture>
                        <source 
                            media="(max-width: 760px)"
                            srcset="/images/punchmukhi-road-p.png"/>
                        <source 
                            media="(min-width: 761px)"
                            srcset="/images/punchmukhi-road.png"/>
                        <img src="/images/punchmukhi-road.png" 
                        className='slides-imgg'
                        alt="def"/>
                    </picture>

                    </Link>
                </div>
            </div>

            <Step_odd 
                step="Step 1"
                title="Fundamental Process"
                detail="We help you to clear your fundamentals of Maths, English
and Logical Reasoning. In this stage students are advised to appear for Online Topic Tests for practising the fundamental learnt."
                image='ask1.png'/>

            <Step_even 
                step="Step 2"
                title="Concept Building Stage"
                detail="We ensure our students develop conceptual clarity on all the concepts of Quantitative Aptitude, Logical Reasoning and Data Interpretation, Verbal Ability and Reading Comprehension. Students appear in offline as well as online sectional tests for testing their conceptual knowledge."
                image='ask2.png'/>

            <Step_odd 
                step="Step 3"
                title="Advanced Stage"
                detail="In this stage Students are exposed and trained on difficult problems and questions which boost up the confidence level of students. Students appear in offline as well as Online Challenger Tests for Comprehensive Preparation."
                image='ask3.png'/>

            <Step_even 
                step="Step 4"
                title="Challenger Stage"
                detail="This is the highest level rigorous training stage in which students solve most difficult m questions from the concepts of Quantitative Aptitude, Logical Reasoning and Data Interpretation, Verbal Aptitude and Reading Comprehension. Students appear in offline as well as TCM ALL INDIA ONLINE TEST SERIES (A1 Rankers) for Comprehensive Preparation."
                image='ask4.png'/>

            <Step_odd 
                step="Step 5"
                title="Holistic Development"
                detail="In this stage Students are trained on Group Discussion Skills, Interview Skills, Resume building and Writing Skills, so that our students can excel in their higher education journey."
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

      <FAQall/>           

            

            
        </>

    );
}