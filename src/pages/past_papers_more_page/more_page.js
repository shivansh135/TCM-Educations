import React from "react";
import './more_page.css';
import { Question_paper_card } from "../../components/card/question_paper_card";
import { Topic_button } from "../../components/button/topic_button";
import { useParams } from 'react-router-dom';


export default function More_page() {
    const {id}=useParams();
    const course={
        CAT:{
            name:'CAT'
        },
        IPMAT:{
            name:'IPMAT'
        },
        CLAT:{
            name:'CLAT'
        },
        CUET:{
            name:'CUET'
        },
        NMAT:{
            name:'NMAT'
        },
        CMAT:{
            name:'CMAT'
        }
    }
    const getcoursebyname=(name)=>{
        return course[name] || null;        }
    const course_name=id;
    const courses_data=getcoursebyname(course_name);

    return (
        <div>
            <div className="head_two">
                <div className="heading_content">
                    <div className="heading_two">
                    {courses_data.name} 2023<br/> Question Paper
                    </div>
                    <div className="detail">
                        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliq odio mattis. Class aptent taciti sociosqu ad litora.
                    </div>
                    <button className="attempt">
                        Attempt Today <img src="/images/Icon_1.svg" className='belll' alt='bell'/>
                    </button>
                </div>
                <img src="/images/Test_Series_Page.png" alt="hero" className="banner_one" />
            </div>

            <div className="question_paper">
                <div className="question_paper_head">
                    <div className="question_paper_heading">
                        <div className="question_paper_title">
                        {courses_data.name} Question Papers<br/> {courses_data.name} Previous Year Papers
                        </div>
                        <div className="question_paper_subheading">
                            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                    </div>

                    <div className="question_paper_btn">
                        <button className="paper_btn1">
                            Choose the year <img src="/images/Icon_1.svg" className='belll' alt='bell'/>
                        </button>
                        <button className="paper_btn2">
                            Choose the slot <img src="/images/Icon_1.svg" className='belll' alt='bell'/>
                        </button>
                    </div>
                </div>

                <div className="question_paper_content">

                    <Question_paper_card
                        image={"circle_three.png"}
                        title="2023 QUANT SLOT 1"
                        detail={"CAT 2023 Question Paper Quant Slot 1"}/>

                    <Question_paper_card
                        image={"circle_three.png"}
                        title="2023 QUANT SLOT 1"
                        detail={"CAT 2023 Question Paper Quant Slot 1"}/>

                    <Question_paper_card
                        image={"circle_three.png"}
                        title="2023 QUANT SLOT 1"
                        detail={"CAT 2023 Question Paper Quant Slot 1"}/>

                    <Question_paper_card
                        image={"circle_three.png"}
                        title="2023 QUANT SLOT 1"
                        detail={"CAT 2023 Question Paper Quant Slot 1"}/>                  
                </div>

            </div>

            <div className="question_paper_topicwise">
            {courses_data.name} Question Topicwise
            </div>

            <div className="question_paper_topic_category">
                <div className="question_paper_subject_category">
                    <div className="question_paper_subject">
                    {courses_data.name} Quantitative Aptitude
                    </div>
                    <div className="subject_topic">
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>

                    </div>
                </div>

                <div className="question_paper_subject_category">
                    <div className="question_paper_subject">
                    {courses_data.name} Verbal Ability and CAT RC
                    </div>
                    <div className="subject_topic">
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>

                    </div>
                </div>

                <div className="question_paper_subject_category">
                    <div className="question_paper_subject">
                    {courses_data.name} DILR
                    </div>
                    <div className="subject_topic">
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>
                    <Topic_button topic="LCM HCF"/>

                    </div>
                </div>
            </div>



        </div>
    )
}