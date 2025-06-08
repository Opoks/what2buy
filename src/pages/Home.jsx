import React from 'react'
import Hero from '../Components/hero/Hero'
import '../Components/hero/Hero.css'
import Popular from '../Components/popular/Popular'

const Home = (props) => {
  return (
    <div className='home-container'>
      <Hero/>
      {console.log(props.id)}
      <Popular/>
    </div>
  )
}

export default Home