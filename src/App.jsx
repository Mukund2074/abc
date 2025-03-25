import React from 'react'
import logo from './assets/LogoAbc.png'
export default function App() {
  return (
    <div className='text-3xl bg-[#380c67] flex flex-col items-center justify-center min-h-[100dvh]'>
      <span className='relative w-full items-center flex justify-center  '>
        <img src={logo} alt='Logo Abc' className='w-auto md:w-1/2 h-auto md:h-1/3' />
        <h2 className='absolute top-2/3 mt-6 text-white text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold flex flex-col lg:flex-row items-center justify-center'>

          For Business Enquiry Call
          <a href='tel:+918000622625' className='text-[#fccd09] ml-4'>+91-80006 22625 </a>
        </h2>
      </span>
    </div>
  )
}
