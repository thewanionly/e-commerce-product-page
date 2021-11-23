import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ className = '', src, alt, size = 'medium', borderRadius, isAvatar, onClick }) => {
  const isClickable = !!onClick
  const imgClassName = `image ${className} ${size} ${isAvatar ? 'avatar' : ''} ${
    isClickable ? 'clickable' : ''
  }`

  //sizes
  // xs - 24px
  // s - 50px
  // md - 88px
  // l - 445px
  // xl - 550px
  // custom - pass width and height

  //borderRadius prop if not avatar

  return (
    <div className={imgClassName} onClick={onClick}>
      <img style={{ borderRadius: `${borderRadius}rem` }} src={src} alt={alt} />
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string, //in rem
  isAvatar: PropTypes.bool
}

export default Image
