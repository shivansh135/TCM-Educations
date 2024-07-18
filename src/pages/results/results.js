import React from "react";
import { HeadingSubheading } from "../../components/headings/headings";

export const Results = ()=>{
    return(
        <div>
            <HeadingSubheading zero={true}  heading={` From Aspirants to Achievers`} sub={`Read testimonials from our successful students who have turned their dreams into reality with TCM`}/>

            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'43px 43px',justifyContent:'center',marginTop:'60px',padding:'20px'}}>
            <h2 className="quote" style={{marginTop:'43px',width:'100%'}}>CAT</h2>

                {
                    Array.from({ length: 33 - 0 + 1 }, (_, i) => 1 + i).map((i)=>(
                        <img className="result-img" src={`/hero/catP/${i}.png`}/>
                    ))
                }
            </div>

            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'43px 43px',justifyContent:'center',marginTop:'60px',padding:'20px'}}>
            <h2 className="quote" style={{marginTop:'43px',width:'100%'}}>IPM</h2>

                {
                    Array.from({ length: 8 - 0 + 1 }, (_, i) => 1 + i).map((i)=>(
                        <img className="result-img" src={`/hero/ipmP/${i}.png`}/>
                    ))
                }
            </div>

            
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'43px 43px',justifyContent:'center',marginTop:'60px',padding:'20px'}}>
            <h2 className="quote" style={{marginTop:'43px',width:'100%'}}>CUCET</h2>

                {
                    Array.from({ length: 8 - 0 + 1 }, (_, i) => 1 + i).map((i)=>(
                        <img className="result-img" src={`/hero/cucetP/${i}.png`}/>
                    ))
                }
            </div>

            
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'43px 43px',justifyContent:'center',marginTop:'60px',padding:'20px'}}>
            <h2 className="quote" style={{marginTop:'43px',width:'100%'}}>CLAT</h2>

                {
                    Array.from({ length: 4 - 0 + 1 }, (_, i) => 1 + i).map((i)=>(
                        <img className="result-img" src={`/hero/clatP/${i}.png`}/>
                    ))
                }
            </div>

        </div>
    )
}