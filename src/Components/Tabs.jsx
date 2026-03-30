import { useState } from 'react';

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className='mt-30'>
      <div className='max-w-[80%] mx-auto flex flex-col items-center'>
        <div className='text-center mb-8'>
          <h1 className='text-[48px] font-extrabold text-[#0B132A]'>
            Premium Digital Tools
          </h1>
          <p className='text-[16px] leading-6 text-[#627382] max-w-2xl mx-auto mt-4'>
            Choose from our curated collection of premium digital products designed <br />
            to boost your productivity and creativity.
          </p>
        </div>

        <div className="inline-flex p-1.5 border border-gray-100 rounded-full shadow-sm bg-white">
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'products' 
                ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                : 'text-[#0B132A] hover:bg-gray-50'
            }`}
          >
            Products
          </button>

          <button 
            onClick={() => setActiveTab('cart')}
          className={`px-10 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'cart' 
                ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                : 'text-[#0B132A] hover:bg-gray-50'
            }`}
          >
            Cart (<span id='cartCount'>0</span>)
          </button>
          
        </div>

        <div className="mt-10">
            {activeTab === 'products' && <div>Products Show Here!!!</div>}
            {activeTab === 'cart' && <div>after Add Cart Item Show here  !!!!</div>}
        </div>

      </div>
    </div>
  );
};

export default ProductSection;
