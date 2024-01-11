import React from 'react'
import Fade from 'react-reveal/Fade';
import Samrat_Resume from './assets/Samrat_Resume.pdf'

const Home = () => {
  return (
    <div name='home' className="home  w-full h-screen px-8">
      
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full">
      <Fade left>
        <p className="text-blue-400">Hi there! My name is ,</p>
        <p className=" text-white font-bold   text-4xl sm:text-7xl hover:text-blue-400 ease-in duration-700">Samrat Roy</p>
        <p className="text-gray-400 sm:text-7xl text-4xl">I'm a Full Stack Engineer</p>
        <p className="max-w-[700px] mt-4 text-gray-400">Hi! I am Samrat , a full stack engineer from India. Checkout my DSA profile and recent projects.Lets connect on social handles and feel free to say hello at samratroykdh@gmail.com</p>
        <div>
        <button  className="border-2 rounded-md shadow-xl shadow-blue-400 border-white text-white mt-4 hover:bg-blue-400 ease-in duration-700 hover:border-blue-400 px-6 py-3 "><a href={Samrat_Resume} download={Samrat_Resume.pdf}>Download Resume</a></button>
      </div>
      </Fade>
      </div>

    </div>
  )
}

export default Home