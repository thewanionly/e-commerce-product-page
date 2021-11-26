import React from 'react'
import PropTypes from 'prop-types'

/** Text sizes map */
// 10px (extra-small)
// 12px (smallest)
// 13px (smaller)
// 15px (small)
// 16px (base)
// 18px (large)
// 28px (larger)
// 44px (largest)

/** Text weight map */
// normal ($body-font-weight-normal)
// bold ($body-font-weight-bold)

/** Text color map */
// primary ($grayish-blue-darkest)
// secondary ($grayish-blue-dark)

// add overflow styles

/** Line heights */
// 12px (smallest)
// 13px (smaller)
// 15px (small)
// 16px (base)
// 25px (medium)
// 26px (large-1)
// 28px (large-2)
// 32px (larger)
// 48px (largest)

const Text = ({
  className = '',
  size = 'base',
  weight = 'normal',
  lineHeight = 'base-lh',
  color = 'primary',
  isStrikeThrough,
  onClick,
  children
}) => {
  const isClickable = !!onClick
  const textClassName = `text ${className} ${size} ${weight} ${lineHeight} ${color} ${
    isClickable ? 'clickable' : ''
  } ${isStrikeThrough ? 'strike-through' : ''}`

  return (
    <span className={textClassName} onClick={onClick}>
      {children}
    </span>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
}

export default Text
