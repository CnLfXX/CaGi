import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.project1} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>CAGI  Beauty, we are dedicated to empowering your natural beauty with premium, eco-friendly skincare and makeup products. Our carefully crafted formulas, made from ethically sourced ingredients, blend modern science with timeless beauty traditions to deliver effective, sustainable solutions for all skin types. Embrace a beauty routine that not only enhances your glow but also cares for the planet. Experience the confidence and radiance that come with every Gaci Beauty product.</p>
              
              <b className='text-gray-800'>Our Mission</b>
              <p>Welcome to Maison of Beauty, where luxury meets self-care. We are dedicated to offering high-quality beauty products that empower you to look and feel your best. From skincare to makeup and wellness essentials, each product is thoughtfully selected for its effectiveness and ethical sourcing. With a commitment to sustainability, cruelty-free practices, and inclusivity, Maison of Beauty is here to celebrate and enhance your natural beauty every day.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About