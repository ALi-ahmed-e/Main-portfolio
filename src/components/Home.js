import React, { useState } from 'react'
import imag from './imgs/Me-removebg.png'
import Projects from './Projects'
import Skills from './Skills'
import { SiJavascript, SiNodedotjs } from "react-icons/si";
import { FaLongArrowAltRight, FaReact, FaCode } from "react-icons/fa";
import Contact from './Contact';


const Home = () => {
    const [bb, setbb] = useState(false);
    setTimeout(() => {
        setbb(true)
    }, 3000);



    return (
        <div>
            <div className='flex w-full items-center flex-col-reverse lg:flex-row   justify-around my-24  '>
                <div className='flex flex-col items-center'>
                    <div className=' max-w-[600px] my-11 flex flex-col items-center'>
                        <div className=' sm:text-4xl text-[20px] pl-4 font-semibold font-mono text-slate-800 dark:text-slate-200 self-center lg:self-start'>
                            <div>
                                <h1 className={` flex items-center justify-center flex-col  transition-all overflow-hidden whitespace-nowrap tracking-[0.15em] animate-[typing_3s_steps(30,end)] mx-auto my-0  py-1`}>
                                <div className={` ${bb ? 'w-[57%]' : 'w-[0%]'} rnbo transition-all duration-1000 h-[1px] bg-gradient-to-r from-teal-600 to-purple-600 `} />
                                    Hi I'm Ali                                     
                                    <div className={` ${bb ? 'w-full' : 'w-[0%]'} rnbo transition-all duration-1000 h-[1px] bg-gradient-to-r from-teal-600 to-purple-600 `} />
                                    <span>Full stack Web Dev</span>
                                    <div className={` ${bb ? 'w-full' : 'w-[0%]'} rnbo transition-all duration-1000 h-[1px] bg-gradient-to-r from-teal-600 to-purple-600 `} />

                                </h1>
                                
                            </div>
                        </div>
                        <p className=' dark:text-slate-400 text-slate-700 my-5 px-2'>
                            I can design and build your website or web application using a lot of web technologies like react.Js  node.js express firebase tailwind  and more
                        </p>

                    </div>
                    <a href='https://wa.me/201277137499' className='  hover:from-cyan-700 hover:to-blue-800 px-3 py-2 bg-gradient-to-r from-cyan-600 to-blue-700  text-white rounded-lg'>Contact  with me <FaLongArrowAltRight size={20} className=' inline' /> </a>
                </div>

                <div className=' bg-black/0 w-fit h-fit flex items-center flex-row '>

                    <div className=' w-11 h-11 bg-gradient-to-br from-[#0099b8]/20 to-[#5f0979]/20 rounded-lg absolute backdrop-blur-md  self-end flex items-center justify-center  ml-52  animate-bounce '>

                        <FaReact size='30' className='  text-sky-500 rounded-md' />
                    </div>



                    <div className=" self-center   w-[95%] h-[280px] max-w-[300px] min-w-[280px] overflow-hidden flex justify-center items-center  rounded-[93%_90%_95%_87%]     border-4 dark:border-slate-900 border-whtie  ring-2  bg-gradient-to-t from-[#7309ec]  dark:to-[#454a75]  to-[#1f2669]">

                        <img className=' w-[200px]' src={imag} alt="" />


                    </div>

                    <div className=' w-11 h-11 rounded-lg absolute backdrop-blur-md  self-center flex items-center justify-center  -ml-5 animate-bounce '>

                        <SiNodedotjs size='30' className=' text-green-700  rounded-md' />
                    </div>


                    <div className=' w-11 h-11 rounded-lg absolute backdrop-blur-md  self-start flex items-center justify-center  ml-52 mt-5 animate-bounce '>

                        <SiJavascript size='30' className='  text-yellow-400  rounded-md' />
                    </div>


                </div>



            </div>
            <div className=' w-[65%] bg-slate-700 mx-auto h-[1px]' />
            <Skills />
            <div className=' w-[95%] bg-slate-700 mx-auto h-[1px]' />
            <Projects />

            <div className=' w-[95%] bg-slate-700 mx-auto h-[1px]' />
            <Contact />





        </div>
    )
}

export default Home