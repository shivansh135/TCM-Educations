import React from 'react';
import './teacher_one.css';
import {Teacher_card} from '../../components/card/teacher_card';
import { HeadingSubheading } from '../../components/headings/headings';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Card_two } from '../../components/card/card2';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useParams } from 'react-router-dom';
import { StudentsFeedback } from '../home/home';



export default function Teacher() {
    const {id}=useParams();
    const teachers={
        ajai_sir:{
            name:'Ajai Singh',
            desig:'CAT Faculty',
            description:'Ajai Singh is a CAT faculty at TCM Education. He has been teaching for over 10 years and has helped thousands of students crack the CAT exam. He is known for his unique teaching methods and personalized approach to each student.',
            f_name:'Ajai',
            img:'Ajai.png'
        },
        sunny_sir:{
            name:'Sunny Rajani',
            desig:'CLAT Faculty',
            description:'Rahul Sharma is a CLAT faculty at TCM Education. He has been teaching for over 10 years and has helped thousands of students crack the CLAT exam. He is known for his unique teaching methods and personalized approach to each student.',
            f_name:'Rahul',
            img:'sunny.png'
        },
        prashant_sir:{
            name:'Prashant Kumar',
            desig:'IPMAT Faculty',
            description:'Sachin Kumar is a IPMAT faculty at TCM Education. He has been teaching for over 10 years and has helped thousands of students crack the IPMAT exam. He is known for his unique teaching methods and personalized approach to each student.',
            f_name:'Sachin',
            img:'prashant.png'
        },
        manoj_sir:{
            name:'Manoj Kumar',
            desig:'CUET Faculty',
            description:'Anil Kumar is a CUET faculty at TCM Education. He has been teaching for over 10 years and has helped thousands of students crack the CUET exam. He is known for his unique teaching methods and personalized approach to each student.',
            f_name:'Anil',
            img:'manoj.png'
        },
        ashutosh_sir:{
            name:'Ashutosh Kumar',
            desig:'CUET Faculty',
            description:'Anil Kumar is a CUET faculty at TCM Education. He has been teaching for over 10 years and has helped thousands of students crack the CUET exam. He is known for his unique teaching methods and personalized approach to each student.',
            f_name:'Anil',
            img:'ashutosh.png'
        }
    }
    const getteacherbyname=(name)=>{
        return teachers[name] || null;        }
    const teacher_name=id;
    const teachers_data=getteacherbyname(teacher_name);
    console.log(teachers_data.name,teacher_name);
    return (
        <div>
            <div className="rectangle">
                <div className='teacher_content'>
                    <div className="teacher_heading">
                        <div className='names'>{teachers_data.name}</div>
                        <div className='desig'>{teachers_data.desig}</div>
                    </div>
                    <div className='content'>
                        {teachers_data.description}                    
                    </div>
                    <button className='Book_Live'>Book Live Trial Class with {teachers_data.f_name} Sir</button>
                </div>

                <img src={`/images/${teachers_data.img}`} className="teacher" alt="teacher"/>
            </div>

            <div className="teacher_cards">
                <Teacher_card feature="120+ Courses" detail="Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance"/> 
                <Teacher_card feature="120+ Courses" detail="Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance"/> 
                <Teacher_card feature="120+ Courses" detail="Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance"/> 
            </div>

            <div className="teacher_wheel">
                <div className="head_five">
                    What does Student say about Ajai Sir?
                </div>

                <img src="/images/wheel.png" alt="teacher_wheel" className='wheel'/>
            </div>

            <div className="special">
                <div className="special_left">
                    <div className="special_head">
                        Why he is so special?
                    </div>
                    <img src="/images/teacher_ill.svg" alt='ill'/>
                </div>
                <div className="special_right">
                    <div className="special_block">
                        <div className="special_block_head">
                            ⁕ New Teaching Methods  
                        </div>
                        <div className="special_detail">
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus u
                        </div>
                    </div>

                    <div className="special_block">
                        <div className="special_block_head">
                            ⁕ New Teaching Methods  
                        </div>
                        <div className="special_detail">
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus u
                        </div>
                    </div>

                    <div className="special_block">
                        <div className="special_block_head">
                            ⁕ New Teaching Methods  
                        </div>
                        <div className="special_detail">
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus u
                        </div>
                    </div>
                </div>
            </div>

            <HeadingSubheading heading={` From Aspirants to Achievers`} sub={`We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.`}/>


            
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