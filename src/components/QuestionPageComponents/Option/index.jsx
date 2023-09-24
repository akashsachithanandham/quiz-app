import React from "react";
import "./index.scss";
import classNames from "classnames";

function Option({ option_info, onOptionClickHandler, question_id }) {
  let { text, selected, key } = option_info;

  const onClickHandler = (event) => {
    onOptionClickHandler(key, question_id);
    event.preventDefault();
  };
  return (
    <div
      className={classNames("c-option-wrapper", { [`selected`]: selected })}
      onClick={onClickHandler}
      key={key}
    >
      {!selected ? (
        <div className="radio"></div>
      ) : (
        <div>
          {" "}
          <img className="checked" src="./images/checkbox.svg"></img>
        </div>
      )}
      <div className="text">{text}</div>
    </div>
  );
}

export default Option;
