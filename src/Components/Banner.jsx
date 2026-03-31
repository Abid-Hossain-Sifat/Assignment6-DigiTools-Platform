import React from 'react'
import bannerImg from '/assets/banner.png'
import TooltipImg from '/assets/Group 5.png'
import playImg from '/assets/Play.png'

const Banner = () => {
  return (
    <div className='py-10 md:py-15'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between max-w-[90%] md:max-w-[80%] mx-auto gap-10'>
        
        {/* content  */}
        <div className='py-10 md:py-31 text-center md:text-left'>
          
          <div className='flex justify-center md:justify-start gap-1.5 bg-[#E1E7FF] py-2 px-4 max-w-fit rounded-full mx-auto md:mx-0'>
            <img className='w-4 h-4 my-auto' src={TooltipImg} alt="" />
            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm md:text-base'>
              New: AI-Powered Tools Available
            </p>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-[72px] font-extrabold mt-4 mb-8 md:mb-17 leading-tight md:leading-21'>
            Supercharge Your <br /> Digital Workflow
          </h1>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            
            <button className='btn h-auto w-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white py-3 px-4 hover:shadow-sm'>
              <p>Explore Products</p>
            </button>

            <button className="btn btn-outline border-[#9514FA] h-auto w-auto flex items-center justify-center gap-2.5 rounded-full py-3 px-4 bg-white ">
              <img className='w-5 h-5' src={playImg} alt="" />
              <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                Watch Demo
              </p>
            </button>

          </div>
        </div>

        {/* img  */}
        <div className='w-full md:w-auto'>
          <img className='w-full max-w-md md:max-w-full mx-auto' src={bannerImg} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Banner