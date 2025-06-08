import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import mn from "../../assets/blackmen.jpg"
const Hero = () => {
  return (
    <div className='hero1'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <p>new</p>
            <p>collections</p>
            <p>for everyone</p>
            <div className='hero-btn'>
                <div>Latest collection</div>
                <FaArrowRightLong/>
            </div>
        </div>
        <div className="hero-right">
            <div className="image">
           <img src={mn} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Hero