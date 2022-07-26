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

const ImageGallery = ({ setShowLightBox }) => {
  const [mainImage, setMainImage] = useState(product1Img)
  const [currImgIndex, setCurrImgIndex] = useState(
    images.find(({ main }) => main === mainImage).imageIndex
  )

  const handleOpenLightBox = () => {
    setShowLightBox(true)
  }

  const handleSetMainImage = img => {
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
    <div className='product-gallery'>
      <Image
        className='product-gallery__main-image'
        src={mainImage}
        alt='main-image'
        onClick={() => handleOpenLightBox()}
      />
      <div className='product-gallery__previous-icon__container' onClick={handleGoToPreviousImage}>
        <Icon className='product-gallery__previous-icon' name='previous' />
      </div>
      <div className='product-gallery__next-icon__container' onClick={handleGoToNextImage}>
        <Icon className='product-gallery__next-icon' name='next' />
      </div>
      <div className='product-gallery__secondary-images'>
        {images.map(({ thumbnail, main }, index) => (
          <Image
            key={thumbnail}
            className={`product-gallery__secondary-image ${mainImage === main ? 'selected' : ''}`}
            src={thumbnail}
            alt={`secondary-images-${index + 1}`}
            onClick={() => handleSetMainImage(main)}
            borderRadius='1'
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
