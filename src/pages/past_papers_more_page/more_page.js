import React from "react";
import "./more_page.css";
import { Question_paper_card } from "../../components/card/question_paper_card";
import { Topic_button } from "../../components/button/topic_button";
import { useParams } from "react-router-dom";

export default function More_page() {
  const { id } = useParams();
  const course = {
    cat: {
      name: "CAT",
    },
    ipmat: {
      name: "IPMAT",
    },
    clat: {
      name: "CLAT",
    },
    cuet: {
      name: "CUET",
    },
    nmat: {
      name: "NMAT",
    },
    cmat: {
      name: "CMAT",
    },
  };
  const getcoursebyname = (name) => {
    return course[name] || null;
  };
  const course_name = id;
  const courses_data = getcoursebyname(course_name);

  return (
    <div>
      {/* <div className="head_two">
                <div className="heading_content">
                    <div className="heading_two">
                    {courses_data.name} 2023<br/> Question Paper
                    </div>
                    <div className="detail">
                        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliq odio mattis. Class aptent taciti sociosqu ad litora.
                    </div>
                    <button className="attempt">
                        Attempt Today <img src="/images/Icon_1.svg" className='beelll' alt='bell'/>
                    </button>
                </div>
                <img src="/images/Test_Series_Page.png" alt="hero" className="banner_one" />
            </div> */}

      <div className="question_paper">
        <div className="question_paper_head">
          <div className="question_paper_heading">
            <div className="question_paper_title">
              {courses_data.name} Question Papers
              <br /> {courses_data.name} Previous Year Papers
            </div>
            <div className="question_paper_subheading">
              {`Enhance your preparation with TCM's collection of past ${courses_data.name.toUpperCase()} papers, providing invaluable practice and insights into the exam's pattern and difficulty.`}
            </div>
          </div>
        </div>

        <div className="question_paper_content">
          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />

          <Question_paper_card
            image={"circle_three.png"}
            title="2023 QUANT SLOT 1"
            detail={"CAT 2023 Question Paper Quant Slot 1"}
          />
        </div>
      </div>
    </div>
  );
}
