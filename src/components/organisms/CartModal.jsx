import React from 'react'

import Text from 'components/atoms/Text'
import ProductItem from 'components/organisms/ProductItem'

const CartModal = ({ showModal, cartItems, setCartItems }) => {
  const handleCheckOut = () => {
    console.log('checkout')
  }

  const handleClickModal = e => {
    e.stopPropagation()
  }

  return (
    <div className={`cart-modal ${showModal ? 'open' : ''}`} onClick={handleClickModal}>
      <div className='cart-modal__header'>
        <Text weight='bold'>Cart</Text>
      </div>
      <div className={`cart-modal__body ${cartItems.length === 0 ? 'empty' : ''}`}>
        {cartItems.length > 0 ? (
          <>
            <div className='cart-modal__cart-items'>
              {cartItems.map(cartItem => (
                <ProductItem key={cartItem.id} data={cartItem} setCartItems={setCartItems} />
              ))}
            </div>
            <button className='cart-modal__checkout-button' onClick={handleCheckOut}>
              <Text className='cart-modal__checkout-button__label' weight='bold' color='white'>
                Checkout
              </Text>
            </button>
          </>
        ) : (
          <Text weight='bold' lineHeight='large-1' color='secondary'>
            Your cart is empty
          </Text>
        )}
      </div>
    </div>
  )
}

export default CartModal
