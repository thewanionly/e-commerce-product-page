import React from 'react'
import Icon from './Icon'

import avatarImage from '../../../assets/images/image-avatar.png'
import logo from '../../../assets/images/logo.svg'

const Standard = () => {
  return <Icon src={avatarImage} name='avatar' />
}

const SVG = () => {
  return <Icon src={logo} name='avatar' />
}

const CartSVG = () => {
  return <Icon type='svg' />
}

export { Standard, SVG, CartSVG }

export default {
  title: 'Icon',
  component: Icon
}
