import React from 'react'

const MainMenu = () => {
  return (
    <div className='mainMenu'>
      <button className='menuBtn'>≋</button>
      <div className='overlay'>
        <nav className='navItems'>
          <a href='#'>HOME</a>
          <a href='#'>RESUME</a>
          <a href='#'>PROJECTS</a>
          <a href='#'>CONTACT</a>
        </nav>
      </div>
    </div>
  )
}

export default MainMenu
