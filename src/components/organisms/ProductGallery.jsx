import React from 'react'

import Image from 'components/atoms/Image'

import product1Img from 'assets/images/image-product-1.jpg'
import product2Img from 'assets/images/image-product-2.jpg'
import product3Img from 'assets/images/image-product-3.jpg'
import product4Img from 'assets/images/image-product-4.jpg'
import product1ImgThumbnail from 'assets/images/image-product-1-thumbnail.jpg'
import product2ImgThumbnail from 'assets/images/image-product-2-thumbnail.jpg'
import product3ImgThumbnail from 'assets/images/image-product-3-thumbnail.jpg'
import product4ImgThumbnail from 'assets/images/image-product-4-thumbnail.jpg'

const secondarImages = [
  product1ImgThumbnail,
  product2ImgThumbnail,
  product3ImgThumbnail,
  product4ImgThumbnail
]

const ProductGallery = () => {
  return (
    <div className='product-gallery'>
      <Image
        className='product-gallery__main-image'
        src={product1Img}
        alt='main-image'
        size='large'
        borderRadius='1.5'
      />
      <div className='product-gallery__secondary-images'>
        {secondarImages.map((imgSrc, index) => (
          <Image
            key={imgSrc}
            className={`product-gallery__secondary-images--${index + 1}`}
            src={imgSrc}
            alt={`secondary-images-${index + 1}`}
            borderRadius='1'
          />
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
