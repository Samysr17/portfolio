import React from 'react'
import leetcode from './assets/leet-code.svg'
import gfg from './assets/geeks-for-geeks.svg'
import { FaGithub } from 'react-icons/fa'

const Profiles = () => {
  return (
    <div name='Profiles' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
    <p className="text-4xl font-bold  border-b-4 border-blue-400  py-4">Coding Profiles</p>
    <div  className="grid sm:grid-cols-2  mt-8 md:grid-cols-3 gap-8 cursor-pointer">
        <div className="">
        <p className="flex text-xl hover:text-red-700 ease-in duration-700  justify-center font-bold items-center">LeetCode</p>
          <img className=" hover:scale-110 ease-in duration-700 hover:opacity-35 mt-4" src={leetcode} alt="/"/>
            <a href="/">
            <button className=" w-full border-2 rounded-md shadow-xl items-center shadow-red-700 flex justify-center border-white text-white mt-4 hover:bg-red-700 ease-in duration-700 hover:border-red-700 px-6 py-3 ">Visit Profile</button>
            </a>
        </div>
        <div className="">
        <p className="flex text-xl hover:text-black ease-in duration-700  justify-center font-bold items-center">Geeks For Geeks</p>
          <img className=" hover:scale-110 ease-in duration-700 hover:opacity-35 mt-4 h-[90px]" src={gfg} alt="/"/>
            <a href="/">
            <button className=" w-full border-2 rounded-md shadow-xl items-center shadow-black flex justify-center border-white text-white mt-4 hover:bg-black ease-in duration-700 hover:border-black px-6 py-3 ">Visit Profile</button>
            </a>
        </div>
        <div className="">
        <p className="flex text-xl hover:text-blue-700 ease-in duration-700  justify-center font-bold items-center">Github</p>
        <FaGithub className='text-black mt-4' size={110}/>
            <a href="/">
            <button className=" w-full border-2 rounded-md shadow-xl items-center shadow-blue-700 flex justify-center border-white text-white mt-4 hover:bg-blue-700 ease-in duration-700 hover:border-blue-700 px-6 py-3 ">Visit Repository</button>
            </a>
        </div>
       

        </div>

    </div>
    </div>
  )
}

export default Profiles