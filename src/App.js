import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import {useLayoutEffect, useRef, useState } from 'react';
import { MoonIcon, SunIcon, TvIcon } from '@heroicons/react/24/outline';
function App() {

  const [AppTheme, setAppTheme] = useState('');
  const theme = localStorage.getItem('theme')
  const system = useRef()
  const dark = useRef()
  const light = useRef()
  const [sw, setsw] = useState(theme);



  const detecttheme = () => {
    switch (sw) {
      case 'light':
        light.current.style.display = ''
        system.current.style.display = 'none'
        dark.current.style.display = 'none'

        document.body.style.background = "linear-gradient(360deg,#f4f7fc,#ffffff)"
        setAppTheme('')

        


        break;
      case 'dark':
        dark.current.style.display = ''
        system.current.style.display = 'none'
        light.current.style.display = 'none'
        setAppTheme('dark')
        document.body.style.background = 'linear-gradient(360deg,#070b16,#0f172a)'

        


        break;
      case 'system':
        
        system.current.style.display = ''
        dark.current.style.display = 'none'
        light.current.style.display = 'none'


        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
          document.body.style.background = 'linear-gradient(360deg,#070b16,#0f172a)'
          setAppTheme('dark')

        }
        else {
          document.body.style.background = "linear-gradient(360deg,#f4f7fc,#ffffff)"
          setAppTheme('')
        }
        break;

      default:
        localStorage.setItem('theme', 'system')
        setsw('system')
        system.current.style.display = ''
        dark.current.style.display = 'none'
        light.current.style.display = 'none'

        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
          document.body.style.background = 'linear-gradient(360deg,#070b16,#0f172a)'
          setAppTheme('dark')

        } else {
          document.body.style.backgroundColor = "linear-gradient(360deg,#f4f7fc,#ffffff)"
          setAppTheme('')
        }
        break;

    }
  }





  useLayoutEffect(() => {

    detecttheme()

  }, [sw]);


  const switchtheme = () => {
    if (sw == 'dark') {
      setsw('light')
      localStorage.setItem('theme', 'light')
    } else if (sw == 'light') {
      setsw('system')
      localStorage.setItem('theme', 'system')
    } else if (sw == 'system') {
      setsw('dark')
      localStorage.setItem('theme', 'dark')
    }

  }





  return (
    <div className={AppTheme}>
      <div className='w-fit mx-auto flex items-center justify-around' onClick={switchtheme}>
        <div ref={light} className=' flex items-center justify-center w-10 h-7 rounded-[4px] my-4 bg-slate-100 cursor-pointer dark:bg-slate-700 dark:hover:bg-sky-900 dark:text-white hover:bg-sky-200 transition-all'> < SunIcon className='w-6' /></div>
        <div ref={dark} className=' flex items-center justify-center w-10 h-7 rounded-[4px] my-4 bg-slate-100 cursor-pointer dark:bg-slate-700 dark:hover:bg-sky-900 dark:text-white hover:bg-sky-200 transition-all'> < MoonIcon className='w-6' /></div>
        <div ref={system} className=' flex items-center justify-center w-10 h-7 rounded-[4px] my-4 bg-slate-100 cursor-pointer dark:bg-slate-700 dark:hover:bg-sky-900 dark:text-white hover:bg-sky-200 transition-all'> <TvIcon className='w-6' /></div>
      </div>
      <div className=' w-[95%] bg-slate-700 mx-auto h-[1px]' />

      <Home />


      <Footer />
    </div >
  );
}

export default App;
