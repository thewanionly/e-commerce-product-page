import React from 'react'
import PropTypes from 'prop-types'

import IconCartSvg from 'assets/images/icon-cart.svg'
import IconCloseSvg from 'assets/images/icon-close.svg'
import IconDeleteSvg from 'assets/images/icon-delete.svg'
import IconMenuSvg from 'assets/images/icon-menu.svg'
import IconMinusSvg from 'assets/images/icon-minus.svg'
import IconNextSvg from 'assets/images/icon-next.svg'
import IconPlusSvg from 'assets/images/icon-plus.svg'
import IconPreviousSvg from 'assets/images/icon-previous.svg'
import LogoSvg from 'assets/images/logo.svg'

/** Maps name to its corresponding icon */
const ICONS = {
  cart: IconCartSvg,
  close: IconCloseSvg,
  delete: IconDeleteSvg,
  menu: IconMenuSvg,
  minus: IconMinusSvg,
  next: IconNextSvg,
  plus: IconPlusSvg,
  previous: IconPreviousSvg,
  logo: LogoSvg
}

const Icon = ({ className = '', name, onClick }) => {
  const isClickable = !!onClick
  const IconComponent = ICONS[name]
  const iconClassName = `icon ${className} ${isClickable ? 'clickable' : ''}`

  return <>{IconComponent && <IconComponent className={iconClassName} onClick={onClick} />}</>
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default Icon
