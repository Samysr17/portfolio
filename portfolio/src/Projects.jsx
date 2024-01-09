import React from 'react'
import netflix from './assets/netflix.png'
import tesla from './assets/tesla.png'
import sportsgram from './assets/sportsgram.png'
import homeo from './assets/homeo.png'
import F1 from './assets/F1.png'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
const Projects = () => {
  return (
    <div name='Projects' className="projects w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <Fade left>
        <p className="name text-4xl font-bold  border-b-4 border-blue-400 hover:text-blue-400 ease-in duration-700  py-4">Projects</p>
        </Fade>
        <div  className="grid sm:grid-cols-2  mt-8 md:grid-cols-3 gap-8 cursor-pointer">
            <div className="">
              <Flip>
            <p className="flex text-xl hover:text-red-700 ease-in duration-700  justify-center font-bold items-center">TrailerFlix</p>
              <img className=" hover:scale-110 ease-in duration-700 hover:opacity-35 mt-4" src={netflix} alt="/"/>
                <a href="/">
                <Fade left><button className=" w-full border-2 rounded-md shadow-xl items-center shadow-red-700 flex justify-center border-white text-white mt-4 hover:bg-red-700 ease-in duration-700 hover:border-red-700 px-6 py-3 ">Visit Repository</button></Fade>
                </a>
                </Flip>
            </div>
            
            <div className="">
            <Flip>
            <p className="flex text-xl hover:text-black ease-in duration-700  justify-center font-bold items-center">Tesla E-commerce</p>
              <img className=" hover:scale-110 ease-in duration-700 hover:opacity-35 mt-4" src={tesla} alt="/"/>
                <a href="/">
                <Fade left><button className=" w-full border-2 rounded-md shadow-xl items-center shadow-black flex justify-center border-white text-white mt-4 hover:bg-black ease-in duration-700 hover:border-black px-6 py-3 ">Visit Repository</button></Fade>
                </a>

                </Flip>
            </div>
          
            <div className="">
            <Flip>
            <p className="flex text-xl hover:text-blue-700 ease-in duration-700  justify-center font-bold items-center">SportsGram</p>
              <img className=" hover:scale-110 ease-in duration-700 hover:opacity-35 h-[150px] mt-4" src={sportsgram} alt="/"/>
                <a href="/">
                <Fade left> <button className=" w-full border-2 rounded-md shadow-xl items-center shadow-blue-700 flex justify-center border-white text-white mt-4 hover:bg-blue-700 ease-in duration-700 hover:border-blue-700 px-6 py-3 ">Visit Repository</button></Fade>
                </a>
                </Flip>
            </div>
           
            <div className="">
            <Flip>
            <p className="flex text-xl hover:text-purple-700 ease-in duration-700  justify-center font-bold items-center">Homeo</p>
              <img className=" hover:scale-110 ease-in duration-700 hover:opacity-35 mt-4" src={homeo} alt="/"/>
                <a href="/">
                <Fade left><button className=" w-full border-2 rounded-md shadow-xl items-center shadow-purple-700 flex justify-center border-white text-white mt-4 hover:bg-purple-700 ease-in duration-700 hover:purple-700 px-6 py-3 ">Visit Repository</button></Fade>
                </a>
                </Flip>
            </div>
            <div className="">
            <Flip>
            <p className="flex text-xl hover:text-yellow-400 ease-in duration-700  justify-center font-bold items-center">F1 Analysis</p>
              <img className=" hover:scale-110 ease-in duration-700 hover:opacity-35 mt-4" src={F1} alt="/"/>
                <a href="/">
                <Fade left><button className=" w-full border-2 rounded-md shadow-xl items-center shadow-yellow-400 flex justify-center border-white text-white mt-4 hover:bg-yellow-400 ease-in duration-700 hover:border-yellow-400 px-6 py-3 ">Visit Repository</button></Fade>
                </a>
                </Flip>
            </div>
            </div>

        </div>
        </div>
  )
}

export default Projects