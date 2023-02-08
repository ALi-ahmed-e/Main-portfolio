import { CodeBracketIcon, SignalIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import photosite from './imgs/PhotoSite.png'
import moviesapp from './imgs/moviesapp.png'
import gitrepos from './imgs/gitrepos.png'
import cruds from './imgs/cruds.png'
import chatapp from './imgs/chatapp.png'
import socialmediaaapp from './imgs/socialmedia.png'
import ecommerce from './imgs/ecommerce.png'
import weatherapp from './imgs/weatherapp.png'
import ONFLEEK from './imgs/ONFLEEK.png'
import Chat_app from './imgs/Chat_App.png'
import react from './imgs/react.png'
import js from './imgs/js.png'






// KcwJwr1_qWzd9CmLzZdowryejJ_dyV3X2Wwo_5lEuSs




const Projects = () => {






    return (
        <div className=' w-full py-5 my-10  dark:text-white'>
            <h1 className='font-semibold dark:text-slate-100 text-3xl text-center my-10'>Projects</h1>
            <div className=' w-full h-full text-center'>


                <div className='  w-60 h-36 m-10 rounded-2xl   ring-1  inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <img src={ONFLEEK} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://on-fleek.netlify.app/' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-6 absolute'>fullstack E-commerce app</p>
                </div>
                <div className='  w-60 h-36 m-10 rounded-2xl   ring-1  inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <img src={Chat_app} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/Chat_app' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://melodic-croquembouche-aca439.netlify.app/' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-6 absolute'>fullstack Chat app</p>
                </div>

                <div className=' w-60 h-36 m-10 rounded-2xl   ring-1  inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <img src={photosite} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/Photo-site' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://golden-crepe-2046fa.netlify.app' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-4 absolute'>fullstack social media website</p>
                </div>


                <div className='  w-60 h-36 m-10 rounded-2xl  ring-1 inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <img src={moviesapp} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/Movies-app' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://thunderous-semolina-97fff5.netlify.app/' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] mx-12 absolute'>fullstack Movies app</p>
                </div>


                <div className=' w-60 h-36 m-10 rounded-2xl   ring-1  inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <img src={gitrepos} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/Git-hub-users' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://rainbow-sherbet-ebe763.netlify.app/' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-20 absolute'>Github users </p>
                </div>


                <div className='  w-60 h-36 m-10 rounded-2xl    ring-1 inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <img src={cruds} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/Crud-s' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://wonderful-dieffenbachia-4230cf.netlify.app/' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-10 absolute'>fullstack Todo List app</p>
                </div>


                <div className=' w-60 h-36 m-10 rounded-2xl   ring-1  inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <img src={chatapp} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/chat-app' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://scintillating-torte-9a3579.netlify.app' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-16 absolute'>fullstack Chat app</p>
                </div>

                <div className=' w-60 h-36 m-10 rounded-2xl   ring-1  inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={react} className='w-full' alt="" /></div>
                    <img src={socialmediaaapp} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/social-media-website' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://superlative-cobbler-14d8a5.netlify.app' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-4 absolute'>fullstack social media website</p>
                </div>

                <div className=' w-60 h-36 m-10 rounded-2xl   ring-1  inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={js} className='w-full' alt="" /></div>
                    <img src={ecommerce} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/e-commerce-witout-database' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://sparkling-pothos-ae393e.netlify.app' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-14 absolute'>E-commerce app </p>
                </div>

                <div className=' w-60 h-36 m-10 rounded-2xl   ring-1  inline-block  overflow-hidden cursor-pointer'>
                    <div className=' w-9 h-9  absolute z-40 m-3  rounded-lg  backdrop:blur-md p-1'><img src={js} className='w-full' alt="" /></div>

                    <img src={weatherapp} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full text-white  bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a target="true" href='https://github.com/ALi-ahmed-e/Weather-app' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a target="true" href='https://meek-squirrel-cf2189.netlify.app/' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>
                    <p className=' -mt-[138px] ml-16 absolute'>weather app</p>
                </div>



            </div>


        </div>
    )
}

export default Projects