import React, { useEffect, useReducer, useState } from "react";
import { fetchQuestions } from "../../APIs/fetchQuestions";
import Question from "../../components/QuestionPageComponents/Question";
import "./index.scss";
import Button from "../../components/Common/Button";
import Score from "../../components/QuestionPageComponents/Score";

function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [userResponse, setUserResponse] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [showScoreCard, setShowScoreCard] = useState(false);

  //For Fetching the questions from API
  useEffect(() => {
    fetchQuestions()
      .then((questions_data) => {
        setQuestions(questions_data);

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

  const getResponseCount = () =>{

    let correctResponseCount = 0;
    let inCorrectResponseCount = 0;

    userResponse.forEach( question =>{
      let {options, answer} = question
      let selectedOption = options.filter(option =>option.selected);
      if(selectedOption.length){
        if(selectedOption[0].key === answer){
          correctResponseCount +=1;
        } else {
          inCorrectResponseCount+=1;
        }
      }
      
    })

    return {correctResponseCount, inCorrectResponseCount}

  }

  const onOptionClickHandler = (key, question_id) => {
    userResponse[question_id].options.map((option) => {
      if (option.key === key) {
        option.selected = true;
      } else {
        option.selected = false;
      }
      return option;
    });
    let updatedUserResponse = [...userResponse];
    setUserResponse(updatedUserResponse);
  };

  const onNextButtonClick = () => {
    if (currentQuestionId + 1 <= questions.length - 1) {
      let selectedResponse = userResponse[currentQuestionId].options.filter(
        (option) => option.selected
      );
      if (selectedResponse.length) {
        setCurrentQuestionId(currentQuestionId + 1);
      } else {
        window.alert("Select any one of the option to move further");
      }
    } else {
      setShowScoreCard(true);
    }
  };

  const onStartAgainButtonClick = () => {
    let updatedUserResponse = questions.map((question_data) => {
      let { options } = question_data;
      options.map((option) => (option.selected = false));
      return question_data;
    });
    setCurrentQuestionId(0);
    setUserResponse([...updatedUserResponse]);

    setShowScoreCard(false);
  };

  let {correctResponseCount, inCorrectResponseCount} = getResponseCount();

  return (
    <div className="c-questions-page-wrapper">
      <div>
        <img src="./images/top.svg" alt="top-image" className="c-top-image" />
      </div>
      {showScoreCard ? (
        <>
          <Score
            correctResponseCount={correctResponseCount}
            inCorrectResponseCount={inCorrectResponseCount}
            onButtonClickHandler={onStartAgainButtonClick}
          />{" "}
        </>
      ) : (
        <>
          <Question
            question_info={userResponse[currentQuestionId]}
            onOptionClickHandler={onOptionClickHandler}
            totalQuestionsCount = {userResponse.length}
          />
          <div className="c-button-wrapper">
            <Button
              buttonText={"Next"}
              showArrow={true}
              onClickHandler={onNextButtonClick}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default QuestionsPage;
