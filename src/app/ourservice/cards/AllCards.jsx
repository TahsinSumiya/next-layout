import Image from 'next/image';
import React from 'react';

const AllCards = ({ title, description, image, buttonText, reverse, para }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className={`flex  ${reverse ? 'flex-row-reverse rounded-e-full' : 'flex-row rounded-s-full'} items-center bg-blue-100 shadow-md overflow-hidden mb-8`}>
        <Image
          height={200}
          width={200}
          src={image}
          alt={title}
          className="h-28 lg:h-44 w-28 lg:w-44"
        />
        <div className="p-8 lg:w-2/3">
          <h2 className="text-sm lg:text-2xl font-bold text-gray-800">{title}</h2>
          <div className="mt-2 text-xs lg:text-lg text-gray-600 max-h-32 lg:max-h-44 overflow-y-auto">
            {description}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center my-5">
        <div className="w-auto lg:w-96 flex justify-center">
          <p className="bg-blue-600 text-center px-2 py-2 rounded-lg text-white">{buttonText}</p>
        </div>
        <div className="flex justify-center mt-2">
          <p className="px-2 text-center py-2 rounded-lg text-black">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
