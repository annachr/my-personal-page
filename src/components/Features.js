import React, { useState } from 'react'

const Features = (props) => {
  const [display, setDisplay] = useState(false)
  function handleDisplay() {
    setDisplay(!display)
  }

  return (
    <div>
      <h3 onClick={handleDisplay}>{props.header}</h3>
      <div style={{display: display ? 'block' : 'none'}} className='resumeData'>{props.content}</div>
    </div>
  )
}

export default Features
