import React from 'react'

const Transform = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30'>
      <div className='max-w-[80%] mx-auto text-center'>
        {/* content  */}
        <div className='space-y-4 mb-10'>
            <h1 className='text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h1>
            <p className='text-[16px] leading-5 text-white/70'>Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
        </div>
        {/* button  */}
        <div className='space-x-4 mb-4'>
            <button className='btn w-auto h-auto rounded-full py-3.75 px-4 bg-white border border-white'>
                <p className='text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</p>
            </button>
            <button className='btn w-auto h-auto bg-transparent border border-white text-white rounded-full py-3.75 px-8.75'>
                <p>View Pricing</p>
            </button>
        </div>
        <p className='text-[16px] leading-5 text-white/60'>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  )
}

export default Transform
