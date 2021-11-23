import React from 'react'

import Text from 'components/atoms/Text'

import ProductGallery from 'components/organisms/ProductGallery'

const Main = () => {
  return (
    <main className='main'>
      <div className='main__right'>
        <ProductGallery />
      </div>
      <div className='main__left'></div>
    </main>
  )
}

export default Main
