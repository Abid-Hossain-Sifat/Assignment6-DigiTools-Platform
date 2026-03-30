import React from 'react'
import User from '../public/assets/user.png'
import Package from '../public/assets/package.png'
import Rocket from '../public/assets/rocket.png'

const Started = () => {
  return (
    <div className='my-30 bg-[#F9FAFC] py-30'>
        <div className='text-center space-y-4 mb-10'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-[#101727] leading-tight'>
                Get Started in 3 Steps
            </h2>
            <p className='text-[16px] leading-5 text-[#627382]'>
                Start using premium digital tools in minutes, not hours.
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[90%] lg:max-w-[80%] mx-auto gap-10 md:gap-20 lg:gap-30'>
            {/* Card1  */}
            <div className='relative p-8 md:p-10 bg-white border border-gray-100 rounded-2xl shadow-sm text-center w-full mx-auto'>
                <div className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold rounded-full'>
                    <p>01</p>
                </div>

                <div className='w-25 h-25 bg-[#f3e8fe] rounded-full flex items-center justify-center mx-auto mt-10 mb-6'>
                    <img src={User} alt="" />
                </div>

                <div>
                    <h4 className='text-2xl font-bold text-[#001931]'>
                        Create Account
                    </h4>
                    <p className="text-[16px] text-[#627382] leading-5 mt-4 mb-22">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>
            </div>

            {/* card2  */}
            <div className='relative p-8 md:p-10 bg-white border border-gray-100 rounded-2xl shadow-sm text-center w-full mx-auto'>
                <div className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold rounded-full'>
                    <p>02</p>
                </div>

                <div className='w-25 h-25 bg-[#f3e8fe] rounded-full flex items-center justify-center mx-auto mt-10 mb-6'>
                    <img src={Package} alt="" />
                </div>

                <div>
                    <h4 className='text-2xl font-bold text-[#001931]'>
                        Choose Products
                    </h4>
                    <p className="text-[16px] text-[#627382] leading-5 mt-4 mb-22">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>
            </div>

            {/* card3  */}
            <div className='relative p-8 md:p-10 bg-white border border-gray-100 rounded-2xl shadow-sm text-center w-full mx-auto'>
                <div className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold rounded-full'>
                    <p>03</p>
                </div>

                <div className='w-25 h-25 bg-[#f3e8fe] rounded-full flex items-center justify-center mx-auto mt-10 mb-6'>
                    <img src={Rocket} alt="" />
                </div>

                <div>
                    <h4 className='text-2xl font-bold text-[#001931]'>
                        Start Creating
                    </h4>
                    <p className="text-[16px] text-[#627382] leading-5 mt-4 mb-22">
                        Download and start using your premium tools immediately.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Started