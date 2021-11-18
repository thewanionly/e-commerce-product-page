import React from 'react'
import PropTypes from 'prop-types'

import CartSVG from '../../../assets/images/icon-cart.svg'

const Icon = ({ src, name, type, fill }) => {
  return type === 'svg' ? <CartSVG className='cartSvg' /> : <img src={src} alt={name} />
}

Icon.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string
}

export default Icon
