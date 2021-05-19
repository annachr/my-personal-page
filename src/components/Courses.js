import React from 'react'
import resumeData from '../resumeData'

const Courses = () => {
  const course = resumeData.courses.map(course => <li>{course.year} {course.courseName}</li>)
  return (
    <div>
      <h4>COURSES</h4>
      {course}
    </div>
  )
}

export default Courses
