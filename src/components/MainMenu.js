import React from 'react'

const MainMenu = () => {
  return (
    <div className='mainMenu'>
      <button className='menuBtn'>≋</button>
      <div className='overlay'>
        <nav className='navItems'>
          <a href='#'>Home</a>
          <a href='#'>Resume</a>
          <a href='#'>Projects</a>
          <a href='#'>Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default MainMenu
