import React, { useState } from 'react'
import projectsData from '../projectsData'

const GalleryItem = () => {

  const [isVisible, setIsVisible] = useState(null)

  function handleModal(id) {
    setIsVisible(id)
  }

  const items = projectsData.map(project =>

    <div key={project.id} id={project.id}>
      <div className='overlay'>
        <div className='modal' style={{display: isVisible === project.id ? 'block' : 'none'}}>
          <p>{project.name}</p>
          <p>{project.techStack}</p>
        </div>
      </div>
      <button className='projectLink' onMouseEnter={() => handleModal(project.id)} onMouseLeave={() => setIsVisible(null)}>
        <img className='galleryImg' src={project.image} alt={project.name}/>
      </button>
    </div>)

  return (
    <div className="gallery">
      {items}
    </div>
  )
}

export default GalleryItem

