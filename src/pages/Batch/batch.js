import { Link } from "react-router-dom"
import { Button } from "../../components/button/button"
import { Test2 } from "../../components/card/test_card"

export const Batch = ()=>{
    return(
        <>
                <div className='home' style={{alignItems:'center'}}>
                <div className='home_two_img' >
                <img src={`/images/batch-ill.png`} style={{width:'70%',height:'auto',marginBottom:'30px'}} alt='frame'/>
            </div>
            <div className='headd'>
                <div className='black-head'>
                <span className='blue-head'>Make Success </span>Make Success your Habit, with TCM Education
                </div>
                <div className='para-one'>
                Tailored programs for all CAT, IPMAT, CLAT and CUET (UG) offering in-depth knowledge and effective strategies to excel in each exam.
                </div>
                <Button/>
            </div>
            
        </div>
        <div className='test-contents' style={{marginTop:'50px'}}>
                   
                    <Test2 heading={'CAT'} detail={'Build a strong base with our Foundation Series, perfect for beginners to grasp essential concepts and fundamentals.'} button={'Learn More'}/>
                    <Test2 heading={'IPMAT'} detail={'Challenge yourself with our Advanced Series, designed to push your limits and deepen your understanding of complex topics.'} button={'Learn More'}/>
                    <Test2 heading={'CLAT'} detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."} button={'Learn More'}/>
                    <Test2 heading={'CUET'} detail={"Achieve excellence with our Mastery Series, featuring the toughest mock exams to ensure you're fully prepared for exam success."} button={'Learn More'}/>
        </div>
        </>

    )
}