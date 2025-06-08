import React from 'react'
import '../item/Item.css'

import Products from '../../pages/products/Products'

import { Link } from 'react-router-dom'
import Hero from '../hero/Hero'
const Item = (props) => {
  return (
    <div className='item' >
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p className='name' >{props.name}</p>
        <div className='price'>
            <p className='old'>${props.old_price}</p>
            <p className='new'>${props.new_price}</p>
        </div>
    </div>
  )
}

export default Item