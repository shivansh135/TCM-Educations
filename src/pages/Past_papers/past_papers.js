import React ,{useState} from "react";
import './past_papers.css';
import { Card_four } from '../../components/card/card4';
import { Card_three } from '../../components/card/card3';
import FAQQuestion from '../../components/FaQ/FAQQuestion';
import { Past_papers_card } from "../../components/card/past_paper_card";

export function Past_papers() {
    const [selectedOption, setSelectedOption] = useState('CAT');
 
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const [selectOption, setSelectOption] = useState('CAT');

    const handlingOptionClick = (option) => {
        setSelectOption(option);
    };
    return (
        <div>
<div className='past_papers'>
            <div className='past_papers-head'>
                <div className='past_papers-heading'>
                    Explore Past Year Papers
                </div>
                <div className='past_papers-subheading'>
                    <div className='option' onClick={() => handlingOptionClick('CAT')} style={{backgroundColor: selectOption === 'CAT' ? '#14A4F5' : '' ,color: selectOption === 'CAT' ? 'white' : ''}}>CAT</div>
                    <div className='option' onClick={() => handlingOptionClick('IPMAT')} style={{backgroundColor: selectOption === 'IPMAT' ? '#14A4F5' : '' ,color: selectOption === 'IPMAT' ? 'white' : ''}}>IPMAT</div>
                    <div className='option' onClick={() => handlingOptionClick('CLAT')} style={{backgroundColor: selectOption === 'CLAT' ? '#14A4F5' : '' ,color: selectOption === 'CLAT' ? 'white' : ''}}>CLAT</div>
                    <div className='option' onClick={() => handlingOptionClick('CUET')} style={{backgroundColor: selectOption === 'CUET' ? '#14A4F5' : '',color: selectOption === 'CUET' ? 'white' : ''}}>CUET</div>     
                    <div className='option' onClick={() => handlingOptionClick('CMAT')} style={{backgroundColor: selectOption === 'CMAT' ? '#14A4F5' : '',color: selectOption === 'CMAT' ? 'white' : ''}}>CMAT </div> 
                    <div className='option' onClick={() => handlingOptionClick('NMAT')} style={{backgroundColor: selectOption === 'NMAT' ? '#14A4F5' : '',color: selectOption === 'NMAT' ? 'white' : ''}}>NMAT</div>    
                </div>      
            </div>
            <div className='past_papers-body'>
                {selectOption === 'CAT' && (
                    <>
                        <Past_papers_card title='CAT 2020 Paper Set 1' id='CAT'/>
                        <Past_papers_card title='CAT 2020 Paper Set 2' id='CAT'/>
                        <Past_papers_card title='CAT 2020 Paper Set 3' id='CAT'/>
                        <Past_papers_card title='CAT 2020 Paper Set 1' id='CAT'/>
                        <Past_papers_card title='CAT 2020 Paper Set 2' id='CAT'/>
                        <Past_papers_card title='CAT 2020 Paper Set 3' id='CAT'/>
                        <Past_papers_card title='CAT 2020 Paper Set 1' id='CAT'/>
                        <Past_papers_card title='CAT 2020 Paper Set 2' id='CAT'/>
                        <Past_papers_card title='CAT 2020 Paper Set 3' id='CAT'/>

                    </>
                )}
                {selectOption === 'IPMAT' && (
                    <>
                        <Past_papers_card title='IPMAT 2020 Paper Set 1' id='IPMAT'/>
                        <Past_papers_card title='IPMAT 2020 Paper Set 2' id='IPMAT'/>
                        <Past_papers_card title='IPMAT 2020 Paper Set 3' id='IPMAT'/>
                        <Past_papers_card title='IPMAT 2020 Paper Set 1' id='IPMAT'/>
                        <Past_papers_card title='IPMAT 2020 Paper Set 2' id='IPMAT'/>
                        <Past_papers_card title='IPMAT 2020 Paper Set 3' id='IPMAT'/>
                        <Past_papers_card title='IPMAT 2020 Paper Set 1' id='IPMAT'/>
                        <Past_papers_card title='IPMAT 2020 Paper Set 2' id='IPMAT'/>
                        <Past_papers_card title='IPMAT 2020 Paper Set 3' id='IPMAT'/>
                    </>
                )}
                {selectOption === 'CLAT' && (
                    <>
                        <Past_papers_card title='CLAT 2020 Paper Set 1' id='CLAT'/>
                        <Past_papers_card title='CLAT 2020 Paper Set 2' id='CLAT'/>
                        <Past_papers_card title='CLAT 2020 Paper Set 3' id='CLAT'/>
                    </>
                )}
                {selectOption === 'CUET' && (
                    <>
                        <Past_papers_card title='CUET 2020 Paper Set 1' id='CUET'/>
                        <Past_papers_card title='CUET 2020 Paper Set 2' id='CUET'/>
                        <Past_papers_card title='CUET 2020 Paper Set 3' id='CUET'/>
                        <Past_papers_card title='CUET 2020 Paper Set 1' id='CUET'/>
                        <Past_papers_card title='CUET 2020 Paper Set 2' id='CUET'/>
                        <Past_papers_card title='CUET 2020 Paper Set 3' id='CUET'/>
                    </>
                )}

                {selectOption === 'CMAT' && (
                    <>
                        <Past_papers_card title='CMAT 2020 Paper Set 1' id='CMAT'/>
                        <Past_papers_card title='CMAT 2020 Paper Set 2' id='CMAT'/>
                        <Past_papers_card title='CMAT 2020 Paper Set 3' id='CMAT'/>
                        <Past_papers_card title='CMAT 2020 Paper Set 1' id='CMAT'/>
                        <Past_papers_card title='CMAT 2020 Paper Set 2' id='CMAT'/>
                        <Past_papers_card title='CMAT 2020 Paper Set 3' id='CMAT'/>
                    </>
                )}

                {selectOption === 'NMAT' && (
                    <>
                        <Past_papers_card title='NMAT 2020 Paper Set 1' id='NMAT'/>
                        <Past_papers_card title='NMAT 2020 Paper Set 2' id='NMAT'/>
                        <Past_papers_card title='NMAT 2020 Paper Set 3' id='NMAT'/>
                        <Past_papers_card title='NMAT 2020 Paper Set 1' id='NMAT'/>
                        <Past_papers_card title='NMAT 2020 Paper Set 2' id='NMAT'/>
                        <Past_papers_card title='NMAT 2020 Paper Set 3' id='NMAT'/>
                    </>
                )}
                

                </div>
            </div>
            <div className='course-select'>
                <div className='course-select-area'>
                    <div className='course-head'>
                        <div className='course-head-title'>
                            Choose a Course that Fits you
                        </div>
                        <div className='course-head-option'>
                            <div className='option' onClick={() => handleOptionClick('CAT')} style={{backgroundColor: selectedOption === 'CAT' ? '#14A4F5' : '',color: selectedOption === 'CAT' ? 'white' : ''}}>CAT</div>
                            <div className='option' onClick={() => handleOptionClick('IPMAT')} style={{backgroundColor: selectedOption === 'IPMAT' ? '#14A4F5' : '', color: selectedOption === 'IPMAT' ? 'white' : ''}}>IPMAT</div>
                            <div className='option' onClick={() => handleOptionClick('CLAT')} style={{backgroundColor: selectedOption === 'CLAT' ? '#14A4F5' : '', color: selectedOption === 'CLAT' ? 'white' : ''}}> CLAT</div>
                            <div className='option' onClick={() => handleOptionClick('CUET')} style={{backgroundColor: selectedOption === 'CUET' ? '#14A4F5' : '', color: selectedOption === 'CUET' ? 'white' : ''}}>CUET</div>
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
                                id='Cat'
                            />
                            <Card_three
                                course_name='CAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                                id='Cat'
                            />
                            <Card_four
                                course_name='CAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                                id='Cat'
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
                                id='ipmat'
                            />
                            <Card_three
                                course_name='IPMAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                                id='ipmat'
                            />
                            <Card_four
                                course_name='IPMAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                                id='ipmat'
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
                                id='clat'
                            />
                            <Card_three
                                course_name='CLAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                                id='clat'
                            />
                            <Card_four
                                course_name='CLAT'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                                id='clat'
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
                                id='cuet'
                            />
                            <Card_three
                                course_name='CUET'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                                id='cuet'
                            />
                            <Card_four
                                course_name='CUET'
                                course_price='Rs.50,000'
                                detail='New batch starts 10th April 2024.'
                                course_timing='Class Timing 8:30PM to 10:30PM'
                                id='cuet'
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

    )
}