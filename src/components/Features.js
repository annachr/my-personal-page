import React, { useState } from 'react'

const Features = (props) => {
  const [display, setDisplay] = useState(false)
  const [headerActive, setHeaderActive] = useState('')
  function handleDisplay() {
    setDisplay(!display)
    display ? setHeaderActive('') : setHeaderActive('active')
  }

  return (
    <div className='feature'>
      <h3 onClick={handleDisplay} className={headerActive}>{props.header}</h3>
      <div style={{display: display ? 'block' : 'none'}} className='resumeData'>{props.content}</div>
    </div>
  )
}

export default Features
