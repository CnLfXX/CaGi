import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo2} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Welcome to CaGi Beauty, where elegance meets innovation. At CaGi, we are dedicated to enhancing your natural beauty with our carefully crafted skincare and cosmetic products. Our commitment to quality and sustainability ensures that every product is not only effective but also kind to the planet. Embrace the beauty within and let CaGi Beauty be your trusted partner in your self-care journey.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li> Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+90-507-544-8470</li>
                <li>contact@cagisupport.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ CaGi.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
