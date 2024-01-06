import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav,setnav]=useState('false')
  const handleclick=()=>{
    setnav(!nav);
  }
  return (
    <div className="h-[90px] fixed w-full flex justify-between items-center bg-[#0a192f] text-white">
     <div className='text-2xl ml-4'>Samrat</div>
     <div >
      <ul className='hidden md:flex space-x-8 mr-4'>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Profiles</li>
        <li>Contact Me</li>
      </ul>
     </div>
     <div className="md:hidden mr-4 z-10">
      {nav?<FaBars size={20} onClick={handleclick}/>:<FaTimes size={20}  onClick={handleclick}/>}
     </div>
     <ul className={nav?"hidden":"absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Profiles</li>
        <li className="py-6 text-4xl">Contact Me</li>
     </ul>
    </div>
  )
}

export default Navbar