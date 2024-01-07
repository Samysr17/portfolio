import React from 'react';
import html from './assets/html.png';
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import react from './assets/react.png';
import node from './assets/node.png';
import express from './assets/express_1.png';
import mongo from './assets/mongo.png';
import firebase from './assets/firebase.png';
import c from './assets/c.svg';
import cpp from './assets/cpp.svg';
import java from './assets/java.svg';
import python from './assets/python.svg';
import tail from './assets/tailwind.png';
import linux from './assets/Linux.svg';
import pandas from './assets/pandas.svg';
import git from './assets/git.svg';

const Skills = () => {
  return (
    <div name='Skills' className='bg-[#0a192f] text-gray-300 cursor-pointer'>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <p className="text-4xl font-bold inline border-b-4 border-blue-400  py-4">Languages And Frameworks</p>
             <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-4 py-8 ">
                <div>
                    <img className="w-20 mx-auto shadow-xl shadow-orange-600 hover:scale-110 duration-700 ease-in" src={html} alt="/"/>
                    <p>HTML</p>
                </div>
                <div>
                    <img className="w-20 mx-auto shadow-xl shadow-blue-400 hover:scale-110 duration-700 ease-in" src={css} alt="/"/>
                    <p>CSS</p>
                </div>
                <div>
                    <img className="w-20 mx-auto shadow-xl shadow-yellow-300 hover:scale-110 duration-700 ease-in" src={javascript} alt="/"/>
                    <p>JAVSCRIPT</p>
                </div>
                <div>
                    <img className="w-20 mb-4  mx-auto shadow-xl shadow-blue-400  hover:scale-110 duration-700 ease-in" src={react} alt="/"/>
                    <p>REACT</p>
                </div>
                <div>
                    <img className="w-20  mb-4 mx-auto shadow-xl shadow-green-600  hover:scale-110 duration-700 ease-in" src={node} alt="/"/>
                    <p>NODE JS</p>
                </div>
                <div>
                    <img className="w-20 mb-4  mx-auto shadow-xl shadow-green-600  hover:scale-110 duration-700 ease-in" src={mongo} alt="/"/>
                    <p>MONGO DB</p>
                </div>
                <div>
                    <img className="w-20 mb-4  mx-auto shadow-xl shadow-yellow-300 hover:scale-110 duration-700 ease-in" src={firebase} alt="/"/>
                    <p>FIREBASE</p>
                </div>
                <div>
                    <img className="w-20 mb-4  mx-auto shadow-xl shadow-gray-400 hover:scale-110 duration-700 ease-in" src={express} alt="/"/>
                    <p>EXPRESS</p>
                </div>
                <div>
                    <img className="w-20 mx-auto shadow-xl shadow-blue-400  hover:scale-110 duration-700 ease-in" src={c} alt="/"/>
                    <p>C</p>
                </div>
                <div>
                    <img className="w-20 mx-auto shadow-xl shadow-red-400 hover:scale-110 duration-700 ease-in" src={cpp} alt="/"/>
                    <p>C++</p>
                </div>
                <div>
                    <img className="w-20 mx-auto  shadow-xl shadow-yellow-400 hover:scale-110 duration-700 ease-in" src={python} alt="/"/>
                    <p>PYTHON</p>
                </div>
                <div>
                    <img className="w-20 mb-4  mx-auto shadow-xl shadow-red-400 hover:scale-110 duration-700 ease-in" src={java} alt="/"/>
                    <p>JAVA</p>
                </div>
                <div>
                    <img className="w-20 mb-4  mx-auto shadow-xl shadow-blue-400 hover:scale-110 duration-700 ease-in" src={tail} alt="/"/>
                    <p>TAILWIND</p>
                </div>
                <div>
                    <img className="w-20   mb-4 mx-auto shadow-xl shadow-orange-600 hover:scale-110 duration-700 ease-in" src={git} alt="/"/>
                    <p>GIT</p>
                </div>
                <div>
                    <img className="w-20 mb-4  mx-auto shadow-xl shadow-white hover:scale-110 duration-700 ease-in" src={linux} alt="/"/>
                    <p>LINUX</p>
                </div>
                <div>
                    <img className="w-20  mb-4  mx-auto shadow-xl shadow-blue-400 hover:scale-110 duration-700 ease-in" src={pandas} alt="/"/>
                    <p>PANDAS</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Skills