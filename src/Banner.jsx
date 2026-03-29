import React from 'react'
import bannerImg from '/assets/banner.png'
import TooltipImg from '/assets/Group 5.png'
import playImg from '/assets/Play.png'

const Banner = () => {
  return (
    <div className='py-15'>
        <div className='flex justify-between max-w-[80%] mx-auto'>
            <div className='py-31'>
                <div className='flex gap-1.5 bg-[#E1E7FF] py-2 px-4 max-w-73.5 rounded-full'>
                    <img className='w-4 h-4 my-auto' src={TooltipImg} alt="" />
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                        New: AI-Powered Tools Available
                    </p>
                </div>
                <h1 className='text-[72px] font-extrabold mt-4 mb-17 leading-21'>
                    Supercharge Your <br /> Digital Workflow
                </h1>
                
                <div className='flex gap-4'>
                <button className='btn h-auto w-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white py-3 px-4 hover:shadow-sm'>
                    <p>Explore Products</p>
                </button>

                <button className=" btn btn-outline h-auto w-auto flex items-center gap-2.5 rounded-full py-3 px-4">
                    <img className='w-5 h-5' src={playImg} alt="" />
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</p>
                </button>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner
