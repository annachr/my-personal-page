import React from 'react'
import Experience from './Experience'
import Courses from './Courses'
import Education from './Education'

const ResumeSection = () => {

  return (
    <section className='resume'>
      <div className='sectionHeader'>
        <h2>RESUME</h2>
      </div>
      <div className='features'>
        <Experience />
        <Courses />
        <Education />
      </div>
    </section>
  )
}

export default ResumeSection
