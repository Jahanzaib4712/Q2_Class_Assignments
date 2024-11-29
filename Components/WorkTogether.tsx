import Image from 'next/image'
import React from 'react'

const WorkTogether = () => {
  return (
    <div className='h-[100vh]  bg-cover bg-center bg-[white] '>
    <div className='flex justify-center items-center justify-evenly mx-[10rem]'>
        <div>
            <Image src="/images/big1.png" alt='back-image2' width={710} height={661}/>
        </div>
        <div className='space-x-4'>
            <h1 className='relative z-20 text-[72px] font-bold'>
                Work together
                </h1>
            <p className='text-[18px] font-normal '>
            With whitepace, share your notes with your colleagues and collaborate on them. <br/>
            You can also publish a note to the internet and share the URL with others.
           </p>
           <button className='w-[219px] h-[63px] rounded-[8px] text-[18px]  text-white bg-[#4F9CF9] mt-[2rem]'>
             Try it now
           </button>
           <div>
           <Image src="/images/Element.png" alt='linelogo' width={500} height={29}
         className="fixed absolute inset-0 z-10 absolute left-1/2 transform -translate-x-1/2"
         style={{
         top: "2224px",
         bottom: "10.82%",
         left: "1490px"
       }}/>
       </div>
        </div>

    </div>
</div>
  )
}

export default WorkTogether;
