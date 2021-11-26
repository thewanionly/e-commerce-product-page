import React, { useState } from 'react'

import Text from 'components/atoms/Text'
import Icon from 'components/atoms/Icon'

const productDetails = {
  brand: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: '250',
  currency: 'usd',
  discount: '50'
}

const ProductDetails = ({ setShowLightBox }) => {
  const [quantity, setQuantity] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const { brand, name, description, price, currency, discount } = productDetails || {}

  const handleIncrementQuantity = () => {
    setQuantity(prevValue => prevValue + 1)
  }

  const handleDecrementQuantity = () => {
    setQuantity(prevValue => prevValue - 1)
  }

  const handleAddToCart = item => {
    setCartItems(prevValue => [...prevValue, item])
  }

  return (
    <div className='product-details'>
      <Text
        className='product-details__brand'
        size='smaller'
        lineHeight='smaller'
        weight='bold'
        color='brand'
      >
        {brand.toUpperCase()}
      </Text>
      <Text className='product-details__name' size='largest' lineHeight='largest-lh' weight='bold'>
        {name}
      </Text>
      <Text className='product-details__description' lineHeight='large-1-lh' color='secondary'>
        {description}
      </Text>
    </div>
  )
}

export default ProductDetails
