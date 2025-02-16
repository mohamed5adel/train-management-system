import { useState } from 'react';
import { TfiAlignJustify } from "react-icons/tfi";
import {NavLink } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa";
import { useLoginContext } from "../components/ContextLogin.jsx";
  const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { toggleLoginModal } = useLoginContext();

  return (
    <nav className=" border-gray-400 px-2 sm:px-4 py-2.5  w-full bg-three" >
      <div className="container flex flex-wrap items-center justify-between mx-auto  ">
        {/* first item */}
        <a href="/" className="flex items-center">
          <span className=" text-[20px] self-center md:text-3xl font-bold  uppercase whitespace-nowrap  text-four ">Ticketly</span>
        </a>
        <div onClick={toggleLoginModal} className='flex gap-2 justify-center items-center bg-four/20 rounded-full p-3 hover:bg-four'>
        <FaRegUserCircle className='text-white'  />
        <a className='text-white'>Login  </a>
        </div>
        <NavLink  to='/SignIUp'>
        <div className='flex gap-2 justify-center items-center bg-four/20 rounded-full p-3 hover:bg-four'>
        <FaRegUserCircle className='text-white'  />
        <a className='text-white'>signUp</a>
        </div>
        </NavLink>
       
        {/* two item */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
           focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded={isNavOpen ? "true" : "false"}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
        <TfiAlignJustify className=' font-bold text-2xl' />
        </button>
        {/* three item */}
        <div className={`w-full lg:block lg:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col p-4  mt-4 border  border-gray-100    lg:rounded-full lg:flex-row lg:space-x-8 
          lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-four/20  ">
            <li>
             
              <NavLink  to='/' className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 text-[22px] text-white rounded lg:bg-transparent font-bold 
                  transform ease-in-out hover:scale-105 lg:p-0 uppercase ${isActive ? 'text-black underline' : 'hover:text-gray-400'}`
                }
                aria-current="page"
                end // مهم جداً للرئيسية
            >
              Home 
            </NavLink >

            </li>
            <li>
            <NavLink  to='/About' className={({ isActive }) =>
            `block py-2 pl-3 pr-4 text-[22px] text-white rounded lg:bg-transparent font-bold 
                  transform ease-in-out hover:scale-105 lg:p-0 uppercase ${isActive ? 'text-black underline' : 'hover:text-gray-400'}`
          }>About </NavLink>
            </li>

               <li>
            <NavLink  to='/Service' className={({ isActive }) =>
            `block py-2 pl-3 pr-4 text-[22px] text-white rounded lg:bg-transparent font-bold 
                  transform ease-in-out hover:scale-105 lg:p-0 uppercase ${isActive ? 'text-black underline' : 'hover:text-gray-400'}`
          }>Service</NavLink> </li>
            
            <li>
            <NavLink  to='/Contact' className={({ isActive }) =>
            `block py-2 pl-3 pr-4 text-[22px] text-white rounded lg:bg-transparent font-bold 
                  transform ease-in-out hover:scale-105 lg:p-0 uppercase ${isActive ? 'text-black underline' : 'hover:text-gray-400'}`
          }>contact </NavLink>  </li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;