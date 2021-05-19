import React from 'react'
import Experience from './Experience'
import Courses from './Courses'
import Education from './Education'

const ResumeSection = () => {

  return (
    <section className='resume'>
      <div className='sectionHeader'>
        <hr/>
        <h2>RESUME</h2>
        <hr/>
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
