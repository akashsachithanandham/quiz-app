import React from 'react'
import './index.scss'

function Button({buttonText, showArrow}) {
  return (
    <div className='c-button'>
      {buttonText} {showArrow? <img className='arrow' src='./images/arrow.svg
      '></img>: null}</div>
  )
}

export default Button