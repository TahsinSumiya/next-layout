"use client";
import React from 'react';
import AllCards from './cards/AllCards';
import cardData from '../api/Card'; 

const OurService = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-light-orange to-blue-50'>
      <div className="container mx-auto px-4">
        <div><h2 className='text-center text-dark-orange text-3xl p-5'>Our Services</h2></div>
        <div className="flex flex-col">
          {cardData.map((card, index) => (
            <AllCards
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              buttonText={card.buttonText}
              para={card.para}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
