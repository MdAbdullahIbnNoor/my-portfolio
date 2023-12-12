import React from 'react'

import forumDashboard from '../../../assets/website/forumDashboard.png'
import forumDashboard2 from '../../../assets/website/forumDashboard2.png'
import forumPost from '../../../assets/website/forumPost.png'

import groupPost from '../../../assets/website/groupPost.png'
import groupAssignmentSubmit from '../../../assets/website/groupAssignmentSubmit.png'
import groupFetures from '../../../assets/website/groupFetures.png'

import brandAbout from '../../../assets/website/brandAbout.png'
import brandPage from '../../../assets/website/brandPage.png'
import brandPost from '../../../assets/website/brandPost.png'

const Projects = () => {
  return (
    <section className="px-4 py-24 container mx-auto">
      <h2 className='text-5xl font-bold mb-6 text-center'>Projects</h2>
      <p className='text-lg w-6/12 text-center mx-auto mb-16'>In my learning journey I have created some information based Web Application with Good Design sense. Hope you find it wonderful</p>
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Project 1: Forum Application</h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            This Forum application is a full-stack web platform developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a space for users to engage in conversations through posted messages. The application is designed to be responsive across various devices, ensuring a seamless user experience.
          </p>
          <a href="https://forum-page-53cdf.web.app/" className="w-full btn bg-gradient-to-r to-blue-400 from-violet-600 text-white sm:w-auto">Learn More</a>
        </div>
        <div className="w-full h-full">
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-contain mb-6 rounded shadow-lg h-28 sm:h-48 lg:h-fit w-28 sm:w-48 xl:w-56"
                src={forumDashboard}
                alt=""
              />
              <img
                className="object-contain w-20 h-fit rounded shadow-lg sm:h-32 lg:h-fit sm:w-32 lg:w-40"
                src={forumDashboard2}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-contain w-40 h-fit rounded shadow-lg sm:h-64 lg:h-fit sm:w-64 lg:w-80"
                src={forumPost}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Project 2: Online Group Study Web Application</h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            The Online Group Study web application is a platform that facilitates collaborative learning by allowing users to create assignments, complete them, and grade their friends' assignments. Below are the features and usage guidelines for this web application.
          </p>
          <a href="https://online-group-study.web.app/" className="w-full btn bg-gradient-to-r to-blue-400 from-violet-600 text-white sm:w-auto">Learn More</a>
        </div>
        <div className="w-full h-full">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src={groupAssignmentSubmit}
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={groupPost}
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={groupFetures}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Project 3: Electronic Device Store</h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            The Electronic Device Store is a full-stack web application for buying and exploring electronic devices. It's divided into different sections for six top electronic brands, each featuring a diverse range of products.


          </p>
          <a href="https://brand-store-97be7.web.app/" className="w-full btn bg-gradient-to-r to-blue-400 from-violet-600 text-white sm:w-auto">Learn More</a>
        </div>
        <div className="w-full h-full">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src={brandAbout}
              alt=""
            />
            <img
              className="object-contain w-fit h-fit col-span-1 rounded shadow-lg"
              src={brandPage}
              alt=""
            />
            <img
              className="object-contain w-fit h-fit rounded shadow-lg"
              src={brandPost}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects