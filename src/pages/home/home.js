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

    const data= [
        {
            name:'Mudit Dewan',
            percent:'SNAP 99.64%ile',
            review:`I want to express my gratitude to TCM for
playing a crucial role in helping me score
98.65 percentile in CAT. The coaching
provided me with the right tools, support
and strategies that made all the difference.
The faculty at TCM were not just
knowledgeable but also made learning
enjoyable. They broke down complex topics
into simple explanations, making it easier
for me to understand and remember key
concepts. TCM's commitment of staying
updated with the latest exam patterns and
trends was evident in the relevance of the
study materials and mocks.`,

        },
        {
            name:'Yash Sadhwani',
            percent:'CAT 99.67%ile',
            review:`
            I want to express my gratitude to TCM for
playing a crucial role in helping me score
98.65 percentile in CAT. The coaching
provided me with the right tools, support
and strategies that made all the difference.
The faculty at TCM were not just
knowledgeable but also made learning
enjoyable. They broke down complex topics
into simple explanations, making it easier
for me to understand and remember key
concepts. TCM's commitment of staying
updated with the latest exam patterns and
trends was evident in the relevance of the
study materials and mocks.`,

        },
        {
            name:'Khushi Jaiswal',
            percent:'CAT 99.67%ile',
            review:`I want to express my gratitude to TCM for
playing a crucial role in helping me score
98.65 percentile in CAT. The coaching
provided me with the right tools, support
and strategies that made all the difference.
The faculty at TCM were not just
knowledgeable but also made learning
enjoyable. They broke down complex topics
into simple explanations, making it easier
for me to understand and remember key
concepts. TCM's commitment of staying
updated with the latest exam patterns and
trends was evident in the relevance of the
study materials and mocks.`,

        },
        {
            name:'Muskan Golus',
            percent:'CAT 99.67%ile',
            review:`Hello! I am Muskan Golus, having converted IIM Trichy. I received calls from MDI Gurgaon, 12 IIMs and other top B-schools. This was only possible because I was a part of TCM Education. My immense gratitude to all the faculties for their guidance and showing me the proper direction which was vital. I would specially want to thank Ajai Sir, for his encouragement and constant
motivation which pushed me to the heights. Mathematics became fun for me and I won.`,

        },
        {
            name:'Archi Jaiswal',
            percent:'CMAT 99.83%ile',
            review:`I want to express my gratitude to TCM for
playing a crucial role in helping me score
98.65 percentile in CAT. The coaching
provided me with the right tools, support
and strategies that made all the difference.
The faculty at TCM were not just
knowledgeable but also made learning
enjoyable. They broke down complex topics
into simple explanations, making it easier
for me to understand and remember key
concepts. TCM's commitment of staying
updated with the latest exam patterns and
trends was evident in the relevance of the
study materials and mocks.`,

        },
        {
            name:'Adrija Tiwari',
            percent:'CAT 98.65%ile',
            review:`I want to express my gratitude to TCM for
playing a crucial role in helping me score
98.65 percentile in CAT. The coaching
provided me with the right tools, support
and strategies that made all the difference.
The faculty at TCM were not just
knowledgeable but also made learning
enjoyable. They broke down complex topics
into simple explanations, making it easier
for me to understand and remember key
concepts. TCM's commitment of staying
updated with the latest exam patterns and
trends was evident in the relevance of the
study materials and mocks.`,

        },
        {
            name:'Tanmay Rastogi',
            percent:'CAT 99.73%ile',
            review:`I would like to
express my gratitude towards TCM
 Prayagraj for all the efforts they put in
 me and the support I got and continue to
get. The teaching staff are excellent and
leave no stone unturned. Ajai Sir
provided me complete concept of
quantitative aptitude and helped me
improve my score in quants. His classes
and workshops are the best way to
prepare.`,

        },
        {
            name:'Sharad Singh',
            percent:'CAT 99.67%ile',
            review:`I finally converted lIM Trichy! TCM
Education has been the aid to my problems during my CAT preparation. I would like to thank the mentors of TCM
Education for providing me proper
 guidance and mentorship to ace CAT exam. TCM’s special clone test series and suggestions of Ajai sir acted as a boon in my preparation. Looking back, I cannot help but only appreciated the support TCM provided me.`,

        },
        {
            name:'Shivam Kumar',
            percent:'CAT 99.88%ile',
            review:`I am extremely grateful to TCM Prayagraj for
their exceptional dedication and continuous
support extended towards me. The faculty
members at TCM Prayagraj are truly
remarkable, leaving no room for any effmt to
be spared. I am indebted to Ajai Sir, who
imparted a comprehensive understanding of
quantitative aptitude, resulting in a
significant improvement in my scores. The
classes and workshops conducted by hlm are
unparalleled in terms of preparation
techniques. His distinct teaching methods
and strategies instilled in me a newfound
confidence that greatly enhanced my
performance.`,

        },
        {
            name:'Somnath Shukla',
            percent:'CAT 99.49%ile',
            review:`I am Somnath. After completing my
graduation from an average college, it was
not an easy job to secure a good percentile
in CAT. I made it possible only because of
Ajai Sir and team. I am truly grateful for the
maximum support they provided me
always. It is impmtant that we receive right
advice in all theaspects and how to make it
itself is a process. Maths is fear only
because we escape practice and conceptual
clarity. Mentors proved me the same. So I
would recommend all from a genuine heart.`,

        }
        ,{
            name:'Vivek Kr. Gupta',
            percent:'CAT 98.84%ile',
            review:`Hello all! I am Vivek Kumar Gupta! Delighted to convert IIM Calcutta & I
 received calls from XLRI and other top b-schools.My journey with TCM started
 with a dream, but it turned into a reality
 by TCM's excellent mentors and their continuous guidance throughout! From
the series of mocks to the updated
content and class delivery.I feel I got
more than enough.I feel elated that I took a wise and crucial decision that changed my life.`,

        },
        {
            name:'Kanhaiya Garg',
            percent:'CAT 99.27%ile',
            review:`"A beautiful Journey" this is how I build
 to describe my experience. The kind of
 mentorship and guidance that was
 provided by Ajai Sir and the team was
 excellent. The environment that the
 faculty created was very inspirational
 and I will preserve it for lifetime. Finally
 I thank all who guided me at every stage of my preparation.`,

        },
        {
            name:'Vishesh Jain',
            percent:'CAT 99.83%ile',
            review:`Hello! I am Vishesh Jain. The classes at
TCM played a big role in securing a 99.83
percentile in CAT. Attending the class was
truly an enriching experience, my big and
small doubts were cleared without any
judgements. It helped me build a new perspective of looking at the questions
asked in the exams and eventually solved
them easily. It's true that journey is more
important than destination and everyday
working to hone my knowledge under the
best made it possible!.`,

        }
    ]

return(
    <>
    <div style={{minWidth:'100%',margin:'0px',marginTop:'40px'}} className='card-2-container'>
            
           <Marquee >
                {
                    data.map((ele)=>(
                        <Card_two state={ele} src={`/images/students/${ele.name.split(' ')[0].toLocaleLowerCase()}.png`} name={ele.name}  ile={ele.percent.replace('CAT ','')} review={ele.review} />
                    ))
                }
            </Marquee>

            {!isMobile &&<Marquee direction='right'>
                {
                    data.map((ele)=>(
                        <Card_two state={ele} src={`/images/students/${ele.name.split(' ')[0].toLocaleLowerCase()}.png`} name={ele.name}  ile={ele.percent.replace('CAT ','')} review={ele.review} />
                    ))
                }
            </Marquee>}
            </div>
    </>
)
}

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ["/H1.png", "/H2.png",'/H3.png','/H4.png'];

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
                    <span className='blue-head'>TCM Education </span>Assuring Success Every Time
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

        <HeadingSubheading heading={`Why TCM is India’s Fastest Growing Institute?`} sub={`Learn about TCM's exclusive features that make us the fastest-growing CAT coaching institute in India`}/>

            {/* <div className='but2'>
                <button className='Counsel '><Link to="/form-page">Counselling Call <img src="./images/Icon.svg" className='belll' alt='bell'/></Link></button>
                <button className='book_one'><Link to="/signup">Book Trial Class <img src="./images/Icon_1.svg" className='belll' alt='bell'/></Link></button>
            </div> */}

            <div className='home_two_img'>
                <img src="/Group2-mobile.png" alt='hero' class="desktop-img"/>
                <img src="/Group2.svg" alt='hero' class="mobile-img"/>
            </div>


        <HeadingSubheading heading={` Meet the TCM Avengers`} sub={`Discover our expert faculty, the TCM Avengers, who transform aspirants into achievers with their unparalleled guidance`}/>


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
                <Card src='./teachers/ajai.png' title='Ajai Singh' faculty='Lead Mentor and Director' viewmore='View More' id='ajai_sir'/>
                <Card src='./teachers/ashutosh.png' title='Ashutosh Sir' faculty='VARC Faculty' viewmore='View More' id='ashutosh_sir'/>
                <Card src='./teachers/manoj.png' title='Manoj Sir' faculty='LRDI Faculty' viewmore='View More' id='manoj_sir'/>
                <Card src='./teachers/santosh.png' title='Santosh Sir' faculty='GS Faculty' viewmore='View More' id='santosh_sir'/>
                <Card src='./teachers/sunny.png' title='Sunny Sir' faculty='Advanced Quant Faculty' viewmore='View More' id='sunny_sir'/>
                <Card src='./teachers/vaibhav.png' title='Vaibhav Sir' faculty='Law Faculty' viewmore='View More' id='vaibhav_sir'/>

                <Card src='./teachers/ajai.png' title='Ajai Singh' faculty='Lead Mentor and Director' viewmore='View More' id='ajai_sir'/>
                <Card src='./teachers/ashutosh.png' title='Ashutosh Sir' faculty='VARC Faculty' viewmore='View More' id='ashutosh_sir'/>
                <Card src='./teachers/manoj.png' title='Manoj Sir' faculty='LRDI Faculty' viewmore='View More' id='manoj_sir'/>
                <Card src='./teachers/santosh.png' title='Santosh Sir' faculty='GS Faculty' viewmore='View More' id='santosh_sir'/>
                <Card src='./teachers/sunny.png' title='Sunny Sir' faculty='Advanced Quant Faculty' viewmore='View More' id='sunny_sir'/>
                <Card src='./teachers/vaibhav.png' title='Vaibhav Sir' faculty='Law Faculty' viewmore='View More' id='vaibhav_sir'/>
             </Marquee>

        </div>

        <HeadingSubheading heading={`Scientific Approach of Teaching`} sub={'Experience our scientific teaching methods, designed for maximum efficiency and guaranteed to boost your  scores.'} />

            <div className='panchmukhi-img'>
                <Link to='/panchmukhi'>
                <picture>
                    <source media="(max-width: 768px)" srcSet="./images/Frame_two.png" />
                    <source media="(min-width: 769px)" srcSet="./images/Frame.png" />
                    <img src="./images/Frame.png" style={{width:'100%',height:'auto'}} alt='frame'/>
                </picture>
                </Link>

            </div>

            <HeadingSubheading heading={` From Aspirants to Achievers`} sub={`Experience our scientific teaching methods, designed for maximum efficiency and guaranteed to boost your  scores.`}/>


            {/* <div className='mobile-view'>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop autoPlay>
                <div className='carousel-slide'>
                <Card_two src='./images/student1.png' name='Ajai Singh'  ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student1'/>
                </div>
                <div className='carousel-slide'>
                <Card_two src='./images/student1.png' name='Ajai Singh'  ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student2'/>
                </div>
                <div className='carousel-slide'>
                <Card_two src='./images/student1.png' name='Ajai Singh'  ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student3'/>
                </div>
                <div className='carousel-slide'>
                <Card_two src='./images/student1.png' name='Ajai Singh'  ile='97.81%ile' review="TCM Special Clone Test Series and suggestions of Ajai Sir acted as a boon in my preparation. Looking back, I can't help but appreciate the support that TCM provided to me." id='student4'/>
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