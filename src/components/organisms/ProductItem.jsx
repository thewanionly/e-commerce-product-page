import React from 'react'

import { formatNumber } from 'utilities/helpers'

import Text from 'components/atoms/Text'
import Icon from 'components/atoms/Icon'
import Image from 'components/atoms/Image'

const ProductItem = ({ data, setCartItems }) => {
  const { id: currentId, imgSrc, name, price, currency, discount, quantity } = data || {}

  const handleDeleteItem = () => {
    setCartItems(prevValue => prevValue.filter(({ id }) => id !== currentId))
  }

  return (
    <div className='product-item'>
      <Image
        className='product-item__image'
        src={imgSrc}
        alt={name}
        size='small'
        borderRadius='0.4'
      />
      <div className='product-item__details'>
        <Text className='product-item__title' lineHeight='large-1' color='secondary'>
          {name}
        </Text>
        <Text className='product-item__amount' lineHeight='large-1'>
          <Text className='product-item__price-quantity' color='secondary'>
            {`${formatNumber(price * (discount / 100), currency)} x ${quantity} `}
          </Text>
          <Text className='product-item__price-total' weight='bold'>
            {`${formatNumber(price * (discount / 100) * quantity, currency)}`}
          </Text>
        </Text>
      </div>
      <Icon className='product-item__delete' name='delete' onClick={handleDeleteItem} />
    </div>
  )
}

export default ProductItem
