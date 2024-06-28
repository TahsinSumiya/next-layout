import Image from 'next/image'
import React from 'react'

const Difference = () => {
  return (
    <>
       <div className=' bg-gradient-to-r  justify-center align-middle from-light-orange to-blue-50 '>
        <div className='items-center   justify-center  lg:mx-32 xl:mx-56 '>
     
        <div className='float-right '>
       <Image class=" " 
      height={200} width={200}
      src="/difference.png"/>

<div className='xs:flex xs:justify-center  text-sm md:text-md lg:text-md xl:text-lg 2xl:text-2xl  text-blue-600 w-60 '>
    <p className='text-left'>“STACKKAROO:
Transforming Visions
into Reality..!”</p>
    </div>
        </div>  
  <div className=''>
  <h1 className='text-lg md:text-2xl lg:text-6xl w-4/5 text-left text-dark-orange '>Difference Between Businesses With and Without Websites</h1>
      <div className='flex my-5'>
     <svg
                  className=' w-3 md:w-5 lg:w-5 h-3 md:h-5 lg:h-10 me-2 text-green-500 dark:text-green-400 flex-shrink-0'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                
                <p className='text-xs md:text-md lg:text-xl text-black'> Having a website opens up a world of possibilities for businesses. It serves as
         a virtual shop that is always open, allowing 
         a huge opportunity to reach a wider audience and engage with customers online.</p>
      </div>
      <div className='flex my-5'>
     <svg
                  className=' w-3 md:w-5 lg:w-5 h-3 md:h-5 lg:h-10 me-2 text-green-500 dark:text-green-400 flex-shrink-0'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                
                <p className=' text-xs md:text-md lg:text-xl text-black'> Businesses that do not have a website may appear uncommon in today's digital world,  it's like having a closed shop when potential customers are looking to buy. But it's not all bad news, some businesses manage to develop without having a digital presence.</p>
      </div>
 
        </div>
        <div className='flex justify-center items-center '>
        <p className='bg-dark-orange px-5 py-2 rounded-lg text-white shadow-inner '>See How We Can Help..!</p>
      </div>
      <p className='text-center text-black font-bold mx-5'>“Sign up now and discover how we can take your Digital Presence to the next level”</p>
   
       
  </div>
      



    </div>
   
    </>
 
  )
}

export default Difference
