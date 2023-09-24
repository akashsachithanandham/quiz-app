import React from "react";
import "./index.scss";
import Option from "../Option";
import Button from "../../Common/Button";

function Question({ question_info }) {
  let { question = {}, options = [], images = [] } = question_info || {};

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
        return <Option option_info={option} />;
      })}
      
    </div>
  );
}

export default Question;
