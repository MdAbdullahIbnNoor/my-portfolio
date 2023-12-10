import React from 'react'
import aboutme from '../../../assets/aboutme.jpg';

const AboutMe = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gradient-to-r from-blue-400 to-violet-600 lg:my-24 my-20">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
              src={aboutme}
              alt=""
            />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-4xl lg:text-left  font-semibold tracking-tight text-gray-800 lg:text-4xl dark:text-white text-center">
              About Me
            </h2>

            <p className="block max-w-2xl mt-5 text-gray-500 dark:text-gray-100 text-lg mx-8 text-center lg:text-left lg:mx-0">
            Passionate MERN Stack Web Developer with expertise in creating robust and responsive applications. A problem solver, team player, and tech enthusiast committed to crafting seamless user experiences. Dedicated to code excellence, continuous learning, and delivering impactful web solutions. Let's innovate together! 
            </p>



          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe