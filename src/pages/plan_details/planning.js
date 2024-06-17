import React from 'react';
import './planning.css';
import { Batch_card } from '../../components/card/centre_batch_card';
import { Comparison_card_one } from '../../components/card/comparison_card_one';
import { Comparison_card_two } from '../../components/card/comparison_card_two';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Planning() {
    const {id}=useParams();
    const course={
        Cat:{
            name:'CAT',
        },
        ipmat:{
            name:'IPMAT',
        },
        clat:{
            name:'CLAT',
        },
        cuet:{
            name:'CUET',
        }
    }

    const getcoursebyname=(name)=>{
        return course[name] || null;        }
    const course_name=id;
    const courses_data=getcoursebyname(course_name);

    return (
        <div>
            <div className='head_three'>
                <div className='heading_three'>
                    <div className='blue'>{courses_data.name} 2024</div><div className='BLACKs'>HOLISTIC MBA ENTRANCE BATCH</div>
                </div>
                <div className='subheading'>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia .
                </div>
            </div>
            
            <div className='group-content'>
                <div className='group-photo'>
                    <img src = '/images/group_img.png' className='imgg' alt='group_photo' />
                    <div className='group-photo-subheadng'>
                        <div className='black'>Record Breaking Results by  TCM in <span className='blue'>{courses_data.name} 2023</span></div>
                    </div>
                </div>
                <div className='important-points'>
                    <div className='pointss'>
                        <ul>
                            <li className='bullet'> 120+ Interactive Classes </li>
                            <li className='bullet'> 120+ Interactive Classes </li>
                            <li className='bullet'> 120+ Interactive Classes </li>
                            <li className='bullet'> 120+ Interactive Classes </li>
                            <li className='bullet'> 120+ Interactive Classes </li>
                            <li className='bullet'> 100+ Pre recorded classes on QUANT, VARC & DILR </li>
                            <li className='bullet'> Revision classes + GDPI Preparation </li>
                        </ul>
                    </div>
                    <div className='buttonns'>
                        <button className='live-class'><Link to="/signup">Book Live Trial Class</Link></button>
                        <button className='buy-now'><Link to="/checkout">Buy Now</Link></button>
                    </div>
                </div>
            </div>

            <div className='roadmaps'>
                <div className='roadmaps-head'>
                    <div className='roadmaps-heading'>
                        <div className='BLACK'>The Plan for Acing</div>
                        <span className='BLUEs'>{courses_data.name} 2024 </span></div>
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
                            srcset="/images/Slide-p.svg"/>
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

            <div className='discount'>
            <picture>
                        <source 
                            media="(max-width: 760px)"
                            srcset="/images/discount-p.png"/>
                        <source 
                            media="(min-width: 761px)"
                            srcset="/images/discount.png"/>
                        <img src="/images/discount.png" 
                        className='discount-img' style={{width:'100%'}}
                        alt="def"/>
                    </picture>
            </div>

            <div className='course_batch'>
                <div className='course-head'>
                    <div className='course-head-title'>
                        Upcoming Batches 
                    </div>
                    <div className='course-head-option'>
                        <div className='option'>CAT</div>
                        <div className='option'>IPMAT</div>
                        <div className='option'>CLAT</div>
                        <div className='option'>CUET</div>
                    </div>
                </div>
                <div className='Batch-Card'>
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
                </div>
            </div>

            <div className='comparison-plans'>
                <div className='comparison-head'>
                    Comparison of Plans
                </div>
                <div className='comparison-content'>
                    <Comparison_card_one />
                    <Comparison_card_two />
                    <Comparison_card_two />
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