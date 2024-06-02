
import React from "react";
import './stud_testimonial.css';
import { HeadingSubheading } from '../../components/headings/headings';
import { Card_two } from '../../components/card/card2';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { useParams } from 'react-router-dom';

export function Testimonial() {
    const {id}=useParams();
    const students={
        student1:{
            name:'Ajai Singh',
            city:'Prayagraj',
            detail:'Hello Everyone!! I am Ajai Singh, Founder and CEO of Toil Chamber of Mathematics Pvt. Ltd. (TCM Education), a leading national brand, based in Prayagraj, for CAT, CLAT, IPMAT & OMET exams. The identity that I love the most is of being a mentor and teacher to young minds. Teaching has always been my first love, right from my childhood.',
            ile:'IIM Trichy 99%ile',
            img:'student1.png'
        },
        student2:{
            name:'Ajai Singh',
            city:'Prayagraj',
            detail:'Hello Everyone!! I am Ajai Singh, Founder and CEO of Toil Chamber of Mathematics Pvt. Ltd. (TCM Education), a leading national brand, based in Prayagraj, for CAT, CLAT, IPMAT & OMET exams. The identity that I love the most is of being a mentor and teacher to young minds. Teaching has always been my first love, right from my childhood.',
            ile:'IIM Trichy 99%ile',
            img:'student1.png'
        },
        student3:{
            name:'Ajai Singh',
            city:'Prayagraj',
            detail:'Hello Everyone!! I am Ajai Singh, Founder and CEO of Toil Chamber of Mathematics Pvt. Ltd. (TCM Education), a leading national brand, based in Prayagraj, for CAT, CLAT, IPMAT & OMET exams. The identity that I love the most is of being a mentor and teacher to young minds. Teaching has always been my first love, right from my childhood.',
            ile:'IIM Trichy 99%ile',
            img:'student1.png'
        },
        student4:{
            name:'Ajai Singh',
            city:'Prayagraj',
            detail:'Hello Everyone!! I am Ajai Singh, Founder and CEO of Toil Chamber of Mathematics Pvt. Ltd. (TCM Education), a leading national brand, based in Prayagraj, for CAT, CLAT, IPMAT & OMET exams. The identity that I love the most is of being a mentor and teacher to young minds. Teaching has always been my first love, right from my childhood.',
            ile:'IIM Trichy 99%ile',
            img:'student1.png'
        },
        student5:{
            name:'Ajai Singh',
            city:'Prayagraj',
            detail:'Hello Everyone!! I am Ajai Singh, Founder and CEO of Toil Chamber of Mathematics Pvt. Ltd. (TCM Education), a leading national brand, based in Prayagraj, for CAT, CLAT, IPMAT & OMET exams. The identity that I love the most is of being a mentor and teacher to young minds. Teaching has always been my first love, right from my childhood.',
            ile:'IIM Trichy 99%ile',
            img:'student1.png'
        },
        student6:{
            name:'Ajai Singh',
            city:'Prayagraj',
            detail:'Hello Everyone!! I am Ajai Singh, Founder and CEO of Toil Chamber of Mathematics Pvt. Ltd. (TCM Education), a leading national brand, based in Prayagraj, for CAT, CLAT, IPMAT & OMET exams. The identity that I love the most is of being a mentor and teacher to young minds. Teaching has always been my first love, right from my childhood.',
            ile:'IIM Trichy 99%ile',
            img:'student1.png'
        }

    }
    const getstudentbyname=(name)=>{
        return students[name] || null;        }
    const student_name=id;
    const students_data=getstudentbyname(student_name);
    console.log(students_data.name,student_name);
    return (
        <div>
            <div className="container">
                <img src={`/images/${students_data.img}`} alt="stud_img" className="stud_img"/>
                <div className="container_text">
                    <button className="btn">{students_data.ile}</button>
                    <div className="stud_name">
                    {students_data.name},<br/> {students_data.city}
                    </div>
                    <div className="stud_detail">
                    {students_data.detail}                    
                    </div>
                    <div className="buttons">
                            <button className="register">Register for Free Workshops</button>
                            <button className="book">Book Live Trial Class</button>
                    </div>

                </div>
            </div>

            <div className="road_map">
            <img src="/images/Roadmap detail.png" alt="road_map" className="road_map_img"/>
            <img src="/images/IIM.png" alt="road_map" className="IIM_img"/>
            </div>

            <HeadingSubheading heading={` From Aspirants to Achievers`} sub={`We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.`}/>


            <div className='card-2-container'>
            <div className='mobile-view'>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop autoPlay>
                <div className='carousel-slideee'>
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student1'/>
                </div>
                <div className='carousel-slideee'>
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student2'/>
                </div>
                <div className='carousel-slideee'>
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student3'/>
                </div>
                <div className='carousel-slideee'>
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student4'/>
                </div>
                </Carousel>
            </div>
                
            <div className='desktop-view'>
            
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student1' />
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student2'/>
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student3'/>
                <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student5'/>
                <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student6'/>
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student4'/>
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