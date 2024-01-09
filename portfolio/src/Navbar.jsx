import React from 'react'
import { FaLinkedin,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {

  return (
    <div>
    <div className=" navbar h-[90px] fixed bg-black w-full flex justify-between items-center bg-transparent text-white">
     <div className='name text-3xl ml-4 font-bold text-blue-400 hover:text-white ease-in duration-700'>Samrat</div>
     <div >
      <ul className='hidden md:flex space-x-8 mr-4 cursor-pointer'>
     
      <li className="hover:text-blue-400 hover:text-xl ease-in duration-700"> <Link  to="home" smooth={true}  >Home </Link></li> 
    
      <li  className="hover:text-blue-400 hover:text-xl ease-in duration-700" ><Link to="Profiles" smooth={true} >Profiles</Link></li>
    
        
       
        <li  className="hover:text-blue-400 hover:text-xl ease-in duration-700"><Link  to="Skills" smooth={true}  >Skills </Link></li>
        <li  className="hover:text-blue-400 hover:text-xl ease-in duration-700"><Link  to="Projects" smooth={true}  >Projects </Link></li>
        <li  className="hover:text-blue-400 hover:text-xl ease-in duration-700"><Link  to="contact" smooth={true}  >Contact Me </Link></li>
      </ul>
     </div>
    
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
          <li className="text-white w-[160px] h-[40px] bg-gradient-to-r from-red-900 to-yellow-400  rounded-xl ml-[-110px] hover:ml-[10px] ease-in duration-700">
          <a className="flex w-full justify-between items-center" href="/">
            <div className="ml-4 mt-1 items-center">Mail</div>
            <HiOutlineMail className='items-center mt-1 mr-2' size={30}/>
            </a>
          </li>
      </ul>

     </div>
    </div>
    </div>
  )
}

export default Navbar