import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ className = '', src, alt, size = '', borderRadius, isAvatar, onClick }) => {
  const isClickable = !!onClick
  const imgClassName = `image ${className} ${size ? `image-${size}` : ''} ${
    isAvatar ? 'image-avatar' : ''
  } ${isClickable ? 'image-clickable' : ''}`
  const imgStyle = { borderRadius: `${borderRadius}rem` }

  //sizes
  // xs - 24px
  // s - 50px
  // md - 88px
  // l - 445px
  // xl - 550px
  // custom - pass width and height

  //borderRadius prop if not avatar

  return (
    <div style={imgStyle} className={imgClassName} onClick={onClick}>
      <img style={imgStyle} src={src} alt={alt} />
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string, //ise if image is fixed-size, otherwise specify width, max/min in className prop
  borderRadius: PropTypes.string, //in rem
  isAvatar: PropTypes.bool
}

export default Image
