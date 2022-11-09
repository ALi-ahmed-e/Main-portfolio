import { CodeBracketIcon, SignalIcon } from '@heroicons/react/20/solid'
import React from 'react'
import photosite from './imgs/PhotoSite.png'
const Projects = () => {
    return (
        <div className=' w-full h-[450px] my-10  text-slate-100'>
            <h1 className='font-semibold text-3xl text-center my-10'>Projects</h1>
            <div className=' w-full h-full text-center'>

                
                <div className=' w-56 h-36 m-10 rounded-2xl  inline-block  overflow-hidden cursor-pointer'>
                    <img src={photosite} className='w-full h-full rounded-xl relative' alt="" />
                    <div className=' rounded-xl w-full h-full bg-black/30  flex justify-around items-center backdrop-blur-md translate-y-[-100%] opacity-0 transition-all duration-300 hover:opacity-100'>
                        <a href='https://github.com/ALi-ahmed-e/Photo-site' className='flex flex-col items-center hover:text-indigo-600 transition-all'><CodeBracketIcon className=' w-5' />Code</a>
                        <a href='https://golden-crepe-2046fa.netlify.app' className='flex flex-col items-center hover:text-red-700 transition-all'><SignalIcon className=' w-5' />Demo</a>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Projects