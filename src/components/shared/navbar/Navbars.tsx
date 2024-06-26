"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";


export const Navbars = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
   {id: 1, item: <Link href='/'>Home</Link>},
  //  {id: 2, item: <Link href='/'>Categoris</Link>},
   {id: 3, item: <Link href='/products'>Products</Link>},
   {id: 4, item: <Link href='/flash-sale'>Flash Sale</Link>},
   {id: 5, item: <Link href='/about'>About Us</Link>},
   {id: 6, item: <Link href='/contact'>Contact Us</Link>},
  {id: 7, item: <Link href='/dashboard'>Dashboard</Link>},
  
  ];

  return (
    <div className="bg-neutral-700 text-white">
      <div className='flex justify-between items-center h-20 max-w-[1300px] mx-auto text-zinc-950 p-6'>
        <Link href='/'>
         <h2 className='text-2xl font-bold text-white'>Clanora</h2>
        </Link>
        <ul className='hidden lg:flex'>
          {navItems.map((v: any) => (
            <li
              key={v.id}
              className='p-2 text-white rounded-xl m-1 duration-300 hover:text-black'
            >
              {v.item}
            </li>
          ))}
        </ul> 
        <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <IoMdClose className='text-2xl text-white'  /> : <  AiOutlineMenu className='text-2xl text-white' />}
        </div>
        <ul
          className={
            nav
              ? 'fixed lg:hidden left-0 top-0 w-[280px] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          <Link href='/'>
            {/* <img src={logo} alt="" /> */}
          </Link>
          {navItems.map((v: any) => (
            <li
              key={v.id}
              className='p-4 text-white border-b rounded-xl  cursor-pointer border-gray-600'
            >
              {v.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
