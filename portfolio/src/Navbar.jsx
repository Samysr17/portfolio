import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes, FaLinkedin,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
  const [nav,setnav]=useState('false')
  const handleclick=()=>{
    setnav(!nav);
  }
  return (
    <div className="h-[90px] fixed w-full flex justify-between items-center bg-[#0a192f] text-white">
     <div className='text-2xl ml-4 text-blue-400'>Samrat</div>
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
     <div className="md:flex flex-col top-[35%] left-0 fixed hidden ">
      <ul>
      <li className="text-white w-[160px] h-[40px] bg-black rounded-xl ml-[-110px] hover:ml-[10px] ease-in duration-700">
          <a className="flex w-full justify-between items-center" href="/">
            <div className="ml-4 mt-1 items-center">Github</div>
            <FaGithub className='items-center mt-1 mr-2' size={30}/>
            </a>
          </li>
        <li className="text-white w-[160px] h-[40px] bg-blue-700 rounded-xl ml-[-110px] hover:ml-[10px] ease-in duration-700">
          <a className="flex w-full justify-between items-center" href="/">
            <div className="ml-4 mt-1 items-center">LinkedIn</div>
            <FaLinkedin className='items-center mt-1 mr-2' size={30}/>
            </a>
          </li>
          <li className="text-white w-[160px] h-[40px] bg-gradient-to-r from-[rgba(131,58,180,1)] to-[rgba(253,29,29,1)]  rounded-xl ml-[-110px] hover:ml-[10px] ease-in duration-700">
          <a className="flex w-full justify-between items-center" href="/">
            <div className="ml-4 mt-1 items-center">Instagram</div>
            <FaInstagram className='items-center mt-1 mr-2' size={30}/>
            </a>
          </li>
          <li className="text-white w-[160px] h-[40px] bg-blue-400 rounded-xl ml-[-110px] hover:ml-[10px] ease-in duration-700">
          <a className="flex w-full justify-between items-center" href="/">
            <div className="ml-4 mt-1 items-center">Twitter</div>
            <FaTwitter className='items-center mt-1 mr-2' size={30}/>
            </a>
          </li>
          <li className="text-white w-[160px] h-[40px]  bg-green-500  rounded-xl ml-[-110px] hover:ml-[10px] ease-in duration-700">
          <a className="flex w-full justify-between items-center" href="/">
            <div className="ml-4 mt-1 items-center">Resume</div>
            <BsFillPersonLinesFill className='items-center mt-1 mr-2' size={30}/>
            </a>
          </li>
          <li className="text-white w-[160px] h-[40px] bg-gradient-to-r from-blue-700 to-yellow-400  rounded-xl ml-[-110px] hover:ml-[10px] ease-in duration-700">
          <a className="flex w-full justify-between items-center" href="/">
            <div className="ml-4 mt-1 items-center">Mail</div>
            <HiOutlineMail className='items-center mt-1 mr-2' size={30}/>
            </a>
          </li>
      </ul>

     </div>
    </div>
  )
}

export default Navbar