import React from 'react'
import './CartItems.css'
import all_products from '../../assets/all_products'
const CartItems = ({cartItems,removeCart,totalAmount}) => {
  return (
    <div className='cart-item'>
        <div className="cart-heading">
            <p>Products</p>
            <p>Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_products.map((e)=>{
        if (cartItems[e.id]>0) {
            return <div className="cart-values">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p className="cart-quantity">{cartItems[e.id]}</p>
                <p>${e.new_price*cartItems[e.id]}</p>
                <button className="remove" onClick={()=>removeCart(e.id)}>X</button>
            </div>
        }
       })}
       <div className="total-container">
        <div className="sub-total">
           <div className="sub in">
            <p className='in-first'>Subtotal</p>
            <p>${totalAmount()}</p>
           </div>
           <div className="ship in">
            <p className='in-first'>Shipping</p>
            <p>free</p>
           </div>
           <div className="total in">
            <p className='in-first'>Total</p>
            <p>${totalAmount()}</p>
           </div>
          <button className='total-btn'>MAKE PAYMENT</button>

        </div>
        <div className="promo">
            <h2>Do you have a promo code?</h2>
            <div className="promo-input-area">
                <div className="input-btn">
                    <input type="text" name="" id="" placeholder='Enter promo code..,'/>
                </div>
                    <button className='promo-btn'>USE CODE</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems