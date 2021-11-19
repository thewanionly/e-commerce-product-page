import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ className = '', src, alt, size = 'medium', isAvatar }) => {
  const imgClassName = `image ${className} ${size} ${isAvatar ? 'avatar' : ''}`

  //sizes
  // xs - 24px
  // s - 50px
  // md - 88px
  // l - 445px
  // xl - 550px
  // custom - pass width and height

  //borderRadius prop if not avatar

  return (
    <div className={imgClassName}>
      <img src={src} alt={alt} />
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
  isAvatar: PropTypes.bool
}

export default Image
