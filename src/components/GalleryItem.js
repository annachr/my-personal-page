import React from 'react'

const GalleryItem = () => {

  const images = [
    'https://user-images.githubusercontent.com/60232927/107770396-9c6ec280-6d39-11eb-8102-e07c86bfe9a7.png',
    'https://user-images.githubusercontent.com/60232927/107771357-ef954500-6d3a-11eb-8c17-8fdaa4617bfa.png',
    'https://user-images.githubusercontent.com/60232927/107774134-e6a67280-6d3e-11eb-9067-7b314ac179e0.png',
    'https://user-images.githubusercontent.com/60232927/107772528-a219d780-6d3c-11eb-905a-dd4da05fad7a.png',
    'https://user-images.githubusercontent.com/60232927/107772081-00928600-6d3c-11eb-980d-cc0c7da93dc3.png',
    'https://user-images.githubusercontent.com/60232927/107772907-2704f100-6d3d-11eb-88f4-5460eacee27a.png'
  ]

  const items = images.map(image =>
    <div>
      {/*<div className='overlay' style={{display: modal ? 'block' : 'none'}}>*/}
      {/*  <div className='modal'>*/}
      {/*    <p>project name</p>*/}
      {/*  </div>*/}

      {/*</div>*/}
      <a href='#'>
        <img className='galleryImg' src={image} alt='projects image'/>
      </a>
    </div>)

  return (
    <div className="gallery">
      {items}
    </div>
  )
}

export default GalleryItem

