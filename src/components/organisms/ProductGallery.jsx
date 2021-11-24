import React, { useState } from 'react'

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
    main: product1Img
  },
  {
    thumbnail: product2ImgThumbnail,
    main: product2Img
  },
  {
    thumbnail: product3ImgThumbnail,
    main: product3Img
  },
  {
    thumbnail: product4ImgThumbnail,
    main: product4Img
  }
]

const ProductGallery = () => {
  const [mainImage, setMainImage] = useState(product1Img)

  const handleSetMainImage = img => {
    setMainImage(img)
  }

  return (
    <div className='product-gallery'>
      <Image
        className='product-gallery__main-image'
        src={mainImage}
        alt='main-image'
        size='large'
        borderRadius='1.5'
      />
      <div className='product-gallery__secondary-images'>
        {images.map(({ thumbnail, main }, index) => (
          <Image
            key={thumbnail}
            className={`product-gallery__secondary-images--${index + 1} ${
              mainImage === main ? 'selected' : ''
            }`}
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

export default ProductGallery
