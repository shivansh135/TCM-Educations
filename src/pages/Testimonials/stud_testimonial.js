
import React from "react";
import './stud_testimonial.css';
import { HeadingSubheading } from '../../components/headings/headings';
import { Card_two } from '../../components/card/card2';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Link, useLocation, useParams } from 'react-router-dom';
import { StudentsFeedback } from "../home/home";
import { Offline_centre } from "../Offline_centre/offline_centre";

export function Testimonial() {
    const {state}=useLocation();
    console.log(state);
 
    return (
        <div>
            <div className="container student">
                <img src={`/images/students/${state.name.split(' ')[0].toLocaleLowerCase()}.png`} alt="stud_img" className="stud_img"/>
                <div className="container_text">
                    <div className="name-percent">
                    <button className="btn">{state.percent}</button>
                    <div className="stud_name">
                    {state.name}
                    </div>
                    </div>
                    <div className="stud_detail">
                    {state.review}                    
                    </div>
                   
                    
                    <div className="buttons">
                            <Link to="/signup" className="register">Register for Free Workshops</Link>
                            <Link to="/signup" className="book">Book Live Trial Class</Link>
                    </div>

                </div>
            </div>

            <div className="road_map">
            <img src="/images/Roadmap detail.png" alt="road_map" className="road_map_img"/>
            <img src={`/clgs/${state.clg}`} alt="road_map" style={{borderRadius:'8px'}} className="IIM_img"/>
            </div>

            <HeadingSubheading heading={` From Aspirants to Achievers`} sub={`Read testimonials from our successful students who have turned their dreams into reality with TCM`}/>


            <StudentsFeedback/>
            

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