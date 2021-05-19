import React from 'react'
import resumeData from '../resumeData'

const Education = () => {

  const education = resumeData.education.map(item => <p>{item.from}-{item.to} {item.school.name} {item.school.faculty}</p>)
  return (
    <div>
      <h4>EDUCATION</h4>
      {education}
    </div>
  )
}

export default Education
