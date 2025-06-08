import React from 'react'

import './Categories.css'
import all_products from '../../assets/all_products'
import Item from '../../Components/item/Item'
import { Link } from 'react-router-dom'
import Products from '../products/Products'
const Categories = (props) => {
  return (
    <div className='categories'>
      <h1>{`All ${props.category} Shoes`}</h1>

      <div className="display-products">
        {all_products.map((item,index)=>{
         
          if (props.category===item.category) {
            return(
          <Item key={index} index={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           
          )
        
        }
       
        })}
      </div>
    </div>
  )
}

export default Categories