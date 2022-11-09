import React from 'react'
import Footer from './Footer'
import imag from './Me-removebg.png'
import Projects from './Projects'
import Skills from './Skills'
import {ArrowRightIcon} from '@heroicons/react/20/solid'

const Home = () => {
    return (
        <div>
            <div className='flex w-full items-center flex-col-reverse lg:flex-row   justify-around my-24 '>
                <div className='flex flex-col items-center'>
                    <div className=' max-w-[600px] my-11 flex flex-col items-center'>
                        <div className=' text-4xl font-semibold font-mono text-slate-200 self-center lg:self-start'>
                            Hi I'm Ali Web Dev
                        </div>
                        <p className=' text-slate-500 my-5'>
                            I can design and build your website or web application using a lot of web technologies like react.Js and tailwind and more
                        </p>

                    </div>
                    <button className='  hover:bg-indigo-800  px-3 py-2 bg-indigo-700 text-white rounded-lg'>Contact with me <ArrowRightIcon  className='w-5 inline'/> </button>
                </div>

                <div className="blob">

                    <img src={imag} alt="" />

                </div>



            </div>

            <Skills />

            <Projects />

            <Footer />

        </div>
    )
}

export default Home