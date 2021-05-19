import React from 'react'

const ProjectsSection = () => {
  return (
    <section className='projects'>
      <p className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.</p>
      <div className='sectionHeader'>
        <hr/>
        <h2>MY PROJECTS</h2>
        <hr/>
      </div>
      <div className='gallery'>
        <img className='galleryImg' src='http://placecorgi.com/150/100' />
        <img className='galleryImg' src='http://placecorgi.com/150/100' />
        <img className='galleryImg' src='http://placecorgi.com/150/100' />
        <img className='galleryImg' src='http://placecorgi.com/150/100' />
        <img className='galleryImg' src='http://placecorgi.com/150/100' />
        <img className='galleryImg' src='http://placecorgi.com/150/100' />
      </div>
    </section>
  )
}

export default ProjectsSection
