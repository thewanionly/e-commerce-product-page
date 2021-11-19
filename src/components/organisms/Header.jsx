import React from 'react'

import Icon from 'components/atoms/Icon'
import Image from 'components/atoms/Image'

import avatarImg from 'assets/images/image-avatar.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-nav'>
        <Icon name='logo' />
        <nav className='header-nav-links'>
          <span className='header-nav-link'>Collections</span>
          <span className='header-nav-link'>Men</span>
          <span className='header-nav-link'>Women</span>
          <span className='header-nav-link'>About</span>
          <span className='header-nav-link'>Contact</span>
        </nav>
        <Icon name='cart' />
        <Image src={avatarImg} alt='avatar' size='small' isAvatar />
      </div>
    </header>
  )
}

export default Header
