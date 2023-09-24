import React from 'react'
import './index.scss';
import ScoreCard from '../../Common/ScoreCard';
import Button from '../../Common/Button';
const headerText = 'Your result'
function Score({correctResponseCount, inCorrectResponseCount, onButtonClickHandler}) {

  return (
    <div className='c-score-wrapper'>
      <div className='c-heading'>
        {headerText}
      </div>  
      <ScoreCard purpose={'correct'} purposeText={'Correct'} responseCount={correctResponseCount}/>
      <ScoreCard purpose={'incorrect'} purposeText={'Incorrect'} responseCount={inCorrectResponseCount}/>
      <div className='c-score-button-wrapper'>
        <Button buttonText={'Start Again'} onClickHandler={onButtonClickHandler}/>
      </div>
    </div>
  )
}

export default Score