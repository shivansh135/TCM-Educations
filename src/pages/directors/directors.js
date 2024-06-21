import { Button, Button2 } from "../../components/button/button"

export const Directors = ()=>{
    return(
        <>
        
        <div className='home row-reverse' style={{alignItems:'center'}}>
                <div className='headd' style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center',alignItems:'center',marginLeft:'0'}}>
                    <div className='black-head' style={{textAlign:'center'}}>
                    Directors of<br/>
                    <span className='blue-head' style={{textWrap:'nowrap',display:'flex',gap:'5px',alignItems:'center',justifyContent:'center'}}>
                    <img style={{height:'110%',width:'auto'}} src="/text-logo.svg"/>Toil Chamber of Mathematics Pvt Ltd
                    </span>
                    </div>
                    <div className='para-one' style={{textAlign:'center',maxWidth:'430px'}}>
                    Meet directors Ajai Singh and Hemlata Singh whose dedication and vision have transformed TCM Education into a premier coaching institute, empowering countless aspirants.
                    </div>
                </div>
                <div className='home_two_img' style={{marginTop:'14px'}}>
                   <img src={`/images/directors.png`} style={{width:'90%',height:'auto'}} alt='frame'/>         
                    <img src="/Hemlata Singh _ Ajai Singh.svg" style={{width:'70%',height:'auto'}} alt=""/>
                </div>

            </div>

            <div className='home row-reverse' style={{marginTop:'50px',justifyContent:'space-evenly',alignItems:'center'}}>
                <div className='headd' style={{width:'100%',justifyContent:'center',maxWidth:'500px',marginLeft:'0px'}}>
                    <div className='black-head' style={{textAlign:'center',width:'100%'}}>
                    About <span className='blue-head' style={{textWrap:'nowrap'}}>Ajai Singh</span>
                    </div>
                    <div className='para-one' style={{textAlign:'justify',marginLeft:'5%'}}>
                    Ajai Singh, the visionary Director of TCM Education, brings over two decades of expertise in quantitative techniques and strategic exam preparation. His innovative teaching methods and personalized mentorship have transformed countless CAT aspirants into top achievers. Committed to excellence and student success, Ajai Singh is dedicated to fostering a learning environment where every student can thrive.
                    </div>
                </div>
                <div className='home_two_img' style={{alignItems:'center',display:'flex',flexDirection:'column',marginTop:'10px'}}>
                   <img src={`/ajai.png`} style={{width:'90%',height:'auto',maxWidth:'430px'}} alt='frame'/>     
                <Button2 link="/form-page" text={'Request 1-0-1 Counselling'}/>

                </div>

            </div>

            <div className='home row-reverse' style={{marginTop:'50px',justifyContent:'space-evenly',alignItems:'center'}}>
                <div className='headd' style={{width:'100%',justifyContent:'center',maxWidth:'500px',marginLeft:'0px'}}>
                    <div className='black-head' style={{textAlign:'center',width:'100%'}}>
                    About <span className='blue-head' style={{textWrap:'nowrap'}}>Hemlata Singh</span>
                    </div>
                    <div className='para-one' style={{textAlign:'justify',marginLeft:'5%'}}>
                    Hemlata Singh, the dynamic Director of TCM Education, is a driving force behind the institute's commitment to comprehensive and inclusive education. With a keen focus on student-centric learning and academic excellence, she ensures that TCM provides top-notch guidance and resources for all competitive exams. Hemlata Singh's leadership and dedication have been instrumental in establishing TCM as a premier coaching institute.                    </div>
                </div>
                <div className='home_two_img' style={{alignItems:'center',display:'flex',flexDirection:'column',marginTop:'10px'}}>
                   <img src={`/hemlata.png`} style={{width:'90%',height:'auto',maxWidth:'430px'}} alt='frame'/>         
                   <Button2 link="/form-page" text={'Request 1-0-1 Counselling'}/>
                
                </div>

            </div>

        
        </>
    )
}