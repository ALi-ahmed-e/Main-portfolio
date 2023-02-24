import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { BiLoaderAlt } from "react-icons/bi";
import { FcCheckmark} from "react-icons/fc";
const Contact = () => {
    const [loading, setloading] = useState(false);
    const [sent, setsent] = useState(false);

    
    const sendEmail = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const message = e.target.message.value
        setloading(true)
        const messagedata = {
            user_name: name,
            user_email: email,
            message: `you have new message from${name}
            message is ${message}
            
            ${name}'s email is ${email}
            `}

        emailjs.send('service_6jgt7j8', 'template_bwbvaks', messagedata, '1FFkczl_OTSigEj1Q').then((result) => {
            e.target.name.value = ''
            e.target.email.value = ''
            e.target.message.value = ''
            setloading(false)
            setsent(true)
        }, (error) => {
            console.log(error.text);
            setloading(false)
        });
    }



    return (
        <div>





            {sent && <div id='h' onClick={(e)=>e.target.id=='h'&&setsent(false)} className=' fixed bg-black/10 backdrop-blur-md left-0 right-0 top-0 bottom-0 flex items-center justify-center'>
                <div
                    className=" border-[1px] border-sky-400 rounded-lg"
                >
                    <div className="relative w-full h-full max-w-md md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                                onClick={()=>setsent(false)}
                                type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-hide="popup-modal"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-6 text-center">
                             
                                <FcCheckmark size={20}  className="mx-auto mb-4  w-14 h-14 border-4 rounded-full border-green-600 " />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Your message sent successfully we will reply soon
                                </h3>
                                <button
                                onClick={()=>setsent(false)}
                                    type="button"
                                    className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                >
                                    Ok
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>

















            </div>}







            <section >
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <form onSubmit={sendEmail} className="space-y-8">


                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your Name
                            </label>
                            <input
                                name='name'
                                type="text"
                                id="name"
                                className="shadow-sm bg-gray-50 border-[1px] border-slate-600  dark:border-none outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                                placeholder="John doe"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                name='email'
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border-[1px] border-slate-600  dark:border-none outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                name='message'
                                id="message"
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm  border-[1px] border-slate-600  dark:border-none dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
                                placeholder="Your message..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 flex px-5  text-sm font-medium transition-all text-center bg-gradient-to-tr hover:opacity-95 from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-900 text-white rounded-lg "

                        >
                            Send message
                            {loading && <BiLoaderAlt size='20' className=' ml-2 -mr-2 animate-spin' />}
                        </button>
                    </form>
                </div>
            </section>

















        </div>
    )
}

export default Contact