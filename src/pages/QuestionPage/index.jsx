import React, { useEffect, useState } from "react";
import { fetchQuestions } from "../../APIs/fetchQuestions";
import Question from "../../components/QuestionPageComponents/Question";
import "./index.scss";
import Button from "../../components/Common/Button";

function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [userResponse, setUserResponse] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  //For Fetching the questions from API
  useEffect(() => {
    fetchQuestions()
      .then((questions_data) => {
        setQuestions(questions_data);
        console.log('hi',questions)

        //Initially setting all the options as not selected by the user.

        let userResponse = questions_data.map((question_data) => {
          let { options } = question_data;
          options.map((option) => (option.selected = false));
          return question_data;
        });

        setUserResponse(userResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="c-questions-page-wrapper">
      <div>
        <img src="./images/top.svg" alt="top-image" className="c-top-image" />
      </div>
     
      <Question question_info={questions[currentQuestionId]} />
      <div className="c-button-wrapper">
       <Button buttonText={'Next'}  /> 
      </div>
      
    </div>
  );
}

export default QuestionsPage;
