import React, { useState } from 'react'

import Icon from 'components/atoms/Icon'
import Image from 'components/atoms/Image'
import Text from 'components/atoms/Text'

import CartModal from 'components/organisms/CartModal'

import avatarImg from 'assets/images/image-avatar.png'

const Header = ({ setShowMenu, cartItems, setCartItems }) => {
  const [showModal, setShowModal] = useState(false)

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

  const handleMenuClick = () => {
    console.log('handleMenuClick')
    setShowMenu(true)
  }

  const handleNavLinkClick = name => {
    console.log('handleNavLinkClick', name)
  }

  const handleAvatarClick = () => {
    console.log('handleAvatarClick')
  }

  const handleCartClick = () => {
    console.log('handleCartClick')
    setShowModal(prevValue => !prevValue)
  }

  return (
    <header className='header'>
      <div className='header-nav'>
        <div className='header-nav-left'>
          <Icon className='header-nav-menu' name='menu' onClick={handleMenuClick} />
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
          <div className='header-nav-cart-container'>
            {cartItems.length > 0 && (
              <div className='header-nav-cart-badge'>
                <Text size='xs' color='white' weight='bold'>
                  {cartItems.length}
                </Text>
              </div>
            )}
            <Icon className='header-nav-cart' name='cart' onClick={handleCartClick} />
          </div>
          <CartModal showModal={showModal} cartItems={cartItems} setCartItems={setCartItems} />
          <Image
            className='header-nav-avatar-sm'
            src={avatarImg}
            alt='avatar-sm'
            size='small'
            onClick={handleAvatarClick}
            isAvatar
          />
          <Image
            className='header-nav-avatar-xs'
            src={avatarImg}
            alt='avatar-xs'
            size='extra-small'
            onClick={handleAvatarClick}
            isAvatar
          />
        </div>
      </div>
    </header>
  )
}

export default Header
