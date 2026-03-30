import React from 'react'

const Subscription = () => {
  return (
    <div className='pb-30'>
      <div className='max-w-[80%] mx-auto'>
        <div className='text-center space-y-4 mb-10'>
            <h2 className='text-5xl font-extrabold text-[#101727]'>
                Simple, Transparent Pricing
            </h2>
            <p className='text-[16px] leading-5 text-[#627382]'>
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
        </div>
        {/* card container  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40'>
          {/* card1  */}
            <div className=' p-8 bg-[#F8F9FB] border border-gray-100 rounded-3xl shadow-sm font-sans'>
              <h2 className='text-2xl font-bold text-[#1A202C]'>Starter</h2>
              <p className='mt-2 text-[#627382] text-[16px] leading-5'>Perfect for getting started</p>

              <div className='mt-8'>
                <p className='text-[40px] font-bold text-[#101727]'>$0 <span className='text-[20px] text-[#627382]'>/Month</span></p>
              </div>

              <ul>
                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Access to 10 free tools</p>
                </li>

                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Basic templates</p>
                </li>

                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Community support</p>
                </li>

                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>1 project per month</p>
                </li>
              </ul>

                <button className="btn w-full h-auto py-4 mt-20 text-white font-bold text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full ">
                <p>Get Started Free</p>
              </button>
            </div>
            {/* card2  */}
            <div className='relative p-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border border-gray-100 rounded-3xl shadow-sm font-sans'>

              <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] px-4 py-1 rounded-full shadow-md border border-[#FEF3C6]'>
                <p className='text-[#BB4D00] text-[14px] font-medium whitespace-nowrap'>
                  Most Popular
                </p>
              </div>
              <h2 className='text-2xl font-bold text-white'>Pro</h2>
              <p className='mt-2 text-white/70 text-[16px] leading-5'>For teams and businesses</p>

              <div className='mt-8'>
                <p className='text-[40px] font-bold text-white'>$99 <span className='text-[20px]'>/Month</span></p>
              </div>

              <ul>
                <li className='flex items-center text-white text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Access to all premium tools</p>
                </li>

                <li className='flex items-center text-white text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Unlimited templates</p>
                </li>

                <li className='flex items-center text-white text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Priority support</p>
                </li>

                <li className='flex items-center text-white text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Unlimited projects</p>
                </li>

                <li className='flex items-center text-white text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Cloud sync</p>
                </li>

                <li className='flex items-center text-white text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Advanced analytics</p>
                </li>

              </ul>

                <button className="btn w-full h-auto py-4 mt-6 font-bold text-[16px] bg-white rounded-full ">
                <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</p>
              </button>
            </div>
            {/* card3  */}
            <div className=' p-8 bg-[#F8F9FB] border border-gray-100 rounded-3xl shadow-sm font-sans'>
              <h2 className='text-2xl font-bold text-[#1A202C]'>Enterprise</h2>
              <p className='mt-2 text-[#627382] text-[16px] leading-5'>For teams and businesses</p>

              <div className='mt-8'>
                <p className='text-[40px] font-bold text-[#101727]'>$99 <span className='text-[20px] text-[#627382]'>/Month</span></p>
              </div>

              <ul>
                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Everything is pro</p>
                </li>

                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Team collaboration</p>
                </li>

                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Custom integrations</p>
                </li>

                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Dedicated support</p>
                </li>

                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>SLA guarantee</p>
                </li>

                <li className='flex items-center text-[#627382] text-[16px]'>
                  <svg className="w-6 h-6 mr-3 text-[#48BB78]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Custom branding</p>
                </li>

              </ul>

                <button className="btn w-full h-auto py-4 mt-6 text-white font-bold text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full ">
                <p>Contact Sales</p>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
