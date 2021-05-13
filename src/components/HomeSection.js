import React from 'react'
import MainMenu from './MainMenu'
import Intro from './Intro'

const HomeSection = () => {
  return (
    <section className='homeSection'>
      <MainMenu />
      <Intro />
      <button className='arrowBtn'>»</button>
    </section>
  )
}

export default HomeSection
