import Image from 'next/image'
import React from 'react'

const ProjectMangement = () => {
  return (
    <div className=' h-[100vh] mt-[8vh] bg-cover bg-center bg-[white] mx-[12rem]'>
      <div className='flex items-center justify-evenly'>
        <div>
        <h1 className=' relative z-20 p-4  text-[72px] font-bold text-[#212529] mb-6 m-0 '>
          Project <br /> Management
        </h1>

        <p className='text-[18px] font-normal mb-4'>
        Images, videos, PDFs and audio files are supported. Create math expressions and
        <br /> diagrams directly from the app. Take photos with the mobile app and save them  <br />to a note.
        </p>
        <button className='relative z-20 font-inter w-[219px] h-[63px] rounded-[8px] text-[18px]  text-white bg-[#4F9CF9] mt-[2rem]'>
            Get Started
          </button>
        </div>
        <div>
        <Image src="/images/image.svg" alt='hero-image' height={547} width={748} />
         </div>
         <div className='m-0'>
        <Image src="/images/Element.png" alt='linelogo' width={650} height={29}
         className="absolute inset-0 z-10  left-1/2 transform -translate-x-1/2"
         style={{
         top: "1226px",
         bottom: "10.82%",
         left: "560px"
       }}/>
       <Image src="/images/logo3.png" alt='linelogo' width={602} height={448}
         className="absolute inset-0 z-10  left-1/2 transform -translate-x-1/2"
         style={{
         top: "1106px",
         bottom: "10.82%",
         left: "305px"
       }}/>
        </div>
      </div>
      
    </div>
    
  )
}

export default ProjectMangement
