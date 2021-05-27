import React from 'react'
import githubIcon from '../static/github-icon.svg'
import linkedIn from '../static/linkedIn-icon.svg'

const Header = () => {
  return (
    <div>
      <header id='home'>
        <h1>Hi, I'm Anna</h1>
        <div className='socialIcons'>
          <a href='https://github.com/annachr?tab=repositories'><img className='github icon' src={githubIcon} alt='github icon'/></a>
          <a href='https://www.linkedin.com/in/ania-chruściel-628a1993/'><img className='linkedin icon' src={linkedIn} alt='linkedIn icon'/></a>
        </div>
      </header>
      <p className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.</p>

    </div>
  )
}

export default Header
