import React from 'react';
import './index.scss'

function Option({option_info}) {
  let {
    text
  } = option_info
  return (
    <div className='c-option-wrapper'>
      <div className='radio'></div><div className='text'>{text}</div></div>
  )
}

export default Option