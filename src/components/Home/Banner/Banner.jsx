import React from 'react';
import banner from '../../../assets/banner.png';
import image from '../../../assets/dp2.png';
import logo from "../../../assets/logo.png";

const Banner = () => {
    return (
        <div>

            <div className='lg:h-[700px]'>
                <section
                    className="bg-gray-800 text-gray-800"
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: 'cover', // Adjust according to your needs
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div>
                        <header className="px-4 py-3 bg-2 text-gray-100">
                            <div className="flex justify-between h-16 mx-auto">
                                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                                    <img src={logo} className="lg:w-16 w-16" />
                                </a>
                                <ul className="items-stretch hidden space-x-3 md:flex mr-10">
                                    <li className="flex">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 mb-7 text-gray-100 btn-md bg-gradient-to-tr text-base from-blue-500 to-violet-600 rounded-xl border-gray-800 shadow-xl">Home</a>
                                    </li>
                                    <li className="flex">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 mb-7 text-gray-100 btn-md bg-gradient-to-tr text-base from-blue-500 to-violet-600 rounded-xl border-gray-800 shadow-xl">Portfolio</a>
                                    </li>
                                    <li className="flex">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 mb-7 text-gray-100 btn-md bg-gradient-to-tr text-base from-blue-500 to-violet-600 rounded-xl border-gray-800 shadow-xl">Projects</a>
                                    </li>
                                    <li className="flex">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 mb-7 text-gray-100 btn-md bg-gradient-to-tr text-base from-blue-500 to-violet-600 rounded-xl border-gray-800 shadow-xl">Contact</a>
                                    </li>
                                </ul>
                                <button className="flex justify-end p-4 md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </header>
                    </div>
                    <div className="w-9/12 flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
                            <img src={image} alt="my profile picture" className="object-contain h-80 w-64 sm:h-80 lg:h-[500px] lg:w-[360px] bg-gradient-to-r to-blue-400 from-violet-600 rounded-full mb-16" />
                        </div>
                        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-xl lg:text-left lg:pr-16">
                            <h1 className="text-3xl font-bold lg:text-3xl">Hello,
                                I am <span className="lg:text-5xl block bg-gradient-to-l from-blue-400 to-violet-600 bg-clip-text text-transparent">Md Abdullah Ibn Noor</span>
                            </h1>
                            <p className="mt-6 mb-8 lg:text-lg mx-2 text-center lg:text-left lg:mx-0">Enthusiastic about leveraging the power of the MERN stack to build robust and scalable applications that leave a lasting impact.
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-gradient-to-r to-blue-400 from-violet-600 text-gray-200">My Resume</a>
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 shadow-xl">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Banner;
