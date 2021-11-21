import React from 'react'

import Icon from 'components/atoms/Icon'
import Image from 'components/atoms/Image'
import Text from 'components/atoms/Text'

import avatarImg from 'assets/images/image-avatar.png'

const Header = () => {
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

  const handleNavLinkClick = name => {
    console.log('handleNavLinkClick', name)
  }

  return (
    <header className='header'>
      <div className='header-nav'>
        <div className='header-nav-left'>
          <Icon className='header-nav-logo' name='logo' />
          <nav className='header-nav-links'>
            {navLinks.map(({ text, name }) => (
              <Text
                key={name}
                className='header-nav-link'
                size='small'
                lineHeight='large-1-lh'
                color='secondary'
                onClick={() => handleNavLinkClick(name)}
              >
                {text}
              </Text>
            ))}
          </nav>
        </div>
        <div className='header-nav-right'>
          <Icon className='header-nav-cart' name='cart' />
          <Image className='header-nav-avatar' src={avatarImg} alt='avatar' size='small' isAvatar />
        </div>
      </div>
    </header>
  )
}

export default Header
