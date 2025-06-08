import React from 'react'
import CartItems from '../../Components/cartItems/CartItems'

const Cart = ({removeCart,cartItems,totalAmount}) => {
  return (
    <div>
      <CartItems removeCart={removeCart} totalAmount={totalAmount} cartItems={cartItems}/>
    </div>
  )
}

export default Cart