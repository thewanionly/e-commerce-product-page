import React, { useEffect, useState } from 'react'

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

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1)
  const [cartItems, setCartItems] = useState([])

  const { brand, name, description, price, currency, discount } = productDetails || {}

  const handleIncrementQuantity = e => {
    setQuantity(prevValue => prevValue + 1)
  }

  const handleDecrementQuantity = e => {
    setQuantity(prevValue => (prevValue > 0 ? prevValue - 1 : prevValue))
  }

  const handleAddToCart = e => {
    setCartItems(prevValue => [
      ...prevValue,
      {
        ...productDetails,
        quantity
      }
    ])
  }

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

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
      <div className='product-details__price'>
        <div className='product-details__price--discounted'>
          <Text
            className='product-details__price--discounted-result'
            size='larger'
            lineHeight='large-2-lh'
            weight='bold'
          >
            {price * (discount / 100)}
          </Text>
          <div className='product-details__price--discounted-discount-container'>
            <Text
              className='product-details__price--discounted-discounte-container-value'
              weight='bold'
              color='brand'
            >
              {`${discount}%`}
            </Text>
          </div>
        </div>
        <Text
          className='product-details__price--original'
          color='disabled'
          lineHeight='large-1-lh'
          weight='bold'
          isStrikeThrough
        >
          {price}
        </Text>
      </div>
      <div className='product-details__actions'>
        <div className='product-details__actions__update-quantity'>
          <Icon
            className='product-details__actions__update-quantity__decrement'
            name='minus'
            onClick={handleDecrementQuantity}
          />
          <Text className='product-details__actions__update-quantity__value' weight='bold'>
            {quantity}
          </Text>
          <Icon
            className='product-details__actions__update-quantity__increment'
            name='plus'
            onClick={handleIncrementQuantity}
          />
        </div>
        <button
          className='product-details__actions__add-to-cart'
          disabled={quantity === 0}
          onClick={handleAddToCart}
        >
          <Icon className='product-details__actions__add-to-cart__icon' name='cart' />
          <Text
            className='product-details__actions__add-to-cart__label'
            weight='bold'
            color='white'
          >
            Add to cart
          </Text>
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
