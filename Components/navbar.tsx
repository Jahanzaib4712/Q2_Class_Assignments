import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full fixed  z-[10000] top-0 h-[8vh] flex items-center justify-center bg-[#043873] shadow-md">
      <div className="w-[90%] mx-[15rem] grid-cols-1 mx-auto grid  lg:grid-cols-2 gap-[3rem] h-full items-center">
        <Image src="/images/logo.png" alt="logo image" width={191} height={34}  />
        
        
        <div className="flex space-x-6 justify-end items-center text-white font-bold gap-x-14 
        font-dm-sans font-medium text-[18px] leading-[23px] ">
          <div className ='flex items-center ' >Products 
            <Image src="/images/Vector.png" alt='arrow-icon' height={4} width={9}
            className='ml-4'
            />
          </div>
          <div className ='flex items-center ' >Solutions 
            <Image src="/images/Vector.png" alt='arrow-icon' height={4} width={9}
            className='ml-4'
            />
          </div>
          <div className ='flex items-center ' >Resources 
            <Image src="/images/Vector.png" alt='arrow-icon' height={4} width={9}
            className='ml-4'
            />
          </div>
          <div className ='flex items-center ' >Pricing 
            <Image src="/images/Vector.png" alt='arrow-icon' height={4} width={9}
            className='ml-4'
            />
          </div>
        
          <div className="flex justify-center items-center  h-[60px] bg-[#FFE492] rounded-[8px]">
            <button className="text-[#043873] font-bold w-[126px]">Login</button>
          </div>
          <div className='bg-[#4F9CF9] rounded-[8px]  h-[60px] flex justify-center items-center '>
            <button className="text-white text-[18px] font-medium w-[227px] mr-4  ">Try Whitespace free</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;