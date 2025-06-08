import React from 'react'
import './Products.css'
import { useParams } from 'react-router-dom'
import all_products from '../../assets/all_products';
import ProductDisplay from '../../Components/productDisplay/ProductDisplay';

const Products = ({addToCart,removeCart}) => {
  const {productId}=useParams();
  const product=all_products.find((e)=>e.id=== Number(productId))
  return (
    <div className='product'>
     <ProductDisplay product={product} addToCart={addToCart} removeCart={removeCart}/>
    </div>
  )
}

export default Products