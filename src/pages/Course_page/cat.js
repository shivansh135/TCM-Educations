import React, { useEffect, useState } from "react";
import "./cat.css";
import { Feedback_card } from "../../components/card/feedback_card.js";
import { Card_four } from "../../components/card/card4.js";
import { Card_three } from "../../components/card/card3.js";
import FAQQuestion from "../../components/FaQ/FAQQuestion.js";
import { useParams } from "react-router-dom";
import { Row } from "../../components/row/row.js";
import { FAQall, cardsData } from "../home/home.js";
import PricingCards from "../../components/pricingCards/pricingCards.js";

export default function Cat() {
  const { id } = useParams();

  const [selectedOption, setSelectedOption] = useState(id.toUpperCase());

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  const course = {
    Cat: {
      name: "CAT",
      subheading:
        "The difficulty level of cracking the CAT exam can vary depending on individual perspectives and preparation strategies. While some consider it to be one of the easiest examinations, others find certain sections, such as Quantitative Aptitude, to be more challenging. Thorough preparation, time management, and a problem-solving mindset are crucial for success.",
      description:
        "The CAT exam is a computer-based test conducted by the IIMs to evaluate the aptitude of prospective students seeking admission to their post-graduate management programs. The exam is held once a year, usually in November or December, and is one of India's most competitive MBA entrance exams",
      criteria_1:
        "Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
      criteria_2:
        "Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
      criteria_3:
        "Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2023",
      subject_1: "Verbal Ability & Reading Comprehension (VARC)",
      subject_2: "Data Interpretation & Logical Reasoning (DILR)",
      subject_3: "Quantitative Aptitude (QA)",
      subject_1_brief:
        "Reading Comprehension, Para Jumbles, Para Summary and Odd Sentence Out",
      subject_2_brief:
        "Set Theory (Variables), Set Theory + Puzzles, Puzzles with Additional Data, Coding-Decoding and Series",
      subject_3_brief:
        "Number System, Algebra, Arithmetic, Geometry and Mensuration",
      subject_1_Total_Questions: "100",
      subject_2_Total_Questions: "100",
      subject_3_Total_Questions: "100",
      subject_1_Time: "100",
      subject_2_Time: "100",
      subject_3_Time: "100",
      subject_1_Marks: "100",
      subject_2_Marks: "100",
      subject_3_Marks: "100",
      Total_Questions: "300",
      Total_Time: "300",
      Total_Marks: "300",
      subject_1_old_Total_Questions: "100",
      subject_2_old_Total_Questions: "100",
      subject_3_old_Total_Questions: "100",
      subject_1_old_Time: "100",
      subject_2_old_Time: "100",
      subject_3_old_Time: "100",
      subject_1_old_Marks: "100",
      subject_2_old_Marks: "100",
      subject_3_old_Marks: "100",
      old_Total_Questions: "300",
      old_Time: "300",
      old_Marks: "300",
    },
    clat: {
      name: "CLAT",
      subheading:
        "The difficulty level of cracking the CLAT exam can vary depending on individual perspectives and preparation strategies. While some consider it to be one of the easiest examinations, others find certain sections, such as Quantitative Aptitude, to be more challenging. Thorough preparation, time management, and a problem-solving mindset are crucial for success.",
      description:
        "The Consortium of Law Universities (NLUs) conducts a national-level law entrance exam called as CLAT. The exam is conducted by the Institute of Legal Studies (ILS).",
      criteria_1:
        "Candidates should clear Class 12 with a minimum 45 per cent aggregate (applicable for candidates belonging to General/ Other Backward Class (OBC)/ Person with Disability (PwD)/ Non-Resident Indian (NRI)/ Person of Indian Origin (PIO)/ Overseas Citizen of India (OCI) category). ",
      criteria_2:
        " Candidates appearing for their Class 12 board examinations in March/April are also eligible to apply for CLAT 2023 exam. However, such candidates need to produce proof of passing Class 12 or equivalent exam at the time of admission.",
      criteria_3:
        "There is no upper age limit to appear for the CLAT 2025 exam as well. This means that candidates belonging to any age group can apply for the law entrance exam",
      subject_1: "LEGAL REASONING  AND GK",
      subject_2: "ENGLISH ",
      subject_3: "LOGICAL REASONING ",
      subject_1_brief:
        "Contemporary events of national and international significance and  International affairs",
      subject_2_brief:
        " Correcting Incorrect Grammar Sentences, Active & Passive Voice",
      subject_3_brief: "Cause & Effect Premises & Conclusion",
      subject_1_Total_Questions: "30",
      subject_2_Total_Questions: "30",
      subject_3_Total_Questions: "30",
      subject_1_Time: "100",
      subject_2_Time: "100",
      subject_3_Time: "100",
      subject_1_Marks: "120",
      subject_2_Marks: "120",
      subject_3_Marks: "120",
      Total_Questions: "90",
      Total_Time: "300",
      Total_Marks: "360",
      subject_1_old_Total_Questions: "100",
      subject_2_old_Total_Questions: "100",
      subject_3_old_Total_Questions: "100",
      subject_1_old_Time: "100",
      subject_2_old_Time: "100",
      subject_3_old_Time: "100",
      subject_1_old_Marks: "100",
      subject_2_old_Marks: "100",
      subject_3_old_Marks: "100",
      old_Total_Questions: "300",
      old_Time: "300",
      old_Marks: "300",
    },
    cuet: {
      name: "CUET",
      subheading:
        "The difficulty level of cracking the CUET exam can vary depending on individual perspectives and preparation strategies. While some consider it to be one of the easiest examinations, others find certain sections, such as Quantitative Aptitude, to be more challenging. Thorough preparation, time management, and a problem-solving mindset are crucial for success.",
      description:
        "Common University Entrance Test also known as CUET UG is a national level entrance exam conducted by NTA for admission to UG courses offered by participating institutes. Introduced in 2022, the CUET exam aligns as a significant UG entrance examination, offering candidates a common platform for seeking admission to UG programs in top colleges/universities throughout India. The exam is conducted once a year in over 500 cities in India and abroad. The exam is conducted in a computer-based mode.",
      criteria_1:
        "Candidates from the General category must have scored a minimum of 50% marks in their +2 examination. For SC/ST candidates, the minimum required marks are 45%.",
      criteria_2:
        " Applicants can apply for CUET while attempting the qualifying examination of the university. However, they will need to provide their passing certificate at the time of counseling.",
      criteria_3:
        "There is no specific age limit for appearing in the CUET 2024 exam. ",
      subject_1: "Current Affairs and GK",
      subject_2: " Logical and Analytical Reasoning",
      subject_3: "Quantitative Reasoning",
      subject_1_brief:
        "Contemporary events of national and international significance and  International affairs",
      subject_2_brief:
        "Set Theory (Variables), Set Theory + Puzzles, Puzzles with Additional Data, Coding-Decoding and Series",
      subject_3_brief:
        "Number System, Algebra, Arithmetic, Geometry and Mensuration",
      subject_1_Total_Questions: "50",
      subject_2_Total_Questions: "50",
      subject_3_Total_Questions: "60",
      subject_1_Time: "50",
      subject_2_Time: "50",
      subject_3_Time: "60",
      subject_1_Marks: "150",
      subject_2_Marks: "150",
      subject_3_Marks: "180",
      Total_Questions: "160",
      Total_Time: "160",
      Total_Marks: "480",
      subject_1_old_Total_Questions: "100",
      subject_2_old_Total_Questions: "100",
      subject_3_old_Total_Questions: "100",
      subject_1_old_Time: "100",
      subject_2_old_Time: "100",
      subject_3_old_Time: "100",
      subject_1_old_Marks: "100",
      subject_2_old_Marks: "100",
      subject_3_old_Marks: "100",
      old_Total_Questions: "300",
      old_Time: "300",
      old_Marks: "300",
    },
    ipmat: {
      name: "IPMAT",
      subheading:
        "The difficulty level of cracking the IPMAT exam can vary depending on individual perspectives and preparation strategies. While some consider it to be one of the easiest examinations, others find certain sections, such as Quantitative Aptitude, to be more challenging. Thorough preparation, time management, and a problem-solving mindset are crucial for success.",
      description:
        "IPMAT is the Integrated Programme in Management Aptitude Test to admit students in their 5-year Integrated Programme in Management. It is designed for students who have completed their higher secondary education and wish to pursue a career in management after school. The exam assesses a candidate's aptitude in quantitative ability, verbal ability, logical reasoning, and proficiency in English language.",
      criteria_1:
        "Applicants must have scored a minimum of 60% aggregate in Class 10 and Class 12 or equivalent CGPA in the case of the General and NC OBC categories. Applicants belonging to SC, ST or PwD (DA) categories must have secured at least 55% aggregate or equivalent CGPA in Class 10 and Class 12",
      criteria_2:
        "Applicants must have passed the qualifying exam in the years 2023, 2024 or appearing in 2025.",
      criteria_3:
        "Applicants in the final year of Class 12 or awaiting the results are also eligible to apply provisionally.",
      subject_1: "Verbal Ability (VA)",
      subject_2: "Logical Reasoning (LR)",
      subject_3: "Quantitative Aptitude (QA)",
      subject_1_brief:
        "Reading Comprehension, Para Jumbles, Para Summary and Odd Sentence Out",
      subject_2_brief:
        "Set Theory (Variables), Set Theory + Puzzles, Puzzles with Additional Data, Coding-Decoding and Series",
      subject_3_brief:
        "Number System, Algebra, Arithmetic, Geometry and Mensuration",
      subject_1_Total_Questions: "40",
      subject_2_Total_Questions: "40",
      subject_3_Total_Questions: "40",
      subject_1_Time: "40",
      subject_2_Time: "40",
      subject_3_Time: "40",
      subject_1_Marks: "160",
      subject_2_Marks: "160",
      subject_3_Marks: "160",
      Total_Questions: "120",
      Total_Time: "120",
      Total_Marks: "480",
      subject_1_old_Total_Questions: "100",
      subject_2_old_Total_Questions: "100",
      subject_3_old_Total_Questions: "100",
      subject_1_old_Time: "100",
      subject_2_old_Time: "100",
      subject_3_old_Time: "100",
      subject_1_old_Marks: "100",
      subject_2_old_Marks: "100",
      subject_3_old_Marks: "100",
      old_Total_Questions: "300",
      old_Time: "300",
      old_Marks: "300",
    },
  };

  const getcoursebyname = (name) => {
    return course[name] || null;
  };
  const course_name = id;
  const courses_data = getcoursebyname(course_name);
  console.log(courses_data.name, course_name);
  return (
    <div>
      <div className="CAT_head">
        <div className="CAT_heading">
          Why <span className="blueee">{courses_data.name}</span> is one of the
          toughest exams to crack?
        </div>
      </div>

      <div className="CATs_video">
        <img
          className="CATs_video_button"
          src="/images/play_arrow.png"
          alt="play"
        />
      </div>

      <div className="What_is_CAT">
        <div className="CAT_content">
          <div className="CAT_content_heading">
            What is {courses_data.name}?
          </div>
          <div className="CAT_content_detail">{courses_data.description}</div>
        </div>

        <img src="/images/asking-question.png" className="CAT_img" alt="CAT" />
      </div>

      <div className="CAT_eligibility">
        <img src="/images/filling-survey.png" className="CAT_imgg" alt="CAT" />

        <div className="eligibility_content">
          <div className="eligibility_content_heading">
            <div className="eligibility_content_heading_block">
              {courses_data.name} Eligibility Criteria 2023
            </div>
            <div className="eligibility_content_heading_detail">
              The minimum eligibility criteria to appear in {courses_data.name}{" "}
              exam is graduation in any stream. Read below detailed CAT
              eligibility criteria:
            </div>
          </div>
          <div className="eligibility_content_detail">
            <ul className="point">
              <li className="points">{courses_data.criteria_1}</li>
              <li className="points">{courses_data.criteria_2}</li>
              <li className="points"> {courses_data.criteria_3}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="CAT_syllabus">
        <div className="CAT_syllabus_heading">
          <div className="CAT_syllabus_head">
            {courses_data.name} Syllabus 2024
          </div>
          <div className="CAT_syllabus_subheading">
            The syllabus of {courses_data.name} exam has remained the same for
            more than ten years. Check below the main topics of{" "}
            {courses_data.name} syllabus 2023 for exam preparation. Maximum
            questions are asked from these topics: {courses_data.name} Syllabus
            sections {courses_data.name} Syllabus topics
          </div>
        </div>

        <div className="syllabus">
          <div className="CAT_syllabus_first">
            <div className="CAT_syllabus_first_one">
              {courses_data.subject_1}
            </div>
            <div className="CAT_syllabus_first_two">
              {courses_data.subject_2}
            </div>
            <div className="CAT_syllabus_first_three">
              {courses_data.subject_3}
            </div>
          </div>

          <div className="CAT_syllabus_second">
            <div className="CAT_syllabus_second_one">
              {courses_data.subject_1_brief}
            </div>
            <div className="CAT_syllabus_second_two">
              {courses_data.subject_2_brief}
            </div>
            <div className="CAT_syllabus_second_three">
              {courses_data.subject_3_brief}
            </div>
          </div>
        </div>
      </div>

      <div className="course-select">
        <div className="course-select-area">
          <div className="course-head">
            <div className="course-head-title">
              Choose a Course that Fits you
            </div>
            <div className="course-head-option">
              <div
                className="option"
                onClick={() => handleOptionClick("CAT")}
                style={{
                  backgroundColor: selectedOption === "CAT" ? "#14A4F5" : "",
                  color: selectedOption === "CAT" ? "white" : "",
                }}
              >
                CAT
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("IPMAT")}
                style={{
                  backgroundColor: selectedOption === "IPMAT" ? "#14A4F5" : "",
                  color: selectedOption === "IPMAT" ? "white" : "",
                }}
              >
                IPMAT
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("CLAT")}
                style={{
                  backgroundColor: selectedOption === "CLAT" ? "#14A4F5" : "",
                  color: selectedOption === "CLAT" ? "white" : "",
                }}
              >
                CLAT
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick("CUET")}
                style={{
                  backgroundColor: selectedOption === "CUET" ? "#14A4F5" : "",
                  color: selectedOption === "CUET" ? "white" : "",
                }}
              >
                CUET
              </div>
            </div>
          </div>
          <PricingCards data={cardsData} />
        </div>
      </div>

      <FAQall/>
    </div>
  );
}
