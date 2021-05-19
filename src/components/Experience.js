import React from 'react'
import resumeData from '../resumeData'

const Experience = () => {
  const experienceList = resumeData.experience.map(item =>
    <div>
      <p>{item.from}-{item.to} {item.company} {item.position}</p>
      <li>{item.responsibilities}</li>
    </div>)
  return (
    <div>
      <h4>EXPERIENCE</h4>
      {experienceList}
    </div>
  )
}

export default Experience
