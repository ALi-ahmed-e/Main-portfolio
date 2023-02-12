import React from 'react'
import imag from './imgs/Me-removebg.png'
import Projects from './Projects'
import Skills from './Skills'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
const Home = () => {
    return (
        <div>
            <div className='flex w-full items-center flex-col-reverse lg:flex-row   justify-around my-24  '>
                <div className='flex flex-col items-center'>
                    <div className=' max-w-[600px] my-11 flex flex-col items-center'>
                        <div className=' sm:text-4xl text-[20px] pl-4 font-semibold font-mono text-slate-800 dark:text-slate-200 self-center lg:self-start'>
                            <div>
                                <h1 className='   overflow-hidden whitespace-nowrap tracking-[0.15em] animate-[typing_3s_steps(30,end)] mx-auto my-0 border-solid;'>
                                    Hi I'm Ali Web Dev
                                    </h1>
                            </div>
                        </div>
                        <p className=' dark:text-slate-400 text-slate-700 my-5 px-2'>
                            I can design and build your website or web application using a lot of web technologies like react.Js and tailwind and more
                        </p>

                    </div>
                    <a href='https://wa.me/201277137499' className='  hover:from-cyan-700 hover:to-blue-800 px-3 py-2 bg-gradient-to-r from-cyan-600 to-blue-700  text-white rounded-lg'>Contact  with me <ArrowRightIcon className='w-5 inline' /> </a>
                </div>

                <div className="blob  border-dotted   border-2 border-slate-900  ring-2  bg-gradient-to-t from-[#7309ec]  dark:to-[#454a75]  to-[#1f2669]">

                    <img src={imag} alt="" />

                </div>



            </div>
            <div className=' w-[65%] bg-slate-700 mx-auto h-[1px]' />
            <Skills />
            <div className=' w-[95%] bg-slate-700 mx-auto h-[1px]' />
            <Projects />








        </div>
    )
}

export default Home