import Button from '../../components/Common/Button'
import Logo from '../../components/Common/Logo'
import BodyComponent from '../../components/HomePageComponents/BodyComponent'
import './index.css'
import React from 'react'

function HomePage() {
  return (
    <div className='home-page-wrapper'>
      <Logo />
      <BodyComponent />
      <Button buttonText={'Start'}/>
    </div>
  )
}

export default HomePage