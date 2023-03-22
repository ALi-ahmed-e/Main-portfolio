import React from 'react'
import { SiJavascript, SiNodedotjs, SiMongodb, SiExpress, SiPassport, SiReact, SiJquery, SiRedux, SiTailwindcss, SiHtml5, SiCss3, SiFirebase, SiBootstrap, SiGithub, SiAdobephotoshop, SiJsonwebtokens } from 'react-icons/si'
import { RxKeyboard } from 'react-icons/rx'
import { TbApi } from 'react-icons/tb'


const Skills = () => {
    return (
        <div className=' mx-auto   my-20 dark:text-slate-100 overflow-hidden py-10 w-[100%]   flex  items-center flex-col'>
            <div className='text-3xl mx-auto tracking-tight font-extrabold dark:text-slate-100 self-start my-8 '>Skills</div>
            <div className='text-center '>


                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-yellow-500 via-orange-600 to-yellow-500 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Html
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiHtml5 size='37' className=' text-orange-500 ' />
                            </div>
                        </div>

                    </div>
                </div>




                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-sky-500 via-emerald-500 to-blue-500 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Css
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiCss3 size='37' className=' text-sky-600 ' />
                            </div>
                        </div>

                    </div>
                </div>



                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-sky-500 to-emerald-500 via-yellow-400 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Javascript
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiJavascript size='37' className=' text-yellow-400 rounded-md mx-1 ' />
                            </div>
                        </div>

                    </div>
                </div>


                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-sky-500  via-emerald-500 to-blue-600 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Jquery
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiJquery size='37' className=' text-sky-600 ' />
                            </div>
                        </div>

                    </div>
                </div>


                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-sky-600  via-blue-500 to-blue-600 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            React.js
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiReact size='37' className=' text-sky-500  mx-1' />
                            </div>
                        </div>

                    </div>
                </div>



                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-emerald-600  via-emerald-500 to-emerald-600 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Tailwind
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiTailwindcss size='37' className=' text-teal-500 ' />
                            </div>
                        </div>

                    </div>
                </div>



                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-purple-600  via-indigo-300 to-purple-600 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Redux
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiRedux size='37' className=' text-purple-600 ' />
                            </div>

                        </div>

                    </div>
                </div>



                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-purple-400  via-indigo-500 to-purple-400 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Bootstrap
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiBootstrap size='37' className=' text-purple-800  mx-1' />

                            </div>

                        </div>

                    </div>
                </div>


                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-yellow-400  via-orange-400 to-yellow-400 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Firebase
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiFirebase size='37' className=' text-yellow-500 ' />

                            </div>

                        </div>

                    </div>
                </div>


                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-green-400  via-emerald-400 to-green-400 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Node.js
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiNodedotjs size='37' className=' text-green-600 ' />

                            </div>

                        </div>

                    </div>
                </div>




                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-slate-400  via-gray-400 to-slate-400 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            express.js
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiExpress size='37' className=' dark:text-white ' />

                            </div>

                        </div>

                    </div>
                </div>




                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-green-500  via-green-700 to-green-500 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Mongo DB
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiMongodb size='37' className=' text-green-600 ' />

                            </div>

                        </div>

                    </div>
                </div>




                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-green-500  via-green-700 to-green-500 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Passport.js
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiPassport size='37' className=' text-sky-600 ' />

                            </div>

                        </div>

                    </div>
                </div>







                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-sky-500  via-indigo-500 to-green-500 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            jsonwebtokens
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiJsonwebtokens size='37' className='  h-[36px] rounded-md  mx-1' />

                            </div>

                        </div>

                    </div>
                </div>





                <div className=' w-[50%] h-[.5px] bg-slate-500/60 mx-auto my-6' />

                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-sky-900  via-slate-500 to-sky-900  p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Github
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiGithub size='37' className=' text-black  mx-1' />

                            </div>

                        </div>

                    </div>
                </div>



                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-blue-500  via-blue-700 to-blue-500 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            photoshop
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <SiAdobephotoshop size='37' className=' text-slate-800 h-[36px] bg-blue-500 rounded-md  mx-1' />

                            </div>

                        </div>

                    </div>
                </div>


                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-slate-400  via-slate-600 to-slate-400 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Rapid Typing
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <RxKeyboard size='37' className='  h-[36px] rounded-md  mx-1' />

                            </div>

                        </div>

                    </div>
                </div>




                <div className=" cursor-pointer  w-[120px]  h-28 shadow-xl   items-center justify-center hover:scale-110 rounded-3xl hover:shadow-2xl transition-all inline-block m-3">
                    <div className=" h-full w-full rounded-3xl bg-gradient-to-r from-emerald-200  via-sky-400 to-emerald-200 p-[1px]">

                        <div className="flex h-full flex-col rounded-3xl w-full items-center justify-center bg-slate-50 dark:bg-gray-900 shadow-xl back">
                            Apis
                            <div className='w-full h-[50px] flex items-center justify-center'>
                                <TbApi size='37' className=' darek:text-white ' />

                            </div>

                        </div>

                    </div>
                </div>










            </div>

        </div>
    )
}

export default Skills