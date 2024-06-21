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
import { Offline_centre } from '../Offline_centre/offline_centre';

export const cardsData = [
    {
        title:`TCM'S Online Holistic Batch - CAT 2025`,
        discription:`Live Online CAT 2024 Weekday Batch`,
        list:[
            'E-material',
            '500+ Hours Live Classes',
            '150+ Mock Series',
            '400+ Sectional and Topic Test Series',
            'Personalised Test Series',
            '24x7 Doubt Solving Support',
            'Regular Workshops from IIM Alumnis',
            'GDPI Training Sessions',
            'Personalized Career Counselling',
        ],
        price:'52,000',
        batchInfo:`New batch starts 10th April 2024 Class Timing 8:30PM to 10:30PM`,
        blue:true
    },
    {
        title:`TCM'S Online Holistic Batch - CAT 2025`,
        discription:`Live Online CAT 2024 Weekday Batch`,
        list:[
            'E-material',
            '500+ Hours Live Classes',
            '150+ Mock Series',
            '400+ Sectional and Topic Test Series',
            'Personalised Test Series',
            '24x7 Doubt Solving Support',
            'Regular Workshops from IIM Alumnis',
            'GDPI Training Sessions',
            'Personalized Career Counselling',
        ],
        price:'52,000',
        batchInfo:`New batch starts 10th April 2024 Class Timing 8:30PM to 10:30PM`
    },
    {
        title:`TCM'S Online Holistic Batch - CAT 2025`,
        discription:`Live Online CAT 2024 Weekday Batch`,
        list:[
            'E-material',
            '500+ Hours Live Classes',
            '150+ Mock Series',
            '400+ Sectional and Topic Test Series',
            'Personalised Test Series',
            '24x7 Doubt Solving Support',
            'Regular Workshops from IIM Alumnis',
            'GDPI Training Sessions',
            'Personalized Career Counselling',
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
clg:'sibmp.png'

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
clg:'iimkozhi.png'

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
clg:'iimv.png'

        },
        {
            name:'Muskan Golus',
            percent:'CAT 99.67%ile',
            review:`Hello! I am Muskan Golus, having converted IIM Trichy. I received calls from MDI Gurgaon, 12 IIMs and other top B-schools. This was only possible because I was a part of TCM Education. My immense gratitude to all the faculties for their guidance and showing me the proper direction which was vital. I would specially want to thank Ajai Sir, for his encouragement and constant
motivation which pushed me to the heights. Mathematics became fun for me and I won.`,
clg:'iimt.png'
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
clg:'jbims.png'

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
clg:'iims.png'

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
clg:'iimga.png'

        },
        {
            name:'Sharad Singh',
            percent:'CAT 99.67%ile',
            review:`I finally converted lIM Trichy! TCM
Education has been the aid to my problems during my CAT preparation. I would like to thank the mentors of TCM
Education for providing me proper
 guidance and mentorship to ace CAT exam. TCM’s special clone test series and suggestions of Ajai sir acted as a boon in my preparation. Looking back, I cannot help but only appreciated the support TCM provided me.`,
clg:'iimt.png'
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
clg:'iima.png'

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
clg:'iimb.png'
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
clg:'iimc.png'
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
clg:'iiml.png'
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
clg:'iima.png'
        }
    ]

return(
    <>
    <div style={{minWidth:'100%',margin:'0px',marginTop:'40px'}} className='card-2-container'>
            
           <Marquee >
                {
                    data.map((ele)=>(
                        <Card_two state={ele} src={`/images/students/${ele.name.split(' ')[0].toLocaleLowerCase()}.png`} name={ele.name}  ile={ele.percent.split(' ')[1]} review={ele.review} />
                    ))
                }
            </Marquee>

            {!isMobile &&<Marquee direction='right'>
                {
                    data.map((ele)=>(
                        <Card_two state={ele} src={`/images/students/${ele.name.split(' ')[0].toLocaleLowerCase()}.png`} name={ele.name}  ile={ele.percent.split(' ')[1]} review={ele.review} />
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
    const images = [1,3,4,5,6,7,8,9,10,11];
    const [learnMore,setLearnMore] = useState(window.innerHeight>768);

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
            <div className='sticky-note'>
                <svg width="30" height="31" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4032 13.0786C12.7029 12.3107 12.6382 9.01473 12.6369 8.93157V6.72038C12.6369 4.59222 11.3365 2.76223 9.4885 1.98304C9.48453 0.88889 8.59339 0 7.49843 0C6.40345 0 5.51234 0.888943 5.50834 1.98298C3.66044 2.76217 2.35997 4.59216 2.35997 6.72032V8.93152C2.35876 9.01468 2.29403 12.3106 0.593662 13.0785C0.399962 13.166 0.293505 13.3769 0.338289 13.5847C0.383021 13.7925 0.566786 13.9409 0.779362 13.9409H5.08996C5.17832 14.427 5.40818 14.8792 5.75974 15.2455C6.22667 15.732 6.84416 15.9999 7.49835 15.9999C8.1526 15.9999 8.77009 15.732 9.23697 15.2455C9.58858 14.8792 9.81844 14.427 9.90675 13.9409H14.2173C14.4299 13.9409 14.6137 13.7925 14.6584 13.5847C14.7033 13.3769 14.5969 13.166 14.4032 13.0786ZM12.1634 11.4996C12.3421 12.0415 12.5952 12.5857 12.9541 13.0386H2.04271C2.40156 12.5858 2.65466 12.0416 2.8334 11.4996H12.1634ZM7.49843 0.902354C7.99373 0.902354 8.4125 1.23517 8.54353 1.68881C8.20596 1.6188 7.85642 1.58188 7.49843 1.58188C7.14044 1.58188 6.7909 1.61877 6.45333 1.68881C6.58439 1.23519 7.00316 0.902354 7.49843 0.902354ZM3.26232 8.93429V6.7203C3.26232 4.38453 5.16261 2.48424 7.49843 2.48424C9.83425 2.48424 11.7345 4.38453 11.7345 6.7203V8.93798C11.7351 9.00585 11.7457 9.71913 11.9255 10.5972H3.07129C3.25116 9.71829 3.26177 9.00375 3.26232 8.93429ZM7.49843 15.0977C6.80978 15.0977 6.20876 14.6011 6.01584 13.9409H8.98097C8.78806 14.6011 8.18714 15.0977 7.49843 15.0977Z" fill="white"/>
                <path d="M7.49897 3.11726C5.55779 3.11726 3.97852 4.69648 3.97852 6.63763C3.97852 6.88681 4.18053 7.08882 4.42971 7.08882C4.67888 7.08882 4.8809 6.88681 4.8809 6.63763C4.8809 5.19405 6.05536 4.01961 7.49899 4.01961C7.74817 4.01961 7.95018 3.8176 7.95018 3.56842C7.95016 3.31922 7.74814 3.11726 7.49897 3.11726Z" fill="white"/>
                </svg>
                <span>
                <strong>Leaders Batch - CAT 2024</strong> starting from 25 June, 2024. <Link to="/upcomming-batch" style={{textDecoration:'underline',color:'#ffffff'}}>Browse all batches</Link>

                </span>
                </div>
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
                       <picture>
                            <source media="(max-width: 768px)" srcSet={`/images/hero/phone/h${src}.png`} />
                            <source media="(min-width: 769px)" srcSet={`/images/hero/desk/h${src}.png`} />
                            <img  key={index} src={`/images/hero/desk/h${src}.png`} style={{width:'90%',height:'auto'}} alt='frame' className={index === currentIndex ? 'fade-in' : 'fade-out'}/>
                        </picture>
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


            <div to="/directors" className='mentor-head'>
            <div className='mentor-cont' >
                <div className='black-head' style={{margin:'auto',marginTop:'0px',marginBottom:"0px",textAlign:'center'}}>
                    Who is the man behind<span className='blue-head'> India’s Fastet Growing </span>Ed-Tech Company?
                </div>
                <div className='mentor-detail' style={!learnMore?{'-webkit-line-clamp':'30'}:{}}>
                Hello everyone, Ajai Singh, Founder and Chief Mentor of Toil Chamber of Mathematics Pvt. Ltd. (TCM
                EDUCATION), India’s fasted growing institute for CAT, CLAT, IPMAT & CUET
                exams. Being a mentor and teacher to young minds is the most fulfilling identity I have ever known. It is
                an honor to guide and inspire the next generation, and nothing compares to the joy of watching students
                grow into their full potential. Teaching has always been my first love, right from my childhood. I hail
                from a business family, so joining it should have been an obvious choice. Then my knack for numbers
                and aptitude landed me into several corporate and Government jobs with minimum effort. In my last
                job, with Indian Railways, I realized that knowledge beseeches dissemination and the Goddess of
                wisdom smiles upon those who spread the light of it.
                For the past twenty years, I have had the honor of leading the vanguard and serving as an influence and
                inspiration to achieve stellar results year after year in CAT, CLAT, and IPMAT. The Chamber Of
                Mathematics started as a small venture with a big vision of transforming the phobia of maths into a mania. My students are the living testimonials of the difference I am making in the lives and careers of
                ignited minds. I have the esteemed privilege of creating employment opportunities for catalysts of change-our
                esteemed educators-in diverse realms of aptitude.
                </div>
                {learnMore && <div style={{fontSize:'9px',marginLeft:'auto',marginTop:'-30px',color:'#14A4F5',cursor:'pointer'}} onClick={()=>{setLearnMore(!learnMore)}}>Learn more</div>}
            </div>
            <Link className='mentor-img'   style={{width:'60%',height:'auto'}} to="/directors">
            <img style={{width:'100%',height:'auto'}} src="/images/mentor.png"  alt ="ajai sir"/>

            </Link>

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
                <Card src='./teachers/ajai.png' title='Ajai Singh' faculty='Founder & Chief Mentor' viewmore='View More' id='ajai_sir'/>
                <Card src='./teachers/ashutosh.png' title='Ashutosh Sir' faculty='VARC Faculty' viewmore='View More' id='ashutosh_sir'/>
                <Card src='./teachers/manoj.png' title='Manoj Sir' faculty='LRDI Faculty' viewmore='View More' id='manoj_sir'/>
                <Card src='./teachers/santosh.png' title='Santosh Sir' faculty='GS Faculty' viewmore='View More' id='santosh_sir'/>
                <Card src='./teachers/sunny.png' title='Sunny Sir' faculty='Advanced Quant Faculty' viewmore='View More' id='sunny_sir'/>
                <Card src='./teachers/vaibhav.png' title='Vaibhav Sir' faculty='Law Faculty' viewmore='View More' id='vaibhav_sir'/>

                <Card src='./teachers/ajai.png' title='Ajai Singh' faculty='Founder & Chief Mentor' viewmore='View More' id='ajai_sir'/>
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

            <Offline_centre zero={false} />


            <HeadingSubheading heading={` From Aspirants to Achievers`} sub={`Read testimonials from our successful students who have turned their dreams into reality with TCM`}/>


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