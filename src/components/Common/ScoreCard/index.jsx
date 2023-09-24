import React from 'react';
import classNames from 'classnames';
import './index.scss'

function ScoreCard({purpose, purposeText, responseCount}) {
  return (
    <div className={classNames('c-score-card-wrapper', { [`correct`]: purpose === 'correct' }, { [`incorrect`]: purpose==='incorrect' })}>
      <div className="radio"></div>
      <div className='response-count'>{responseCount}</div>
      <div className='purpose-text'>{purposeText}</div>
    </div>
  )
}

export default ScoreCard