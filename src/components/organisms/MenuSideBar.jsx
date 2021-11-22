import React from 'react'

import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'

const MenuSideBar = ({ showMenu, setShowMenu }) => {
  const navLinks = [
    {
      text: 'Collections',
      name: 'collections'
    },
    {
      text: 'Men',
      name: 'men'
    },
    {
      text: 'Women',
      name: 'women'
    },
    {
      text: 'About',
      name: 'about'
    },
    {
      text: 'Contact',
      name: 'contact'
    }
  ]

  const handleCloseMenuBar = () => {
    console.log('handleCloseMenuBar')
    setShowMenu(false)
  }

  const handleNavLinkClick = name => {
    console.log('handleNavLinkClick', name)
  }
  return (
    <div className={`menu-sidebar ${showMenu ? 'open' : ''}`}>
      <Icon className='menu-sidebar-close-icon' name='close' onClick={handleCloseMenuBar} />
      <nav className='menu-sidebar-nav-links'>
        {navLinks.map(({ text, name }) => (
          <Text
            key={name}
            className='menu-sidebar-nav-link'
            size='large'
            weight='bold'
            lineHeight='large-1-lh'
            color='primary'
            onClick={() => handleNavLinkClick(name)}
          >
            {text}
          </Text>
        ))}
      </nav>
    </div>
  )
}

export default MenuSideBar
