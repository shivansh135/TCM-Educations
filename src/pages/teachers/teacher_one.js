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
            desig:'Chief Mentor & Director',
            description:'Ajai Singh, our Chief Mentor and Director, brings over a decade of experience in teaching advanced quantitative techniques. Renowned for his innovative teaching methods, Ajai Sir makes complex concepts easy to understand, ensuring his students consistently achieve top scores. His personalized mentorship focuses on individual strengths and weaknesses, helping students reach their full potential. With a proven track record of producing CAT toppers, Ajai Sir is dedicated to transforming aspirants into achievers.',
            f_name:'Ajai',
            img:'/teachers/ajai.png',
            cards:{
                'King of Quants':'Ajai Sir brings over two decades of experience in teaching advanced quantitative techniques, making complex concepts easy to understand.',
                ' 1-O-1 Mentorship':"Ajai Sir, Lead Mentor of TCM Education provides personalized mentorship, guiding each student based on their individual strengths and weaknesses.",
                'Proven Track Record':'Has consistently produced top scorers in the CAT exam in last 20 years, with numerous students achieving 99+ percentiles under his mentorship.'
            },
            special:{
                "⁕ Passionate Educator":`Ajai Singh's passion for teaching is evident in his energetic and enthusiastic classes, inspiring students to achieve their best.`,
                "⁕ Commitment to Excellence:":`His commitment to excellence ensures that students receive the highest quality education and preparation for the CAT exam.`,
                "⁕ Holistic Approach":`He employs a holistic approach to teaching, focusing on both the academic and psychological aspects of exam preparation.`
            }
        },
        sunny_sir:{
            name:'Sunny Sir',
            desig:'Advanced Quant Faculty',
            description:'Sunny Sir, our Advanced Quants Faculty, is a master of simplifying the most challenging quantitative topics. His strategic problem-solving techniques and focused practice sessions equip students with the skills to tackle the quant section efficiently. With a student-centered approach and innovative teaching methods, Sunny Sir helps students boost their scores significantly. Known for his encouraging mentorship, he instills confidence and excellence in his students.',
            f_name:'Sunny',
            img:'/teachers/sunny.png',
            cards:{
                "Deep Knowledge in Quants":`Specializes in advanced quant topics, ensuring students grasp even the most challenging concepts.`,
                "Strategic Problem Solving:":`Teaches strategic problem-solving techniques that save time and increase accuracy during the exam.`,
                "Focused Practice Sessions:":`Conducts focused practice sessions that drill down into specific areas, helping students master every topic`,
            },
            special:{
                "⁕ Student-Centered Approach:":`Sunny Sir tailors his teaching methods to suit the unique needs of each student, ensuring optimal learning.`,
                "⁕ Innovative Techniques":`He employs innovative techniques to simplify complex quant problems, making them easier to understand and solve.`,
                "⁕ Encouraging Mentor":`As a mentor, he constantly motivates and encourages students, helping them build confidence and excel in exams.`
            }
        },
        vaibhav_sir:{
            name:'Vaibhav Sir',
            desig:'Law Faculty',
            description:`Vaibhav Sir, our Law Faculty, specializes in making complex legal concepts accessible and understandable for all students. His exam-oriented teaching and practical approach, using real-life case studies, prepare students thoroughly for any legal questions. Known for his comprehensive knowledge and engaging teaching style, Vaibhav Sir's students consistently achieve top marks in the legal sections of competitive exams. His practical insights and active engagement foster a deeper understanding of legal principles.`,
            f_name:'Vaibhav',
            img:'/teachers/vaibhav.png',
            cards:{
                "Expert in Legal Concepts":`Vaibhav Sir specializes in simplifying complex legal concepts, making them accessible for all students.`,
                "Exam-Oriented Teaching":`Focuses on what’s important for exams, ensuring students are well-prepared for any legal questions.`,
                "Practical Approach":`Uses practical examples and case studies to illustrate legal principles.`,
            },
            special:{
                "⁕ Practical Insights":`Vaibhav Sir's practical insights into legal principles make learning both interesting and applicable.`,
                "⁕ Student Engagement":`He actively engages students in discussions, fostering a deeper understanding of legal concepts.`,
                "⁕ Comprehensive Knowledge":`His comprehensive knowledge of law ensures students are well-prepared for all aspects of the exam.`
            }
        },
        manoj_sir:{
            name:'Manoj Sir',
            desig:'LRDI Faculty',
            description:`Manoj Sir, the Advanced LRDI Faculty, excels in teaching logical reasoning and data interpretation with a unique, dynamic style. His ability to break down complex problems into manageable steps, combined with real-world applications, makes learning engaging and effective. Manoj Sir's customized learning plans and exam-focused strategies ensure students excel in the LRDI section. `,
            f_name:'Manoj',
            img:'/teachers/manoj.png',
            cards:{
                "LRDI Expert":`Manoj Sir excels in teaching logical reasoning and data interpretation, breaking down complex problems into manageable steps.`,
                "Real-World Applications":`Manoj Sir uses real-world examples to explain LRDI concepts, making them easier to understand and apply.`,
                "Exam-Focused Approach":`Manoj Sir focuses on exam-specific strategies to ensure students can tackle the LRDI section with confidence.`,
            },
            special:{
                "⁕ Clarity in Concepts:":`Manoj Sir's ability to explain complex LRDI concepts with clarity makes him a favorite among students.`,
                "⁕ Customized Learning":`He provides customized learning plans that address each student's weaknesses and strengths in LRDI.`,
                "⁕ Proven Success":`His students consistently outperform in the LRDI section, thanks to his effective teaching methods.`
            }
        },
        ashutosh_sir:{
            name:'Ashutosh Sir',
            desig:'VARC Faculty',
            description:`Ashutosh Sir, the VARC Faculty, is an expert in Verbal Ability and Reading Comprehension, dedicated to helping students excel in these areas. His interactive teaching methods and focused practice sessions significantly improve students' reading and comprehension skills. With a passion for teaching and personal attention to each student, Ashutosh Sir creates an engaging and effective learning environment. His commitment to student success is reflected in the substantial improvements in their VARC scores.`,
            f_name:'Ashutosh',
            img:'/teachers/ashutosh.png',
            cards:{
                "VARC Specialist":`Ashutosh Sir is an expert in Verbal Ability and Reading Comprehension, helping students excel in these areas.`,
                "Engaging Teaching Style":`Uses a variety of teaching methods to keep classes engaging and effective. Keeps the class lifted up even when taking up boring RCs.`,
                "Focused Practice with RCs":`Provides focused practice on critical reading and comprehension skills along with tips and tricks of eliminating options in comprehension.`,
            },
            special:{
                "⁕ Interactive Classes:":`Ashutosh Sir's interactive classes keep students engaged and make learning enjoyable.`,
                "⁕ Provides 1-O-1 Attention":`He provides personal attention to each student, helping them overcome specific challenges in VARC.`,
                "⁕ Extraordinary Passion for Teaching":`His passion for teaching and commitment to student success are evident in every class he conducts.`
            }
            
        },
        santosh_sir:{
            name:'Santosh Sir',
            desig:'General Awareness Faculty',
            description:'Santosh Sir, the General Awareness Faculty, is an expert in current affairs and general knowledge, crucial for competitive exams. His interactive teaching methods and regular updates on current affairs keep students well-informed and prepared. With a wide coverage of topics and practical insights, Santosh Sir fosters critical thinking and a deeper understanding of general knowledge. His engaging personality and extensive knowledge make learning current affairs both interesting and enjoyable.',
            f_name:'Santosh',
            img:'/teachers/santosh.png',
            cards:{
                "Regular Updates":`Provides regular updates on current affairs, ensuring students are always prepared.`,
                "Interactive Teaching":`His interactive teaching methods keep students engaged and help them retain information better.`,
                "In-Depth Knowledge":`Santosh Sir has extensive knowledge of current affairs and general knowledge, crucial for competitive exams.`,
            },
            special:{
                "⁕ Extensive Coverage:":`Santosh Sir covers a wide range of topics in general awareness, ensuring students are well-prepared for any question.`,
                "⁕ Critical Thinking":`He encourages critical thinking and discussion, helping students develop a deeper understanding of current events.`,
                "⁕ Engaging Personality":`His engaging personality makes learning current affairs interesting and enjoyable.`
            }
        },
        maulik_sir:{
            name:'Maulik Sir',
            desig:'VARC Fcaulty',
            description:'Maulik Sir, our Vocab Faculty, is a passionate educator who transforms vocabulary learning into an enjoyable experience. With his deep knowledge of vocabulary and innovative techniques like mnemonics and word games, Maulik Sir makes learning fun and effective. He emphasizes contextual learning, ensuring students remember and understand words better. Known for his patience and dedication, Maulik Sir consistently helps students achieve high scores in the verbal section.',
            f_name:'Maulik',
            img:'/teachers/maulik.png',
            cards:{
                "Vocabulary Mastery":`Maulik Sir has a deep knowledge of vocabulary, helping students expand their word bank effectively.`,
                "Engaging Techniques":`Uses engaging techniques like word games and mnemonics to make vocabulary learning fun and effective.`,
                "Contextual Learning":`Emphasizes learning vocabulary in context, ensuring students understand and remember words better.`,
            },
            special:{
                "⁕ Passion for Words":`Maulik Sir's passion for vocabulary is contagious, inspiring students to love words and language.`,
                "⁕ Innovative Methods":`He introduces innovative methods to learn and remember vocabulary, making the process enjoyable.`,
                "⁕ Patient Educator":`Known for his patience, Maulik Sir ensures that every student grasps the nuances of vocabulary.`
            }
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
                <div className="teacher">
                    <img src={`${teachers_data.img}`} style={{width:'100%',height:'auto'}} alt="teacher"></img>
                </div>
            </div>

            <div className="teacher_cards">
            {Object.keys(teachers_data.cards).map((key) => (
                <Teacher_card key={key} feature={key} detail={teachers_data.cards[key]} /> 
            ))}
            </div>

            <div className="teacher_wheel">
                <div className="head_five">
                    What does Student say about {teachers_data.name}?
                </div>

                <picture>
                        <source 
                            media="(max-width: 760px)"
                            srcset={`/teachers/wheel/${teachers_data.f_name}-wheel-p.png` }/>
                        <source 
                            media="(min-width: 761px)"
                            srcset={`/teachers/wheel/${teachers_data.f_name}-wheel.png` }/>
                        <img src={`/teachers/wheel/${teachers_data.f_name}-wheel-p.png` }
                        className='wheel'
                        alt="def" / >
                    </picture>
            </div>

            <div className="special">
                <div className="special_left">
                    <div className="special_head">
                        What makes {teachers_data.name} so special?
                    </div>
                    <img src="/images/teacher_ill.svg" alt='ill'/>
                </div>
                <div className="special_right">

                    {Object.keys(teachers_data.special).map((key)=>(
                        <div className="special_block">
                            <div className="special_block_head">
                               {key} 
                            </div>
                            <div className="special_detail">
                            {teachers_data.special[key]}
                            </div>
                        </div>
                    ))}
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