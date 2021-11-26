import React from 'react'

import Text from 'components/atoms/Text'

import ProductGallery from 'components/organisms/ProductGallery'
import ProductDetails from 'components/organisms/ProductDetails'

const Main = ({ setShowLightBox }) => {
  return (
    <main className='main'>
      <div className='main__right'>
        <ProductGallery setShowLightBox={setShowLightBox} />
      </div>
      <div className='main__left'>
        <ProductDetails />
      </div>
    </main>
  )
}

export default Main
