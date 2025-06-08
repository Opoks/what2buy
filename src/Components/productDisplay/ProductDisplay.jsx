import React from 'react'
import'./ProductDisplay.css'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ProductDisplay = ({product,addToCart,removeCart}) => {
  return (
    <div className='productDisplay'>
       <div className="p-display-left">
        <div className="small-img">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="big-img">
            <img src={product.image} alt="" />
        </div>
       </div>
       <div className="p-display-right">
        <h1>{product.name}</h1>

        <div className="star-icon-container">
         <FaStar/>
         <FaStar/>
         <FaStar/>
         <FaStar/>
         <FaRegStar/>
        <p> (140)</p>
        </div>
        <div className="price">
          <div className="new">
            <p>${product.new_price}</p>
          </div>
          <div className="old">
            <p>${product.old_price}</p>
          </div>
        </div>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo amet, consequatur repellendus consectetur ab placeat dolores impedit dolorum corporis sunt quis iste veritatis, voluptas officia earum tenetur nostrum quidem.</p>
       <div className="size">
        <p>Size:</p>
        <select name="" id="" >
          <option value="10" selected>10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="41">41</option>
        </select>
        </div>
        <button className='btn1' onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        <p><span>Category: </span>{product.category} shoe</p>
       </div>
        </div>
  )
}

export default ProductDisplay