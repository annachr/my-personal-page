import React from 'react'
import photo from '../static/marguerite.jpg'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='introPhoto'>
        <img src={photo} alt='my photo' className='myPhoto'/>
      </div>
    </div>
  )
}

export default Intro
