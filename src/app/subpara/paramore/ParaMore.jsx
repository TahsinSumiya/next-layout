import Image from 'next/image';
import React from 'react';
import WhyChoose from './whychoose/WhyChoose';

const ParaMore = () => {
  return (
    <>
      <div className='relative'>
        <Image
          width={1000}
          height={500}
          objectFit="cover"
          quality={100}
          className='w-full'
          src='/paraimg1.png'
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 w-full">
          <div className="text-left w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 sm:px-6 md:px-8 lg:px-12 py-6 flex justify-start">
            <h2 className="text-white text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl font-bold mb-4">
              “Trust Stackkaroo to design and develop digital experiences that are truly exceptional!”
            </h2>
          </div>
        </div>
      </div>
      <WhyChoose/>
    </>
  );
}

export default ParaMore;
