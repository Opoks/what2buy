import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Categories from './pages/categories/Categories'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'
import LoginSignup from './pages/LoginSignup'
import all_products from './assets/all_products'
import { useState } from 'react'

function getCart(){
  let cart={}
  for(let index=0;index<all_products.length;index++)
cart[index]=0;
  return cart;
};
function App() {
 const[cartItems,setCartItems]=useState(getCart())

function addToCart(itemId){
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  console.log(cartItems)
}
function removeCart(itemId){
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

function itemCount(){
  let count=0;
  for(const item in cartItems){
    if (cartItems[item]>0) {
      count+=cartItems[item]
      
    }
  }
  return count;
}
function totalAmount(){
  let total=0;
  for(const item in cartItems){
    if (cartItems[item]>0) {
      let it=all_products.find((product)=>product.id===Number(item))
      total+=it.new_price* cartItems[item];
      
    }
  }
  return total;
}
 return (
  <BrowserRouter>
  <Navbar itemCount={itemCount}/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/men' element={<Categories category="men"/>} />
    <Route path='/women' element={<Categories category="women"/>} />
    <Route path='/kids' element={<Categories category="kids"/>} />
    <Route path='/product' element={<Products addToCart={addToCart}/>} >
    <Route path=':productId' element={<Products/>}/>
    </Route>
    <Route path='/cart' element={<Cart cartItems={cartItems} totalAmount={totalAmount} removeCart={removeCart}/>} />
    <Route path='/login' element={<LoginSignup/>} />

  </Routes>
  </BrowserRouter>
  )
}

export default App
