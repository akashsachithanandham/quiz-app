import React from 'react'
import './index.scss';
import ScoreCard from '../../Common/ScoreCard';
import Button from '../../Common/Button';
import scoremeterPath from '../../../images/scoremeter.svg'
const headerText = 'Your result'
function Score({correctResponseCount, inCorrectResponseCount, onButtonClickHandler}) {

  let percentage = ((correctResponseCount) / (correctResponseCount + inCorrectResponseCount) * 100);
  const componentStyle = {
    background: `url(${scoremeterPath}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  return (
    <div className='c-score-wrapper'>
      <div className='c-heading'>
        {headerText}
      </div>  
     <div className='c-score-section'>
      <div className='c-score-percentage-wrapper'>
        <div className='c-score-percentage' style={componentStyle}>
        <div class="triangle"></div>
            { percentage}%
             {/** For making semi circle shape */}
            <div class="c-bottom-triangle"></div>
        </div>
        </div>

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