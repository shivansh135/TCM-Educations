
import React, { useState } from 'react';
import './prayagraj.css';
import { Centre_card } from '../../components/card/centre_card';
import { Batch_card } from '../../components/card/centre_batch_card';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Centre } from '../../components/Centre_Location/Centre';
import { useParams } from 'react-router-dom';
import { HeadingSubheading } from '../../components/headings/headings';

export default function Prayagraj() {
    const [selectedOption, setSelectedOption] = useState('CAT');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const {id}=useParams();
    const City={
        prayagraj:{
            city:'Prayagraj',
            img:'prayagraj.svg',
            img_two:'centre_img_one.png',
            img_three:'centre_img_two.png',
            img_four:'centre_img_three.svg',
            link:'https://maps.app.goo.gl/XKZTNipQU3daFp4F7?g_st=ic',
            phone:'+91 9336339618',
            grid:'/images/grid-prayagrag'
        },
        varanasi:{
            city:'Varanasi',
            img:'varanasi-back.svg',
            img_two:'centre_img_one.png',
            img_three:'centre_img_two.png',
            img_four:'centre_img_three.svg',
            link:'https://maps.app.goo.gl/Ahn98xWTC7UdcKf17?g_st=ic',
            phone:'+91 7307224500',
             grid:'/images/grid-varanasi'

        }
    }

    const getcityebyname=(name)=>{
        return City[name] || null;        }
    const city_name=id;
    const city_data=getcityebyname(city_name);
    console.log(city_data.city,city_name);
    return (
        <div>
            <div className='location_image'>
                <Centre
                Location= {city_data.city}
                img={city_data.img}
                link={city_data.link}
                phone={city_data.phone}
                />
            </div>

            <div className='center_card'>
                <Centre_card 
                image={city_data.img_two}
                title='Limited Batch Size of 25'
                description={'Experience personalized attention and tailored guidance with our limited batch size of just 25 students, ensuring you receive the focus you need to excel.'}
                />

                <Centre_card 
                image= {city_data.img_three}
                title='Sessions by Chief Mentor'
                description={'Benefit from exclusive sessions led by our esteemed Chief Mentor, whose expertise and insights will elevate your exam preparation to new heights.'}
                />

                <Centre_card 
                image= {city_data.img_four}
                title='Community of Like-Minded'
                description={'Join a vibrant community of like-minded peers, fostering collaboration, motivation, and a shared drive towards achieving success together.'}
                />

            </div>
            <div className='core_team'>
                <div className='core_team_heading'>
                    <div className='team_quote'>
                        The Core Team at {city_data.city} Centre
                    </div>

                    <div className='team_content'>
                    Meet the dedicated experts at our {city_data.city} Centre, committed to guiding you towards  success with personalized mentorship and top-notch instruction
                    </div>                
                </div>
                <img src='/images/faculty.png' className='faculties' alt='faculties'/>
            </div>

            <HeadingSubheading heading={'An Extraordinary Learning Experience'} sub="Immerse yourself in TCM's vibrant Prayagraj center, where innovative teaching, state-of-the-art facilities, and a collaborative environment create an extraordinary learning experience"/>

            <div className='centre_class'>
                <img src={window.innerWidth>760?city_data.grid+'.png':city_data.grid+'-p.png'} style={{width:'90%',left:'5%'}} alt='frame'/>
            </div>


            <div className='course_batch'>
            <div className='course-head'>
                <div className='course-head-title'>
                    Upcoming Batches at {city_data.city} Centre
                </div>
                <div className='course-head-option'>
                    <div className='option' onClick={() => handleOptionClick('CAT')} style={{backgroundColor: selectedOption === 'CAT' ? '#14A4F5' : '' ,color: selectedOption === 'CAT' ? 'white' : ''}}>CAT</div>
                    <div className='option' onClick={() => handleOptionClick('IPMAT')}  style={{backgroundColor: selectedOption === 'IPMAT' ? '#14A4F5' : '' ,color: selectedOption === 'IPMAT' ? 'white' : ''}}>IPMAT</div>
                    <div className='option' onClick={() => handleOptionClick('CLAT')} style={{backgroundColor: selectedOption === 'CLAT' ? '#14A4F5' : '' ,color: selectedOption === 'CLAT' ? 'white' : ''}}>CLAT</div>
                    <div className='option' onClick={() => handleOptionClick('CUET')} style={{backgroundColor: selectedOption === 'CUET' ? '#14A4F5' : '',color: selectedOption === 'CUET' ? 'white' : ''}}>CUET</div>
                </div>
            </div>
            <div className='Batch-Card'>
                {selectedOption === 'CAT' && (
                    <>
                        <Batch_card 
                            course='CAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                        <Batch_card 
                            course='CAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                        <Batch_card 
                            course='CAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                    </>
                )}

                {selectedOption === 'IPMAT' && (
                    <>
                        <Batch_card 
                            course='IPMAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                        <Batch_card 
                            course='IPMAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                        <Batch_card 
                            course='IPMAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                    </>
                )}      

                {selectedOption === 'CLAT' && (
                    <>
                        <Batch_card 
                            course='CLAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                        <Batch_card 
                            course='CLAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                        <Batch_card 
                            course='CLAT 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                    </>
                )}

                {selectedOption === 'CUET' && (
                    <>
                        <Batch_card 
                            course='CUET 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                        <Batch_card 
                            course='CUET 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                        <Batch_card 
                            course='CUET 2024'
                            date='Starting Aug,23'
                            detail={'Forem ipsum dolor sit amet, consectetur adipiscing'}
                        />
                    </>
                )}  
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