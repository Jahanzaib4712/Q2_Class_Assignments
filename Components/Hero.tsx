import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-[93vh] bg-[#043873] mt-[8vh] bg-cover bg-center'>
      <div className='flex justify-between items-center w-[100%] max-w-[1200px] mx-26'>
        <div className='flex flex-col justify-center mr-12 '>
          <h1 className='text-[64px] font-bold text-white mb-6 leading-none mr-32'>
            Get More Done with Whitespace
          </h1>
          <p className='text-[18px] text-white mb-6 opacity-80 font-normal'>
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
          <button className=' w-[219px] h-[63px] rounded-[8px] text-[16px]  text-white bg-[#4F9CF9]'>
            Try Whitespace Free
          </button>
        </div>
        <Image src="/images/image.svg" alt='hero-image' height={549} width={824} className='ml-8' />
      </div>
      <Image src="/images/background.png" alt='background-image' width={2651.8}  height={64} className="fixed absolute left-1/2 transform -translate-x-1/2"
               style={{
               width: "2651.8px",
               top: "220px",
               bottom: "10.82%"
             }}/>
    </div>
  );
}

export default Hero; 