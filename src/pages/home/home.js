import React, { useState,useEffect }from 'react';
import './home.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import {Button} from '../../components/button/button';
import { Card } from '../../components/card/card';
import { Card_two } from '../../components/card/card2';
import { Card_four } from '../../components/card/card4';
import { Card_three } from '../../components/card/card3';
import { HeadingSubheading } from '../../components/headings/headings';
import Popup_home from './popup_home';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import PricingCard from '../../components/pricingCards/pricingCards';
import PricingCards from '../../components/pricingCards/pricingCards';

export const cardsData = [
    {
        title:`TCM'S Online Holistic Batch - CAT 2025`,
        discription:`Live Online CAT 2024 Weekday Batch`,
        list:[
            '120+ Interactive Classes',
            '150+ Interactive Classes',
            '150+ Interactive Classes',
            '100+ Pre recorded classes on QUANT, VARC & DILR',
            '100+ Pre recorded classes on QUANT, VARC & DILR',
            '100+ Pre recorded classes on QUANT, VARC & DILR'
        ],
        price:'52,000',
        batchInfo:`New batch starts 10th April 2024 Class Timing 8:30PM to 10:30PM`,
        blue:true
    },
    {
        title:`TCM'S Online Holistic Batch - CAT 2025`,
        discription:`Live Online CAT 2024 Weekday Batch`,
        list:[
            '120+ Interactive Classes',
            '150+ Interactive Classes',
            '150+ Interactive Classes',
            '100+ Pre recorded classes on QUANT, VARC & DILR',
            '100+ Pre recorded classes on QUANT, VARC & DILR',
            '100+ Pre recorded classes on QUANT, VARC & DILR',
        ],
        price:'52,000',
        batchInfo:`New batch starts 10th April 2024 Class Timing 8:30PM to 10:30PM`
    },
    {
        title:`TCM'S Online Holistic Batch - CAT 2025`,
        discription:`Live Online CAT 2024 Weekday Batch`,
        list:[
            '120+ Interactive Classes',
            '150+ Interactive Classes',
            '150+ Interactive Classes',
            '100+ Pre recorded classes on QUANT, VARC & DILR',
            '100+ Pre recorded classes on QUANT, VARC & DILR',
            '100+ Pre recorded classes on QUANT, VARC & DILR',
        ],
        price:'52,000',
        batchInfo:`New batch starts 10th April 2024 Class Timing 8:30PM to 10:30PM`
    }
]

export const StudentsFeedback = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        if(window.innerWidth < 768){
            setIsMobile(true);
        }
    },[isMobile])

return(
    <>
    <div style={{minWidth:'100%',margin:'0px',marginTop:'40px'}} className='card-2-container'>
            
           <Marquee >
                <Card_two src='/images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student1' />
                <Card_two src='/images/student2.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student2'/>
                <Card_two src='/images/student3.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student3'/>
                <Card_two src='/images/student4.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student4'/>
                <Card_two src='/images/student5.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student5'/>
                <Card_two src='/images/student6.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student6'/>
            </Marquee>

            {!isMobile &&<Marquee direction='right'>
                <Card_two src='/images/student7.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student7' />
                <Card_two src='/images/student8.jpeg' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student8'/>
                <Card_two src='/images/student9.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student9'/>
                <Card_two src='/images/student10.jpeg' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student10'/>
                <Card_two src='/images/student11.jpeg' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student11'/>
                <Card_two src='/images/student12.jpeg' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student12'/>
            </Marquee>}
            </div>
    </>
)
}

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ["/H1.png", "/H2.png",'/H3.png','/H4.png','/H5.png'];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
      
        return () => clearInterval(interval);
      }, [currentIndex, images]);
      
    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const [selectedOption, setSelectedOption] = useState('CAT');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div>
            {showPopup &&
                <div className='popup-container' onClick={() => setShowPopup(false)}>
                    <Popup_home closePopup={() => setShowPopup(false)} />
                </div>
            }
            <div className='home'>
                <div className='headd'>
                    <div className='black-head'>
                    <span className='blue-head'>TCM EDUCATION </span>Turning Dreams to Reality
                    </div>
                    <div className='para-one'>
                        We're India's leading coaching institute, empowering students to
                         conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with
                         the knowledge and confidence to ace your exams and gain
                         admission to the top colleges in India.
                    </div>
                    <Button onClick={handleButtonClick}/>
                </div>
                <div className='home_two_img'>
                    {images.map((src, index) => (
                        <img
                        key={index}
                        src={src}
                        style={{width:'90%'}}
                        alt={`hero-${index}`}
                        className={index === currentIndex ? 'fade-in' : 'fade-out'}
                        />
                    ))}
                    </div>
            </div>

        <HeadingSubheading heading={`Why TCM is India’s Fastest Growing Institute?`} sub={`We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.`}/>

            <div className='but2'>
                <button className='Counsel '><Link to="/form-page">Counseling Call <img src="./images/Icon.svg" className='belll' alt='bell'/></Link></button>
                <button className='book_one'><Link to="/signup">Book Live Trial Class <img src="./images/Icon_1.svg" className='belll' alt='bell'/></Link></button>
            </div>

            <div className='home_two_img'>
                <img src="/Group2-mobile.png" alt='hero' class="desktop-img"/>
                <img src="/Group2.svg" alt='hero' class="mobile-img"/>
            </div>


        <HeadingSubheading heading={` Meet the TCM Avengers`} sub={`We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.`}/>


        <div className='card-1-container'>
            {/* <div className='mobile-view'>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop autoPlay>
            <div className='carousel-slide'>
            <Card src='./images/teacher1.png' title='Ajai Singh' faculty='Lead Mentor and Director' viewmore='View More' id='ajai_sir'/>
            </div>
            <div className='carousel-slide'>
            <Card src='./images/teacher2.png' title='Sunny Rajani' faculty='Lead Mentor and Director' viewmore='View More' id='sunny_sir'/>
            </div>
            <div className='carousel-slide'>
            <Card src='./images/teacher3.png' title='Manoj Manoj' faculty='Lead Mentor and Director' viewmore='View More' id='manoj_sir'/>
            </div>
            <div className='carousel-slide'>
            <Card src='./images/teacher4.png' title='Prashant Pareek' faculty='Lead Mentor and Director' viewmore='View More' id='prashant_sir'/>
            </div>
            <div className='carousel-slide'>
            <Card src='./images/teacher5.png' title='Ashutosh Ashutosh' faculty='Lead Mentor and Director' viewmore='View More' id='ashutosh_sir'/>
            </div>
            </Carousel>
            </div> */}

            <Marquee style={{marginTop:'0px'}} speed={43}>
                <Card src='./images/teacher1.png' title='Ajai Singh' faculty='Lead Mentor and Director' viewmore='View More' id='ajai_sir'/>
                <Card src='./images/teacher2.png' title='Sunny Rajani' faculty='Lead Mentor and Director' viewmore='View More' id='sunny_sir'/>
                <Card src='./images/teacher3.png' title='Manoj Manoj' faculty='Lead Mentor and Director' viewmore='View More' id='manoj_sir'/>
                <Card src='./images/teacher4.png' title='Prashant Pareek' faculty='Lead Mentor and Director' viewmore='View More' id='prashant_sir'/>
                <Card src='./images/teacher5.png' title='Ashutosh Ashutosh' faculty='Lead Mentor and Director' viewmore='View More' id='ashutosh_sir'/>

                <Card src='./images/teacher1.png' title='Ajai Singh' faculty='Lead Mentor and Director' viewmore='View More' id='ajai_sir'/>
                <Card src='./images/teacher2.png' title='Sunny Rajani' faculty='Lead Mentor and Director' viewmore='View More' id='sunny_sir'/>
                <Card src='./images/teacher3.png' title='Manoj Manoj' faculty='Lead Mentor and Director' viewmore='View More' id='manoj_sir'/>
                <Card src='./images/teacher4.png' title='Prashant Pareek' faculty='Lead Mentor and Director' viewmore='View More' id='prashant_sir'/>
                <Card src='./images/teacher5.png' title='Ashutosh Ashutosh' faculty='Lead Mentor and Director' viewmore='View More' id='ashutosh_sir'/>

            </Marquee>

        </div>

            <div className='panchmukhi-img'>
                <Link to='/panchmukhi'>
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Frame_two.png" />
                    <source media="(min-width: 769px)" srcSet="./images/Frame.png" />
                    <img src="./images/Frame.png" style={{width:'100%',height:'auto'}} alt='frame'/>
                </picture>
                </Link>

            </div>

            <HeadingSubheading heading={` From Aspirants to Achievers`} sub={`We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.`}/>


            {/* <div className='mobile-view'>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop autoPlay>
                <div className='carousel-slide'>
                <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student1'/>
                </div>
                <div className='carousel-slide'>
                <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student2'/>
                </div>
                <div className='carousel-slide'>
                <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student3'/>
                </div>
                <div className='carousel-slide'>
                <Card_two src='./images/student1.png' name='Ajai Singh' cor='CAT' ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student4'/>
                </div>
                </Carousel>
            </div> */}
            <StudentsFeedback/>
            
           

            <div className='course-select'>
                <div className='course-select-area'>
                    <div className='course-head'>
                        <div className='course-head-title'>
                            Choose a Course that Fits you
                        </div>
                        <div className='course-head-option'>
                            <div className='option' onClick={() => handleOptionClick('CAT')} style={{backgroundColor: selectedOption === 'CAT' ? '#14A4F5' : '' ,color: selectedOption === 'CAT' ? 'white' : ''}}>CAT</div>
                            <div className='option' onClick={() => handleOptionClick('IPMAT')} style={{backgroundColor: selectedOption === 'IPMAT' ? '#14A4F5' : '' ,color: selectedOption === 'IPMAT' ? 'white' : ''}}>IPMAT</div>
                            <div className='option' onClick={() => handleOptionClick('CLAT')} style={{backgroundColor: selectedOption === 'CLAT' ? '#14A4F5' : '' ,color: selectedOption === 'CLAT' ? 'white' : ''}}>CLAT</div>
                            <div className='option' onClick={() => handleOptionClick('CUET')} style={{backgroundColor: selectedOption === 'CUET' ? '#14A4F5' : '',color: selectedOption === 'CUET' ? 'white' : ''}}>CUET</div>
                        </div>
                    </div>
                    <PricingCard data={cardsData}/>

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
    );
}