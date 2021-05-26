import React from 'react'
import Features from './Features'
import resumeData from '../resumeData'

const ResumeSection = () => {
  const {experience, courses, education} = resumeData
  const experienceList = experience.map(item =>
      <p key={`${item.from}${item.to}`}>{item.from}-{item.to} {item.company}{item.position}</p>
  )
  const coursesList = courses.map(item =>
      <p key={item.year}>{item.year} {item.courseName}</p>
  )
  const educationList = education.map(item =>
      <p key={item.school.name}>{item.from}-{item.to} {item.school.name} {item.school.faculty}</p>
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
