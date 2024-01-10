import React from 'react'
import Fade from 'react-reveal/Fade' 
import LightSpeed from 'react-reveal/LightSpeed';
import { FaLinkedin,FaGithub,FaTwitter,FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
    <div name='contact' className="contact w-full h-screen bg-[#0a192f] flex justify-center items-center">
        <form method='POST' action="https://getform.io/f/f0317935-6963-44db-b34d-8bf5af1556dd" className="flex flex-col max-w-[600px] w-full">
        <Fade left>
            <div >
           
                <p className=" name text-4xl font-bold inline border-b-4 text-white hover:text-blue-400 ease-in duration-700 border-blue-400  py-2 ">Let's Work Together</p>
                
            </div>
            </Fade>
            <input className="border-2 bg-blue-200 p-2 mt-16 border-blue-400 rounded-xl " type="text" placeholder='Name' name='name'/>
            <input className="border-2 p-2 bg-blue-200 my-4 border-blue-400 rounded-xl " type="text" placeholder='E-mail' name='e-mail'/>
            <textarea className="p-2 border-2 bg-blue-200 border-blue-400 rounded-xl" rows={10} placeholder='Message' />
            <Fade left>
            <button className="border-2 rounded-md border-white text-white mt-4 hover:bg-blue-400 ease-in duration-700 hover:border-blue-400 px-4 py-3 ">Shoot !!!</button>
            </Fade>
            <div className="flex md:hidden justify-between text-white mt-16 space-x-4 bg-transparent">
              <LightSpeed>
          <div><a href="https://www.instagram.com/not_samrat_18/"><FaInstagram size={30}/></a></div>
          <div><a href="https://www.linkedin.com/in/samrat-roy-58a638229/"><FaLinkedin size={30}/></a></div>
          <div><a href="https://github.com/Samysr17"><FaGithub size={30}/></a></div>
          <div><a href="https://twitter.com/SamratR02594473"><FaTwitter size={30}/></a></div>
          <div><a href="https://mail.google.com/"><HiOutlineMail size={30}/></a></div>
          <div><a href="/"><BsFillPersonLinesFill size={30}/></a></div>
          </LightSpeed>
        </div>
        </form>
    </div>

    </div>
    
  )
}

export default Contact