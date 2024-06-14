
import React, { useState } from 'react';
import './prayagraj.css';
import { Centre_card } from '../../components/card/centre_card';
import { Batch_card } from '../../components/card/centre_batch_card';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Centre } from '../../components/Centre_Location/Centre';
import { useParams } from 'react-router-dom';

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
        },
        varanasi:{
            city:'Varanasi',
            img:'prayagraj.svg',
            img_two:'centre_img_one.png',
            img_three:'centre_img_two.png',
            img_four:'centre_img_three.svg',
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
                />
            </div>

            <div className='center_card'>
                <Centre_card 
                image={city_data.img_two}
                title='Limited Batch Size of 25'
                description={'Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance.'}
                />

                <Centre_card 
                image= {city_data.img_three}
                title='Sessions by Chief Mentor'
                description={'Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance.'}
                />

                <Centre_card 
                image= {city_data.img_four}
                title='Community of Like-Minded'
                description={'Our expert faculties bring industry experience and academic expertise, ensuring our students quality education and guidance.'}
                />

            </div>
            <div className='core_team'>
                <div className='core_team_heading'>
                    <div className='team_quote'>
                        The Core Team at {city_data.city} Centre
                    </div>

                    <div className='team_content'>
                    We're India's leading coaching institute, empowering students to conquer CAT, IPMAT, CLAT & CUET with our expert faculty, personalized approach, and proven strategies. We'll equip you with the knowledge and confidence to ace your exams and gain admission to the top colleges in India.
                    </div>                
                </div>
                <img src='/images/faculty_image.png' className='faculties' alt='faculties'/>
            </div>

            <div className='centre_class'>
                <div className='centre_quote'>
                    An Extraordinary Learning Experience
                </div>
                <img src={window.innerWidth>760?'/images/local-center.png':'/images/local-center-p.png'} style={{width:'90%',left:'5%'}} alt='frame'/>
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