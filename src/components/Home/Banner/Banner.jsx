import React from 'react';
import banner from '../../../assets/banner.png';
import image from '../../../assets/dp2.png';

const Banner = () => {
    return (
        <div className='lg:h-[700px]'>
            <section
                className="dark:bg-gray-800 dark:text-gray-800"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover', // Adjust according to your needs
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-10/12 flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96">
                        <img src={image} alt="" className="object-contain h-72 w-72 sm:h-80 lg:h-[500px] lg:w-[360px] dark:bg-gradient-to-r dark:to-blue-400 dark:from-violet-600  rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-xl lg:text-left lg:pr-96">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl">Ac mattis
                            <span className="dark:text-blue-400">senectus</span>erat pharetra
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-gradient-to-r dark:to-blue-400 dark:from-violet-600 dark:text-gray-200">Suspendisse</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;
