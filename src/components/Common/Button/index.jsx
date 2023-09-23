import React from 'react'
import './index.scss'

function Button({buttonText}) {
  return (
    <div className='c-button-wrapper'>{buttonText}</div>
  )
}

export default Button