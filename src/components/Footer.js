import React from 'react'
import githubIcon from '../static/github-icon.svg'
import linkedIn from '../static/linkedIn-icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <img className='github icon' src={githubIcon} alt='github icon'/>
      <img className='linkedin icon' src={linkedIn} alt='linkedIn icon'/>
    </div>
  )
}

export default Footer
