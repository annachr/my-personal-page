import React, {useState} from 'react'
import resumeData from '../resumeData'

const Education = () => {
  const [display, setDisplay] = useState(false)
  function handleDisplay() {
    setDisplay(!display)
  }
  const education = resumeData.education.map(item => <p>{item.from}-{item.to} {item.school.name} {item.school.faculty}</p>)
  return (
    <div>
      <h3 onClick={handleDisplay}>EDUCATION</h3>
      <div style={{display: display ? 'block' : 'none'}}>
        {education}
      </div>
    </div>
  )
}

export default Education
