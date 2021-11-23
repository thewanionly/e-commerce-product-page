import React from 'react'

import Text from 'components/atoms/Text'

const CartModal = ({ showModal }) => {
  return (
    <div className={`cart-modal ${showModal ? 'open' : ''}`}>
      <div className='cart-modal__header'>
        <Text weight='bold'>Cart</Text>
      </div>
      <div className='cart-modal__body'>
        <Text weight='bold' lineHeight='large-1' color='secondary'>
          Your cart is empty.
        </Text>
      </div>
    </div>
  )
}

export default CartModal
