import React from "react";
import "./index.scss";
import Option from "../Option";

function Question({ question_info, onOptionClickHandler }) {
  let { question = {}, options = [], images = [], question_id } = question_info || {};

  return (
    <div className="c-question-wrapper">
      <div className="c-question">{question.text}</div>

      {images.length > 0
        ? images.map((image) => {
            let { url: image_url, width, height } = image;
            return (
              <img
                className="c-image"
                src={image_url}
                width={width}
                height={height}
              />
            );
          })
        : null}
      {options.map((option) => {
        return <Option option_info={option} onOptionClickHandler={onOptionClickHandler} question_id={question_id}  />;
      })}
      
    </div>
  );
}

export default Question;
