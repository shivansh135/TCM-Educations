
import React, { useState } from 'react';
import './cat.css';
import { Feedback_card } from '../../components/card/feedback_card.js';
import { Card_four } from '../../components/card/card4.js';
import { Card_three } from '../../components/card/card3.js';
import FAQQuestion from '../../components/FaQ/FAQQuestion.js';
import { useParams } from 'react-router-dom';
import { Row } from '../../components/row/row.js';

export default function Cat() {
    const [selectedOption, setSelectedOption] = useState('CAT');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const {id}=useParams();
    const course={
        Cat:{
            name:'CAT',
            subheading:'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia',
            description:"The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams",
            criteria_1: "Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            criteria_2:"Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            criteria_3:"Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            subject_1:'Verbal Ability & Reading Comprehension (VARC)',
            subject_2:'Data Interpretation & Logical Reasoning (DILR)',
            subject_3:'Quantitative Aptitude (QA)',
            subject_1_brief:'Reading Comprehension, Para Jumbles, Para Summary and Odd Sentence Out',
            subject_2_brief:'Set Theory (Variables), Set Theory + Puzzles, Puzzles with Additional Data, Coding-Decoding and Series',
            subject_3_brief:'Number System, Algebra, Arithmetic, Geometry and Mensuration',
            subject_1_Total_Questions:'100',
            subject_2_Total_Questions:'100',
            subject_3_Total_Questions:'100',
            subject_1_Time:'100',
            subject_2_Time:'100',
            subject_3_Time:'100',
            subject_1_Marks:'100',
            subject_2_Marks:'100',
            subject_3_Marks:'100',
            Total_Questions:'300',
            Total_Time:'300',
            Total_Marks:'300',
            subject_1_old_Total_Questions:'100',
            subject_2_old_Total_Questions:'100',
            subject_3_old_Total_Questions:'100',
            subject_1_old_Time:'100',
            subject_2_old_Time:'100',
            subject_3_old_Time:'100',
            subject_1_old_Marks:'100',
            subject_2_old_Marks:'100',
            subject_3_old_Marks:'100',
            old_Total_Questions:'300',
            old_Time:'300',
            old_Marks:'300',
        },
        clat:{
            name:'CLAT',
            subheading:'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia',
            description:"The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams",
            criteria_1: "Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            criteria_2:"Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            criteria_3:"Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            subject_1:'Verbal Ability & Reading Comprehension (VARC)',
            subject_2:'Data Interpretation & Logical Reasoning (DILR)',
            subject_3:'Quantitative Aptitude (QA)',
            subject_1_brief:'Reading Comprehension, Para Jumbles, Para Summary and Odd Sentence Out',
            subject_2_brief:'Set Theory (Variables), Set Theory + Puzzles, Puzzles with Additional Data, Coding-Decoding and Series',
            subject_3_brief:'Number System, Algebra, Arithmetic, Geometry and Mensuration',
            subject_1_Total_Questions:'100',
            subject_2_Total_Questions:'100',
            subject_3_Total_Questions:'100',
            subject_1_Time:'100',
            subject_2_Time:'100',
            subject_3_Time:'100',
            subject_1_Marks:'100',
            subject_2_Marks:'100',
            subject_3_Marks:'100',
            Total_Questions:'300',
            Total_Time:'300',
            Total_Marks:'300',
            subject_1_old_Total_Questions:'100',
            subject_2_old_Total_Questions:'100',
            subject_3_old_Total_Questions:'100',
            subject_1_old_Time:'100',
            subject_2_old_Time:'100',
            subject_3_old_Time:'100',
            subject_1_old_Marks:'100',
            subject_2_old_Marks:'100',
            subject_3_old_Marks:'100',
            old_Total_Questions:'300',
            old_Time:'300',
            old_Marks:'300',
        },
        cuet:{
            name:'CUET',
            subheading:'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia',
            description:"The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams",
            criteria_1: "Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            criteria_2:"Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            criteria_3:"Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            subject_1:'Verbal Ability & Reading Comprehension (VARC)',
            subject_2:'Data Interpretation & Logical Reasoning (DILR)',
            subject_3:'Quantitative Aptitude (QA)',
            subject_1_brief:'Reading Comprehension, Para Jumbles, Para Summary and Odd Sentence Out',
            subject_2_brief:'Set Theory (Variables), Set Theory + Puzzles, Puzzles with Additional Data, Coding-Decoding and Series',
            subject_3_brief:'Number System, Algebra, Arithmetic, Geometry and Mensuration',
            subject_1_Total_Questions:'100',
            subject_2_Total_Questions:'100',
            subject_3_Total_Questions:'100',
            subject_1_Time:'100',
            subject_2_Time:'100',
            subject_3_Time:'100',
            subject_1_Marks:'100',
            subject_2_Marks:'100',
            subject_3_Marks:'100',
            Total_Questions:'300',
            Total_Time:'300',
            Total_Marks:'300',
            subject_1_old_Total_Questions:'100',
            subject_2_old_Total_Questions:'100',
            subject_3_old_Total_Questions:'100',
            subject_1_old_Time:'100',
            subject_2_old_Time:'100',
            subject_3_old_Time:'100',
            subject_1_old_Marks:'100',
            subject_2_old_Marks:'100',
            subject_3_old_Marks:'100',
            old_Total_Questions:'300',
            old_Time:'300',
            old_Marks:'300',
        },
        ipmat:{
            name:'IPMAT',
            subheading:'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia',
            description:"The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams",
            criteria_1: "Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            criteria_2:"Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            criteria_3:"Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
            subject_1:'Verbal Ability & Reading Comprehension (VARC)',
            subject_2:'Data Interpretation & Logical Reasoning (DILR)',
            subject_3:'Quantitative Aptitude (QA)',
            subject_1_brief:'Reading Comprehension, Para Jumbles, Para Summary and Odd Sentence Out',
            subject_2_brief:'Set Theory (Variables), Set Theory + Puzzles, Puzzles with Additional Data, Coding-Decoding and Series',
            subject_3_brief:'Number System, Algebra, Arithmetic, Geometry and Mensuration',
            subject_1_Total_Questions:'100',
            subject_2_Total_Questions:'100',
            subject_3_Total_Questions:'100',
            subject_1_Time:'100',
            subject_2_Time:'100',
            subject_3_Time:'100',
            subject_1_Marks:'100',
            subject_2_Marks:'100',
            subject_3_Marks:'100',
            Total_Questions:'300',
            Total_Time:'300',
            Total_Marks:'300',
            subject_1_old_Total_Questions:'100',
            subject_2_old_Total_Questions:'100',
            subject_3_old_Total_Questions:'100',
            subject_1_old_Time:'100',
            subject_2_old_Time:'100',
            subject_3_old_Time:'100',
            subject_1_old_Marks:'100',
            subject_2_old_Marks:'100',
            subject_3_old_Marks:'100',
            old_Total_Questions:'300',
            old_Time:'300',
            old_Marks:'300',
        }
    }

    const getcoursebyname=(name)=>{
        return course[name] || null;        }
    const course_name=id;
    const courses_data=getcoursebyname(course_name);
    console.log(courses_data.name,course_name);
    return (
        <div>
            <div className='CAT_head'>
                <div className='CAT_heading'>
                    Why <span className='blueee'>{courses_data.name}</span> is one of the toughest exams to crack?
                </div>
                <div className='CAT_subheading'>
                    {courses_data.subheading}
                </div>
            </div>

            <div className='CATs_video'>
                <div className='CATs_video_button'>
                    <img src='/images/play_arrow.png'  alt='play' />
                </div>
            </div>

            <div className='What_is_CAT'>
                <div className='CAT_content'>
                    <div className='CAT_content_heading'>
                        What is {courses_data.name}?
                    </div>
                    <div className='CAT_content_detail'>
                        {courses_data.description}
                    </div>
                </div>

                <img src='/images/asking-question.png' className='CAT_img' alt='CAT' />
            </div>

            <div className='CAT_eligibility'>

                <img src='/images/filling-survey.png' className='CAT_imgg' alt='CAT' />

                <div className='eligibility_content'>
                    <div className='eligibility_content_heading'>
                        <div className='eligibility_content_heading_block'>
                            {courses_data.name} Eligibility Criteria 2023
                        </div>
                        <div className='eligibility_content_heading_detail'>
                            The minimum eligibility criteria to appear in {courses_data.name} exam is graduation in any stream. Read below detailed CAT eligibility criteria:
                        </div>
                    </div>
                    <div className='eligibility_content_detail'>
                        <ol className='point'>
                            <li className='points'>{courses_data.criteria_1}</li>
                            <li className='points'>{courses_data.criteria_2}</li>
                            <li className='points'> {courses_data.criteria_3}</li>
                        
                        </ol>

                    </div>
                </div>
            </div>

            <div className='CAT_syllabus'>
                <div className='CAT_syllabus_heading'>
                    <div className='CAT_syllabus_head'>
                        {courses_data.name} Syllabus 2024
                    </div>
                    <div className='CAT_syllabus_subheading'>
                        The syllabus of {courses_data.name} exam has remained the same for more than ten years. Check below the main topics of {courses_data.name} syllabus 2023 for exam preparation. Maximum questions are asked from these topics: {courses_data.name} Syllabus sections {courses_data.name} Syllabus topics
                    </div>
                </div>

                <div className='syllabus'>
                    <div className='CAT_syllabus_first'>
                        <div className='CAT_syllabus_first_one'>
                            {courses_data.subject_1}
                        </div>
                        <div className='CAT_syllabus_first_two'>
                            {courses_data.subject_2}
                        </div>
                        <div className='CAT_syllabus_first_three'>
                            {courses_data.subject_3}
                        </div>
                    </div>

                    <div className='CAT_syllabus_second'>
                        <div className='CAT_syllabus_second_one'>
                            {courses_data.subject_1_brief}
                        </div>
                        <div className='CAT_syllabus_second_two'>
                            {courses_data.subject_2_brief}
                        </div>
                        <div className='CAT_syllabus_second_three'>
                            {courses_data.subject_3_brief}
                        </div>
                    </div>
                </div>
            </div>

            <div className='CAT_PATTERN'>
                <div className='CAT_PATTERN_one'>
                    <div className='CAT_PATTERN_head'>
                        {courses_data.name} Exam Pattern 2023
                    </div>
                    <div className='CAT_PATTERN_detail'>
                    <Row
                    subject="Subjects"
                    Total_Questions="Total Questions"
                    Time="Time"
                    Marks="Marks"
                    />
                    <Row
                    subject={courses_data.subject_1}
                    Total_Questions={courses_data.subject_1_Total_Questions}
                    Time={courses_data.subject_1_Time}
                    Marks={courses_data.subject_1_Marks}
                    />
                    <Row
                    subject={courses_data.subject_2}
                    Total_Questions={courses_data.subject_2_Total_Questions}
                    Time={courses_data.subject_2_Time}
                    Marks={courses_data.subject_2_Marks}
                    />
                    <Row
                    subject={courses_data.subject_3}
                    Total_Questions={courses_data.subject_3_Total_Questions}
                    Time={courses_data.subject_3_Time}
                    Marks={courses_data.subject_3_Marks}
                    />
                    <Row
                    subject="Total"
                    Total_Questions={courses_data.Total_Questions}
                    Time={courses_data.Total_Time}
                    Marks={courses_data.Total_Marks}
                    />

                    </div>
                </div>
                <div className='CAT_PATTERN_one'>
                    <div className='CAT_PATTERN_head'>
                        {courses_data.name} Exam Pattern 2020
                    </div>
                    <div className='CAT_PATTERN_detail'>
                    <Row
                    subject="Subjects"
                    Total_Questions="Total Questions"
                    Time="Time"
                    Marks="Marks"
                    />
                    <Row
                    subject={courses_data.subject_1}
                    Total_Questions={courses_data.subject_1_old_Total_Questions}
                    Time={courses_data.subject_1_old_Time}
                    Marks={courses_data.subject_1_old_Marks}
                    /> 
                    <Row
                    subject={courses_data.subject_2}
                    Total_Questions={courses_data.subject_2_old_Total_Questions}
                    Time={courses_data.subject_2_old_Time}
                    Marks={courses_data.subject_2_old_Marks}
                    />
                    <Row
                    subject={courses_data.subject_3}
                    Total_Questions={courses_data.subject_3_old_Total_Questions}
                    Time={courses_data.subject_3_old_Time}
                    Marks={courses_data.subject_3_old_Marks}
                    />
                    <Row
                    subject="Total"
                    Total_Questions={courses_data.old_Total_Questions}
                    Time={courses_data.old_Time}
                    Marks={courses_data.old_Marks}
                    />
                    </div>
                </div>
            </div>

            <div className='CAT_Feedback'>
                Positive Feedback from Student
            </div>

            <div className='Feedback_cards'>
                <Feedback_card 
                    rank="IIM Trichi 97.21%"
                    name="Pyush Jain"
                    city="Mumbai"
                    feedback="Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sems olli citudin lacu"
                />
                <Feedback_card 
                    rank="IIM Trichi 97.21%"
                    name="Pyush Jain"
                    city="Mumbai"
                    feedback="Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sems olli citudin lacu"
                />
                <Feedback_card 
                    rank="IIM Trichi 97.21%"
                    name="Pyush Jain"
                    city="Mumbai"
                    feedback="Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sems olli citudin lacu"
                />
            </div>

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
                    <div className='course-body'>
                        {selectedOption === 'CAT' && (
                        <>
                            <Card_four
                                course_name='CAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                            <Card_three
                                course_name='CAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                            <Card_four
                                course_name='CAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                        </>
                        )}

                        {selectedOption === 'IPMAT' && (
                        <>
                            <Card_four
                                course_name='IPMAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                            <Card_three
                                course_name='IPMAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                            <Card_four
                                course_name='IPMAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />

                        </>
                        )}

                        {selectedOption === 'CLAT' && (
                        <>
                            <Card_four
                                course_name='CLAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                            <Card_three
                                course_name='CLAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                            <Card_four
                                course_name='CLAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />

                        </>
                        )}

                        {selectedOption === 'CUET' && (
                        <>
                            <Card_four
                                course_name='CUET'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                            <Card_three
                                course_name='CUET'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />
                            <Card_four
                                course_name='CUET'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                            />

                        </>
                        )}
                    </div>

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