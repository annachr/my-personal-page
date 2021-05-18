import React from 'react'
import MainMenu from './MainMenu'
import Intro from './Intro'

const HomeSection = () => {
  return (
      <header className='homeSection'>
        <MainMenu />
        <Intro />
        {/*<button className='arrowBtn'>»</button>*/}
      </header>
  )
}

export default HomeSection
