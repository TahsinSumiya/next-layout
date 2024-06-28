import Image from 'next/image';
import React from 'react';
import projectData from '../api/SubPara';
import ParaMore from './paramore/ParaMore';

const SubPara = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-light-orange to-white'>
      <div className='text-center'>
        <p className='py-10 font-bold text-black'>
          “Book a consultation with our experts and start transforming your Digital Presence”
        </p>

        <p className='py-10 font-bold text-blue-700 text-3xl'>
          Why Do Businesses Trust Stackkaroo’s Web Development and UI/UX Designs?
        </p>
        <p className='py-2 px-5 text-xl text-black '>
          Stackkaroo can help you in creating a measurable impact on your target customers. The world is going to change and hence your business should also change.
          With Stackkaroo you will be able to empower your business to reach new heights.
        </p>
        <p className=' py-2 px-5 text-xl text-black'>
          Our low-cost app and website development, UI/UX design, and digital marketing services will significantly accelerate your business, and also set you apart from your competitors.
        </p>
      </div>

      <div className='flex my-10 mx-20 xl:mx-32'>
        <div className=''>
          <Image height={300} width={500} src='/Polygon.png' className='h-72 w-96' alt='Polygon'/>
        </div>
        <div className=' mx-2 lg:mx-10'>
          <ul className='space-y-1 text-gray-500 list-inside dark:text-gray-400'>
            {projectData.map((data) => (
              <div key={data.id}>
                <li className='flex items-center'>
                  <svg
                    className=' w-3 md:w-5 lg:w-10 h-3 md:h-5 lg:h-10 me-2 text-green-500 dark:text-green-400 flex-shrink-0'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                  </svg>
                  <p className=' text-sm md:text-2xl lg:text-3xl'>{data.title}</p>
                </li>
                <p className='text-sm mb-2 md:text-2xl lg:text-3xl font-semibold mx-2 lg:mx-12 my-3 lg:my-5'>{data.para}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className='flex justify-center items-center '>
        <p className='bg-dark-orange px-2 py-2 rounded-lg text-white shadow-inner '>Ready to Boost Your Business Online?</p>
      </div>
      <p className='text-center text-black my-2 font-bold'>“Claim your strategy session now and learn how we can help you grow”</p>
      <ParaMore/>
    </div>
  );
};

export default SubPara;
