import React from 'react'
import product_data from '../../assets/product-data'
import Item from "../item/Item"
import '../popular/Popular.css'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN MEN</h1>
        <hr />
        <div className='item-container'>
          {product_data.map((item, index)=>
            <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          )}  
        </div>
    </div>
  )
}

export default Popular