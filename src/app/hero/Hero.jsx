import Image from 'next/image';
import React from 'react';


const Hero = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div className="relative h-96">
        <Image
          src="/hero.png"
          width={1000}
          height={800}
          layout="fit"
          objectFit="cover"
          quality={100}
          alt="Grow your business with us"
          className="w-full h-96"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-playwrite text-3xl xl:text-6xl font-bold  " >
              Grow your
            </h2>
            <h2 className=" text-4xl lg:text-6xl  text-white " >
              Buisness 
            </h2>
            <h2 className=" text-4xl lg:text-6xl  text-white " >
              with us!!!
            </h2>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
