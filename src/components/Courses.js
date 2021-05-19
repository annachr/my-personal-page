import React, {useState} from 'react'
import resumeData from '../resumeData'

const Courses = () => {
  const [display, setDisplay] = useState(false)
  function handleDisplay() {
    setDisplay(!display)
  }
  const course = resumeData.courses.map(course => <li>{course.year} {course.courseName}</li>)
  return (
    <div>
      <h3 onClick={handleDisplay}>COURSES</h3>
      <div style={{display: display ? 'block' : 'none'}}>
        {course}
      </div>

    </div>
  )
}

export default Courses
