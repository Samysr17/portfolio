import React from 'react'

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center">
        <form method='POST' action="https://getform.io/f/f0317935-6963-44db-b34d-8bf5af1556dd" className="flex flex-col max-w-[600px] w-full">
            <div >
                <p className="text-4xl font-bold inline border-b-4 text-white border-blue-400  py-2 ">Let's Work Together</p>
            </div>
            <input className="border-2 bg-blue-200 p-2 mt-16 border-blue-400 rounded-xl " type="text" placeholder='Name' name='name'/>
            <input className="border-2 p-2 bg-blue-200 my-4 border-blue-400 rounded-xl " type="text" placeholder='E-mail' name='e-mail'/>
            <textarea className="p-2 border-2 bg-blue-200 border-blue-400 rounded-xl" rows={10} placeholder='Message' />
            <button className="border-2 rounded-md border-white text-white mt-4 hover:bg-blue-400 ease-in duration-700 hover:border-blue-400 px-4 py-3 ">Shoot !!!</button>
        </form>

    </div>
  )
}

export default Contact