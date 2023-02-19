import React from 'react'
import { SiJavascript, SiReact, SiJquery, SiRedux, SiTailwindcss, SiHtml5, SiCss3, SiFirebase, SiBootstrap, SiGithub, SiAdobephotoshop } from 'react-icons/si'
import {RxKeyboard} from 'react-icons/rx'


const Skills = () => {
    return (
        <div className=' mx-auto   my-20 dark:text-slate-100 overflow-hidden py-10 w-[100%]   flex  items-center flex-col'>
            <div className='text-3xl mx-auto font-semibold dark:text-slate-100 self-start my-8 '>Skills</div>
            <div className='text-center '>


                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Html
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        {/* <img src={Html} className='w-10' alt="" /> */}
                        <SiHtml5 size='37' className=' text-orange-500 ' />
                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[96%] bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg'></div>
                        </div>
                    </div>

                </div>


                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Css
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiCss3 size='37' className=' text-sky-600 ' />                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[96%] bg-gradient-to-r from-indigo-700 to-blue-500 rounded-lg'></div>
                        </div>
                    </div>

                </div>


                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Javascript
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiJavascript size='37' className=' text-yellow-400 rounded-md mx-1 ' />                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[97%] bg-gradient-to-r from-green-400 to-blue-600 rounded-lg'></div>
                        </div>
                    </div>

                </div>


                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Jquery
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiJquery size='37' className=' text-sky-600 ' />                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[80%] bg-gradient-to-r from-cyan-500 to-emerald-200 rounded-lg'></div>
                        </div>
                    </div>

                </div>


                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    React.js
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiReact size='37' className=' text-sky-500  mx-1' />                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[99%] bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg'></div>
                        </div>
                    </div>

                </div>


                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Tailwind
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiTailwindcss size='37' className=' text-teal-500 ' />                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[99%] bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-lg'></div>
                        </div>
                    </div>

                </div>



                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Redux
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiRedux size='37' className=' text-purple-600 ' />                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[92%] bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg'></div>
                        </div>
                    </div>

                </div>



                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Firebase
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiFirebase size='37' className=' text-yellow-500 ' />
                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[90%] bg-gradient-to-r from-cyan-500 to-yellow-500 rounded-lg'></div>
                        </div>
                    </div>

                </div>

                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Bootstrap
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiBootstrap size='37' className=' text-purple-800  mx-1' />
                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[60%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'></div>
                        </div>
                    </div>

                </div>

                <div className=' w-[50%] h-[.5px] bg-slate-500/60 mx-auto my-6' />

                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Github
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiGithub size='37' className=' text-black  mx-1' />
                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[90%] bg-gradient-to-r from-indigo-700 to-blue-900 rounded-lg'></div>
                        </div>
                    </div>

                </div>

                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    photoshop
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <SiAdobephotoshop size='37' className=' text-slate-800 h-[36px] bg-blue-500 rounded-md  mx-1' />
                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[80%] bg-gradient-to-r from-indigo-400 to-blue-500 rounded-lg'></div>
                        </div>
                    </div>

                </div>
                <div className=' cursor-pointer w-56 sm:w-64 py-3  ring-2 ring-sky-800  hover:ring-1 hover:ring-sky-700 hover:scale-110 hover:shadow-2xl transition-all inline-block m-5 h-28 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-xl'>
                    Typing speed
                    <div className='w-full h-[50px] flex items-center justify-center'>
                        <RxKeyboard size='37' className='  h-[36px] rounded-md  mx-1' />
                        <div className=' w-[80%] h-3 rounded-lg bg-slate-700'>
                            <div className='h-3 w-[90%] bg-gradient-to-r from-emerald-700 to-lime-500 rounded-lg'></div>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Skills