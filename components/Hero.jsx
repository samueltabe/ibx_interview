import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Hero = () => {
  return (
    <>
     <div className='hero max-w-full h-full -mt-8'>
        <div className='mx-auto lg:max-w-7xl h-full py-24 md:py-44 2xl:px-16'>
            <h1 className='text-center font-[700] text-white text-[40px] md:text-[60px]'>Welcome To Our News Blog</h1>
            <p className='text-center px-24 md:px-[230px] text-gray-200 text-[18px]'>
                We bring you the latest and most authentic news from over 300 sources around the world.
                Stay with us for your latest news on any and every topic 
            </p>
            <div className='flex justify-center mt-6'>
                <button className='py-2 shadow-2xl hover:bg-blue-700 border border-blue-300 px-6 text-white rounded-md'><Link href="/allnews">View all news</Link></button>
            </div>
       </div>
     </div>
    </>
  )
}

export default Hero


