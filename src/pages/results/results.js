import React from "react";
import { HeadingSubheading } from "../../components/headings/headings";

export const Results = ()=>{
    return(
        <div>
            <HeadingSubheading zero={true}  heading={`Stellar CAT Scores Achieved`} sub={`Our rigorous CAT coaching propelled students to exceptional results. See how many secured coveted seats at top IIMs!`}/>

            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'60px 60px',justifyContent:'center',marginTop:'60px',padding:'20px'}}>
           
                {
                    Array.from({ length: 35 - 0 + 1 }, (_, i) => 1 + i).map((i)=>(
                        <img className="result-img" src={`/hero/catP/${i}.png`}/>
                    ))
                }
            </div>

            <HeadingSubheading heading={`IPMAT Success Stories`} sub={`itness the power of focused preparation! Numerous students cracked IPMAT with stellar scores, paving their way to top IIMs.`}/>

            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'60px 60px',justifyContent:'center',marginTop:'60px',padding:'20px'}}>
                {
                    Array.from({ length: 8 - 0 + 1 }, (_, i) => 1 + i).map((i)=>(
                        <img className="result-img" src={`/hero/ipmP/${i}.png`}/>
                    ))
                }
            </div>

            <HeadingSubheading heading={`Unlocked the Door with CUET`} sub={`Our comprehensive CUET guidance empowered countless students. Explore the high scores achieved and conquer your dream university!`}/>    
            
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'60px 60px',justifyContent:'center',marginTop:'60px',padding:'20px'}}>
            
                {
                    Array.from({ length: 8 - 0 + 1 }, (_, i) => 1 + i).map((i)=>(
                        <img className="result-img" src={`/hero/cucetP/${i}.png`}/>
                    ))
                }
            </div>

            <HeadingSubheading heading={` Witness CLAT Triumphs`} sub={` Witness the success stories of our CLAT aspirants! Many secured top ranks, ready to embark on prestigious law careers.`}/>    
            
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'60px 60px',justifyContent:'center',marginTop:'60px',padding:'20px'}}>
            \
                {
                    Array.from({ length: 4 - 0 + 1 }, (_, i) => 1 + i).map((i)=>(
                        <img className="result-img" src={`/hero/clatP/${i}.png`}/>
                    ))
                }
            </div>

        </div>
    )
}