import React, { useState, useEffect } from 'react'

import Icon from 'components/atoms/Icon'
import Image from 'components/atoms/Image'

import product1Img from 'assets/images/image-product-1.jpg'
import product2Img from 'assets/images/image-product-2.jpg'
import product3Img from 'assets/images/image-product-3.jpg'
import product4Img from 'assets/images/image-product-4.jpg'
import product1ImgThumbnail from 'assets/images/image-product-1-thumbnail.jpg'
import product2ImgThumbnail from 'assets/images/image-product-2-thumbnail.jpg'
import product3ImgThumbnail from 'assets/images/image-product-3-thumbnail.jpg'
import product4ImgThumbnail from 'assets/images/image-product-4-thumbnail.jpg'

const images = [
  {
    thumbnail: product1ImgThumbnail,
    main: product1Img,
    imageIndex: 1
  },
  {
    thumbnail: product2ImgThumbnail,
    main: product2Img,
    imageIndex: 2
  },
  {
    thumbnail: product3ImgThumbnail,
    main: product3Img,
    imageIndex: 3
  },
  {
    thumbnail: product4ImgThumbnail,
    main: product4Img,
    imageIndex: 4
  }
]

const LightBox = ({ showLightBox, setShowLightBox }) => {
  const [mainImage, setMainImage] = useState(product1Img)
  const [currImgIndex, setCurrImgIndex] = useState(
    images.find(({ main }) => main === mainImage).imageIndex
  )

  const handleCloseLightBox = () => {
    setShowLightBox(false)
  }

  const handleSetMainImage = (e, img) => {
    e.stopPropagation()

    setMainImage(img)
  }

  const handleGoToNextImage = e => {
    e.stopPropagation()

    let currIndex = currImgIndex

    if (currIndex === images.length) {
      currIndex = 1
    } else {
      currIndex++
    }

    setCurrImgIndex(currIndex)
  }

  const handleGoToPreviousImage = e => {
    e.stopPropagation()

    let currIndex = currImgIndex

    if (currIndex === 1) {
      currIndex = 4
    } else {
      currIndex--
    }

    setCurrImgIndex(currIndex)
  }

  useEffect(() => {
    setMainImage(images.find(({ imageIndex }) => imageIndex === currImgIndex).main)
  }, [currImgIndex])

  useEffect(() => {
    setCurrImgIndex(images.find(({ main }) => main === mainImage).imageIndex)
  }, [mainImage])

  return (
    <div className={`light-box ${showLightBox ? 'open' : ''}`} onClick={handleCloseLightBox}>
      <Icon className='light-box__close-icon' name='close' onClick={handleCloseLightBox} />
      <div className='light-box__main-image__container'>
        <div className='light-box__previous-icon__container' onClick={handleGoToPreviousImage}>
          <Icon className='light-box__previous-icon' name='previous' />
        </div>
        <Image
          className='light-box__main-image'
          src={mainImage}
          alt='main-image'
          borderRadius='1.5'
        />
        <div className='light-box__next-icon__container' onClick={handleGoToNextImage}>
          <Icon className='light-box__next-icon' name='next' />
        </div>
      </div>
      <div className='light-box__secondary-images'>
        {images.map(({ thumbnail, main }, index) => (
          <Image
            key={thumbnail}
            className={`light-box__secondary-image ${mainImage === main ? 'selected' : ''}`}
            src={thumbnail}
            alt={`secondary-images-${index + 1}`}
            onClick={e => handleSetMainImage(e, main)}
            borderRadius='1'
          />
        ))}
      </div>
    </div>
  )
}

export default LightBox
