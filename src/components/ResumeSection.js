import React from 'react'
import Features from './Features'
import resumeData from '../resumeData'

const ResumeSection = () => {
  const {experience, courses, education} = resumeData
  const experienceList = experience.map(item =>
    <div key={`${item.from}${item.to}`}>
      <p className='data'><strong>{item.from} - {item.to}</strong></p>
      <p>{item.position} - {item.company}</p>
    </div>

  )
  const coursesList = courses.map(item =>
      <p key={item.year} className='data'><strong>{item.year}</strong> {item.courseName}</p>
  )
  const educationList = education.map(item =>
      <p key={item.school.name} className='data'><strong>{item.from}-{item.to}</strong> {item.school.name} {item.school.faculty}</p>
  )


  return (
    <section className='resume'>
      <div className='sectionHeader'>
        <h2>Resume</h2>
      </div>
      <div className='features'>
        <Features header='Experience' content={experienceList}/>
        <Features header='Courses' content={coursesList}/>
        <Features header='Education' content={educationList}/>
      </div>
    </section>
  )
}

export default ResumeSection
