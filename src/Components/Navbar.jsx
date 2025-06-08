import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Components/navbar/Navbar.css'

import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({itemCount}) => {
    const[menu,setMenu]=useState('home')
  return (
    <div className='navbar'>
        <div className="nav-logo"><h1>what2buy</h1></div>
        <ul className="nav-menu">
            <li onClick={()=>{window.scrollTo(0,0); setMenu('home')}}><Link to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('men')}}><Link to='/men'>Men</Link>{menu==='men'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('women')}}><Link to='/women'>Women</Link>{menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'><button className='nav-login'>Login</button></Link>
            <div className="cart">
                <Link to='/cart'><p><FaCartShopping/></p></Link>
                <span>{itemCount()}</span>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar