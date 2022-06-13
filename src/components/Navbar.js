import React,  { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../data';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <nav 
      className="w-full px-6 z-50 fixed inset-x-0 top-0 flex justify-center items-center"
    >
      <div className="w-full bg-navBar md:w-880 p-4 rounded-2xl flex items-center justify-between">
        <a href="#home" className="text-lg text-slate-200 font-medium">
          Portfolio
        </a>
        <div className="hidden md:flex items-center gap-6 ml-6 " >
          {navLinks && (
            navLinks.map(navLink => (
              <a 
                key={navLink.id} 
                href={navLink.href}
                className=" flex justify-between items-center border border-zinc-800 px-2 py-1 rounded border-tex text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out" 
              >
                {navLink.icon}
                  {navLink.name}
              </a>
            ))
          )}
        </div>
        {/* Hamburger Menu */}
        <motion.div 
          whileTap={{scale: 0.5}}
          className='block ml-auto md:hidden cursor-pointer'
          onClick={handleClick}
        >
          <AiOutlineMenu className='text-3xl text-textBase rounded-2xl'/>
        </motion.div>
        {/* Dropdown navlinks */}
        {isActive && (
          <motion.div 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1.1}}
            exit={{opacity: 0, scale: 0.5}}
            transition={{type: "ease-in", delay: "0.1s"}}
            className="flex flex-col items-center justify-evenly gap-6 p-4 top-20 bg-navBar w-300 rounded-lg fixed right-16"
          >
            {navLinks && (
              navLinks.map(navLink => (
                <a 
                  key={navLink.id} 
                  href={navLink.href}
                  onClick={() => setIsActive(false)}
                  className="flex justify-between items-center border border-zinc-800 px-16 py-1 rounded border-tex text-base text-textBase font-medium hover:text-slate-100 hover:border-zinc-600 cursor-pointer duration-100 ease-out" 
                >
                  {navLink.icon}
                    {navLink.name}
                </a>
              ))
            )}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar