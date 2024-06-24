import { Link } from "react-router-dom"
import { Button } from "../../components/button/button"
import { Test2 } from "../../components/card/test_card"
import { FAQall } from "../home/home"

export const Batch = ()=>{
    return(
        <>
                <div className='home' style={{alignItems:'center'}}>
                <div className='home_two_img' >
                <img src={`/images/batch-ill.png`} style={{width:'70%',height:'auto',marginBottom:'30px'}} alt='frame'/>
            </div>
            <div className='headd'>
                <div className='black-head'>
                <span className='blue-head'>Make Success </span> your Habit, with TCM Education
                </div>
                <div className='para-one'>
                Tailored programs for all CAT, IPMAT, CLAT and CUET (UG) offering in-depth knowledge and effective strategies to excel in each exam.
                </div>
                <Button/>
            </div>
            
        </div>
        <div className='test-contents' style={{marginTop:'50px'}}>
                   
                    <Test2 link="/cat/Cat" heading={'CAT'} detail={'Premier MBA entrance exam India'} button={'Learn More'}/>
                    <Test2 link="/cat/ipmat" heading={'IPMAT'} detail={'Integrated program management aptitude test'} button={'Learn More'}/>
                    <Test2 link="/cat/clat" heading={'CLAT'} detail={"Law school admission test India"} button={'Learn More'}/>
                    <Test2 link="/cat/cuet" heading={'CUET'} detail={"Undergraduate entrance exam central universities"} button={'Learn More'}/>
        </div>
        <FAQall/>
        </>

    )
}