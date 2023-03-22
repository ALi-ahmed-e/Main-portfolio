import React from 'react'
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
import { HiCode } from 'react-icons/hi'
import { BsArrowRightShort } from 'react-icons/bs'
import { SiJavascript, SiNodedotjs, SiMongodb, SiExpress, SiPassport, SiReact, SiRedux, SiTailwindcss, SiHtml5, SiCss3, SiFirebase, SiBootstrap} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'








const Projects = () => {

    const fbstack = [<SiReact size='20' className=' text-sky-600 ' />, <SiCss3 size='20' className=' text-sky-600 ' />, <SiTailwindcss size='20' className=' text-teal-500 ' />, <SiRedux size='20' className=' text-purple-600 ' />, <SiFirebase size='20' className=' text-yellow-500 ' />]
    const njsstack = [<SiHtml5 size='20' className=' text-orange-500 ' />, <SiCss3 size='20' className=' text-sky-600 ' />, <SiJavascript size='20' className=' text-yellow-400 rounded-sm ' />, <SiBootstrap size='20' className=' text-purple-500 ' />, <TbApi size='20' className=' dark:text-white ' />]

    const projects = [
        {
            image: ONFLEEK,
            describtion: 'Fullstack E-commerce web application made using React.js & firebase & css & tailwindcss',
            demoLink: 'https://on-fleek.netlify.app/',
            githubLink: false,
            usedTechnologies: fbstack
        },
        {
            image: Chat_app,
            describtion: 'Fullstack realtime chat application made using React.js & firebase & css & tailwindcss',
            demoLink: 'https://melodic-croquembouche-aca439.netlify.app/',
            githubLink: 'https://github.com/ALi-ahmed-e/Chat_app',
            usedTechnologies: fbstack
        },
        {
            image: photosite,
            describtion: 'Fullstack social media web application made using React.js & firebase & css & tailwindcss',
            demoLink: 'https://golden-crepe-2046fa.netlify.app',
            githubLink: 'https://github.com/ALi-ahmed-e/Photo-site',
            usedTechnologies: fbstack
        },
        {
            image: moviesapp,
            describtion: 'Fullstack movies web application made using React.js & firebase & css & tailwindcss',
            demoLink: 'https://thunderous-semolina-97fff5.netlify.app/',
            githubLink: 'https://github.com/ALi-ahmed-e/Movies-app',
            usedTechnologies: fbstack
        }, {
            image: cruds,
            describtion: 'Fullstack crud web application made using React.js & firebase & css & tailwindcss',
            demoLink: 'https://wonderful-dieffenbachia-4230cf.netlify.app/',
            githubLink: 'https://github.com/ALi-ahmed-e/Crud-s',
            usedTechnologies: fbstack
        }, {
            image: gitrepos,
            describtion: ' github repos website made using React.js & firebase & css & tailwindcss',
            demoLink: 'https://rainbow-sherbet-ebe763.netlify.app/',
            githubLink: 'https://github.com/ALi-ahmed-e/Git-hub-users',
            usedTechnologies: fbstack.concat([<TbApi size='20' className=' darek:text-white ' />]).filter(e => e != fbstack[fbstack.length - 1] && e != fbstack[fbstack.length - 2] && e)
        }, {
            image: chatapp,
            describtion: ' Fullstack realtime chat web application made using React.js & firebase & css & tailwindcss',
            demoLink: 'https://scintillating-torte-9a3579.netlify.app',
            githubLink: 'https://github.com/ALi-ahmed-e/chat-app',
            usedTechnologies: fbstack
        }, {
            image: socialmediaaapp,
            describtion: ' Fullstack social media web application made using React.js & firebase & css & bootstrap',
            demoLink: 'https://superlative-cobbler-14d8a5.netlify.app',
            githubLink: 'https://github.com/ALi-ahmed-e/social-media-website',
            usedTechnologies: fbstack.concat([<SiBootstrap size='20' className=' text-purple-700  mx-1' />]).filter(e => e != fbstack[fbstack.length - 2] && e)
        }, {
            image: ecommerce,
            describtion: ' e-commerce website  made using vanilla javascript  & css & bootstrap',
            demoLink: 'https://sparkling-pothos-ae393e.netlify.app',
            githubLink: 'https://github.com/ALi-ahmed-e/e-commerce-witout-database',
            usedTechnologies: njsstack
        }, {
            image: weatherapp,
            describtion: ' Weather website  made using vanilla javascript  & css ',
            demoLink: 'https://meek-squirrel-cf2189.netlify.app/',
            githubLink: 'https://github.com/ALi-ahmed-e/Weather-app',
            usedTechnologies: njsstack
        },


    ]







    return (
        <div className=' w-full py-5 my-10  dark:text-white'>
            <h1 className=' dark:text-slate-100 text-3xl text-center my-10 tracking-tight font-extrabold'>Projects</h1>
            <div className=' w-full h-full text-center'>


                {projects.map(project => <div key={Math.random()} className=' inline-block m-2 sm:m-10 px-2 py-2 bg-white  dark:bg-slate-800 w-[95%] max-w-[280px] dark:shadow-none shadow-[0_0_25px_#726969] rounded-xl  '>

                    <div className='flex flex-col w-full h-full'>
                        <img src={project.image} className='w-full h-full rounded-lg relative ring-1 self-center' alt="" />
                        <div className=' w-[90%] h-[.5px] bg-slate-500 mt-2 mx-auto' />

                        <p className=' opacity-90 text-sm my-2'>{project.describtion}</p>
                        <div className=' py-2 flex items-center justify-around bg-slate-900/30 rounded-xl mb-2'>
                            {project.usedTechnologies?.map(e => <span key={Math.random()}>{e}</span>)}

                        </div>
                        <div className=' flex flex-row  justify-around'>


                            <a target="true" href={project.demoLink} className="btn w-[75%]   text-[white] text-[17px] font-medium tracking-wider flex items-center justify-center shadow-[inset_0_0_1.6em_-0.6em_#714da6] overflow-hidden relative h-[2.2em] pl-[1.2em] pr-[3.3em] p-[0.35em] rounded-[0.9em] border-[none] bg-[#a370f0]">
                                Demo
                                <div className="icon  absolute flex items-center justify-center h-[1.9em] w-[2.2em] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] transition-all duration-[0.3s] ml-[1em] rounded-[0.7em] right-[0.3em] bg-white">
                                    <BsArrowRightShort className='w-[1.1em] transition-transform duration-[0.3s] text-[#7b52b9]' size={'30'} />
                                </div>
                            </a>



                            {project.githubLink ? <a target="true" href={project.githubLink} className=' bg-[#7b52b9] text-white  flex items-center justify-center hover:bg-[#663e9e] transition-colors rounded-[0.9em]  w-[18%] h-[2.3em]'><HiCode size='20' /></a>
                                : <span className=' bg-[#7b52b9] text-white  flex items-center justify-center opacity-80 cursor-not-allowed transition-colors rounded-[0.9em]  w-[18%] h-[2.3em]'><HiCode size='20' /></span>
                            }


                        </div>
                    </div>
                </div>)}


























            </div>


        </div>
    )
}

export default Projects