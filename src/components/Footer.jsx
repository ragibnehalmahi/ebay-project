import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
    <div className='container flex items-center justify-between'>
        <div> <h3 className='font-bold'>About Zomato</h3>
        <p>Who We Are</p>
        <p>Blog</p>
        <p>work with us</p>
        <p>Investor Relations</p>
        <p>Report Fraud</p>
        <p>Press Kit</p>
        <p>Contact Us</p>
        </div>
        <div> <h3 className='font-bold'>Zomaverse</h3>
        <p>Zomato</p>
        <p>Blinkit</p>
        <p>Feeding BD</p>
        <p>Hyperpure</p>
        <p>Zomato Live</p>
        <p>Zomaland</p>
        <p>Weather union</p>
        </div>
        <div className='flex-col'>
        <div> <h3 className='font-bold'>For Restaurants</h3>
        <p>Partner With Us</p>
        <p>Apps For You</p>
         </div>
         <div>
         <div className='flex-col'>
         <h3 className='font-bold'>Social Media links </h3>
         <p className='inline-flex'> Youtube -  <FaYoutube/>  </p>
         <p className='inline-flex'> Facebook -  <FaFacebook/>  </p>
         </div>
         </div>
         </div>
      
       
        
   </div>
    </div>
  )
}

export default Footer