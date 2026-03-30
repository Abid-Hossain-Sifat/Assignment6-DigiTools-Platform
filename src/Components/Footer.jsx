import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#101727]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-10 max-w-[90%] md:max-w-[80%] mx-auto pt-16 md:pt-30 pb-12 md:pb-20'>
        <div className='space-y-4 col-span-2 md:col-span-3 lg:col-span-1'>
            <h1 className='text-4xl font-extrabold text-white'>
                DigiTools
            </h1>
            <p className='text-[16px] leading-6 text-white/80'>
                Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
        </div>
        <div className='space-y-4 text-white/80 flex flex-col'>
            <h6 className="text-[20px] leading[28px] font-medium text-white">Product</h6>
            <a className="text-[16px] leading-6">Features</a>
            <a className="text-[16px] leading-6">Pricing</a>
            <a className="text-[16px] leading-6">Templates</a>
            <a className="text-[16px] leading-6">Integrations</a>
        </div>
        <div className='space-y-4 text-white/80 flex flex-col'>
            <h6 className="text-[20px] leading[28px] font-medium text-white">Company</h6>
            <a className="text-[16px] leading-6">About</a>
            <a className="text-[16px] leading-6">Blog</a>
            <a className="text-[16px] leading-6">Careers</a>
            <a className="text-[16px] leading-6">Press</a>
        </div>
        <div className='space-y-4 text-white/80 flex flex-col'>
            <h6 className="text-[20px] leading[28px] font-medium text-white">Resources</h6>
            <a className="text-[16px] leading-6">Documentation</a> 
            <a className="text-[16px] leading-6">Help Center</a> 
            <a className="text-[16px] leading-6">Community</a> 
            <a className="text-[16px] leading-6">Contact</a> 
        </div>
        <div className='space-y-4 col-span-2 md:col-span-3 lg:col-span-1'>
            <h6 className="text-[20px] leading-[28px] font-medium text-white">Social</h6>
            <div className="grid grid-flow-col gap-4">
                <a className="bg-white p-3 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-800 group-hover:text-[#E4405F] transition-colors">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
                </a>
                <a className="bg-white p-3 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110 group">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800 group-hover:text-[#1877F2] transition-colors">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
    </svg>
                </a>
                <a className="bg-white p-3 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800 group-hover:text-black transition-colors">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
                </a>
            </div>
        </div>
      </div>
      
      <div className='bg-[#E5E7EB50] h-px max-w-[80%] mx-auto'></div>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 max-w-[80%] mx-auto mt-8 pb-8 text-center md:text-left'>
        <div>
            <p className='text-[16px] leading-6 text-[#FAFAFA]'>© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-20'>
            <p className='text-[16px] leading-6 text-[#FAFAFA]'>
                Privacy Policy
            </p>
            <p className='text-[16px] leading-6 text-[#FAFAFA]'>Terms of Service</p>
            <p className='text-[16px] leading-6 text-[#FAFAFA]'>Cookies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
