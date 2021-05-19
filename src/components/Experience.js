import React, {useState} from 'react'
import resumeData from '../resumeData'

const Experience = () => {
  const [display, setDisplay] = useState(false)
  function handleDisplay() {
    setDisplay(!display)
  }
  const experienceList = resumeData.experience.map(item =>
    <div>
      <h4>{item.from}-{item.to} {item.company} {item.position}</h4>
    </div>)

  return (
    <div>
      <h3 onClick={handleDisplay}>EXPERIENCE</h3>
      <div style={{display: display ? 'block' : 'none'}}>
        {experienceList}
      </div>
    </div>
  )
}

export default Experience
