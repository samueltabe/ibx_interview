import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import { useRouter } from 'next/router';

const Navbar = () => {
  const[showPlatformLinks, setShowPlatformLinks]  = useState(false)
  const handleOnClose = ()=> setShowPlatformLinks(false)
  const[isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const active = useRouter();
  
  const handleNav = () =>{
    setNav(!nav);
  };

  const NavLink =[
    {
      name:"Home",
      link:"/"
    },
    {
      name:"Filter News",
      link:"/allnews"
    },
    {
      name:"Shop",
      link:"/#"
    },
    {
      name:"About",
      link:"/#"
    },
    {
      name:"Contact",
      link:"/#"
    },
  ]

  
   
  return (
    <>
      {/* desktop navbar */}
      <div className='flex items-center mx-auto lg:max-w-full h-full my-8 px-2 2xl:px-16 border-b-2 border-blue-400 pb-3'>
        <Link href='/'>
          {/* <Image src="/Group 421.svg" width={90} height={90} alt="" />   */}
          <h1 className='ml-10 md:ml-0 text-3xl font-bold text-blue-600'>Ibx2P2</h1>
        </Link>
        <div>
          <ul className='hidden md:flex mr-auto'>
            {NavLink.map(({link, name}) => (
              <Link key={name}
              href={link}
              className={` ${active.pathname == link ? 'text-[#0F52BA] font-[500] hover:text-blue-500' : ''}  font-[500] ml-10 text-[17px] hover:text-gray-400`}
              >
              {name}
              </Link>
            ))}
          </ul>
        </div>
        <div className='ml-auto'>
          <ul className='hidden md:flex ml-auto'>
            
            <Link href='/requestdemo'>
              <button className='mx-6 rounded-[30px] text-[16px] bg-[#0F52BA] py-2 px-6 items-center text-white hover:bg-blue-500'>Subscribe</button>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden ml-auto'>
          <AiOutlineMenu size={25} className="mr-3"/>
        </div>    
      </div>
      

      {/* mobile navbar */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 
            'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div className='flex w-full items-center justify-between'>
            <Link href='/'>
            <h1 className='text-2xl font-bold text-blue-600'>Ibx2P2</h1>

            </Link>
            <div onClick={handleNav} className='mr-3 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose/>
            </div>
          </div>
          <div className='flex flex-col border-b-2 border-gray-500'>
            <ul>
            {NavLink.map(({link, name}) => (
              <Link key={name}
              href={link}
              onClick={()=>setNav(false)}
              className={` ${active.pathname == link ? 'text-[#0F52BA] font-[500] hover:text-blue-500' : ''} py-2 text-[16px] hover:text-gray-400`}
              >
              {name}<br/><br/>
              </Link>
            ))}
            </ul>
          </div>
          <div className='mt-4'>
            <ul className='flex'>
              <Link href='/'>
                <button onClick={()=>setNav(false)} className='bg-[#0F52BA] rounded-[3px] py-1 px-2 text-white text-sm mx-8 items-center'>Subscribe</button>
              </Link>
            </ul>
          </div>   
        </div>
      </div>
    </>
    
  )
}

export default Navbar