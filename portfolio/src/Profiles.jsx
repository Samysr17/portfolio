import React from 'react'
import leetcode from './assets/leet-code.svg'
import gfg from './assets/geeks-for-geeks.svg'
import { FaGithub } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

const Profiles = () => {
  return (
    <div name='Profiles' className="profiles w-full h-screen top-auto  text-gray-300 bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
    <Fade left>
    <p className=" name text-4xl font-bold  border-b-4 border-blue-400 hover:text-blue-400 ease-in duration-700  py-4">Coding Profiles</p>
    </Fade>
    <div  className="grid sm:grid-cols-2  mt-8 md:grid-cols-3 gap-8 cursor-pointer">
      <Fade left>
        <div className="flex flex-col items-center justify-center">
          <img className=" hover:scale-110 ease-in duration-700 h-[90px]  hover:opacity-35 mt-4" src={leetcode} alt="/"/>
            <a href="https://leetcode.com/SAMRAT3112/">
            <button className=" w-full border-2 rounded-md shadow-xl items-center shadow-yellow-400 flex justify-center border-white text-white mt-4 hover:bg-yellow-400 ease-in duration-700 hover:border-yellow-400 px-6 py-3 ">Visit Profile</button>
            </a>
        </div>
        </Fade>
        <Fade right>
        <div className="flex flex-col items-center justify-center">
          <img className=" hover:scale-110 ease-in duration-700 hover:opacity-35   mt-[20px] h-[60px]" src={gfg} alt="/"/>
            <a href="https://auth.geeksforgeeks.org/user/samysr17">
            <button className=" w-full border-2  mt-10 rounded-md shadow-xl items-center shadow-green-600 flex justify-center border-white text-white  hover:bg-green-600 ease-in duration-700 hover:border-green-600 px-6 py-3 ">Visit Profile</button>
            </a>
        </div>
        </Fade>
        <Fade right>
        <div className="flex flex-col items-center justify-center">
        <FaGithub className='text-white mt-4  ' size={90}/>
            <a href="https://github.com/Samysr17">
            <button className=" w-full border-2 rounded-md shadow-xl items-center shadow-black flex justify-center border-white text-white mt-4 hover:bg-black ease-in duration-700 hover:border-black px-6 py-3 ">Visit Profile</button>
            </a>
        </div>
        </Fade>
       

        </div>

    </div>
    </div>
  )
}

export default Profiles