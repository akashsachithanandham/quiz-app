import React from 'react'
import './index.scss'

function Button({buttonText, showArrow, onClickHandler}) {

  const onButtonClickHandler =(event) =>{
    if(onClickHandler){
      onClickHandler();
    event.preventDefault()
    }
    
  }

  return (
    <div className='c-button' onClick={onButtonClickHandler}>
      {buttonText} {showArrow? <img className='arrow' src='./images/arrow.svg
      '></img>: null}</div>
  )
}

export default Button