import React from 'react'

const Statistics = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
      <div className='max-w-[90%] md:max-w-[80%] mx-auto flex flex-col md:flex-row justify-around items-center py-10 md:py-5 gap-8 md:gap-0'>
        <div className='text-center'>
            <h1 className='text-[40px] md:text-[60px] font-extrabold text-white leading-tight'>50K+</h1>
            <p className='text-[24px] font-medium text-white/70'>Active Users</p>
        </div>

        <div className='h-px w-40 md:h-20 md:w-px bg-white/30'></div>

        <div className='text-center'>
            <h1 className='text-[40px] md:text-[60px] font-extrabold text-white leading-tight'>
                200+
            </h1>
            <p className='text-[24px] font-medium text-white/70'>Premium Tools</p>
        </div>

        <div className='h-px w-40 md:h-20 md:w-px bg-white/30'></div>

        <div className='text-center'>
            <h1 className='text-[40px] md:text-[60px] font-extrabold text-white leading-tight'>4.9</h1>
            <p className='text-[24px] font-medium text-white/70'>Rating</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
