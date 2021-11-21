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
        <Icon name='logo' />
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
        <Icon name='cart' />
        <Image src={avatarImg} alt='avatar' size='small' isAvatar />
      </div>
    </header>
  )
}

export default Header
