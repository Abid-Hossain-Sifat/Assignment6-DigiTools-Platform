import React from 'react'
import shoppingCart from '/assets/products/shopping-cart.png'
const Navbar = () => {
  return (
    <div className='shadow-sm shadow-[#00000025]'>
      <div className='max-w-[80%] mx-auto flex justify-between items-center py-6.5'>

        <div>
            <h1 className='text-4xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                DigiTools
            </h1>
        </div>

        <div>
            <ul className='flex justify-between items-center gap-8 text-[#101727]'>
                <li>
                    <a href="">
                        Products
                    </a>
                </li>
                <li>
                    <a href="">
                        Features
                    </a>
                </li>
                <li>
                    <a href="">
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="">
                        Testimonials
                    </a>
                </li>
                <li>
                    <a href="">
                        FAQ
                    </a>
                </li>
            </ul>
        </div>

        <div className='flex items-center gap-4'>
            <a href="">
                <img src={shoppingCart} alt="" />
            </a>
            <p>
                <a href="">
                    Login
                </a>
            </p>
            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>
                Get Started
            </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
