import React from 'react'
import githubIcon from '../static/github-icon.svg'
import linkedIn from '../static/linkedIn-icon.svg'

const Footer = () => {
  return (
    <footer>
      <a href='https://github.com/annachr?tab=repositories'><img className='github icon' src={githubIcon} alt='github icon'/></a>
      <a href='#'><img className='linkedin icon' src={linkedIn} alt='linkedIn icon'/></a>
    </footer>
  )
}

export default Footer
