import React from 'react'

const Statistics = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
      <div className='max-w-[80%] mx-auto flex justify-around py-5 items-center'>
        <div>
            <h1 className='text-[60px] font-extrabold text-white'>50K+</h1>
            <p className='text-[24px] font-medium text-white/70'>Active Users</p>
        </div>

        <div className='h-20 w-px bg-white/30'></div>

        <div>
            <h1 className='text-[60px] font-extrabold text-white'>
                200+
            </h1>
            <p className='text-[24px] font-medium text-white/70'>Premium Tools</p>
        </div>

        <div className='h-20 w-px bg-white/30'></div>

        <div>
            <h1 className='text-[60px] font-extrabold text-white'>4.9</h1>
            <p className='text-[24px] font-medium text-white/70'>Rating</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
