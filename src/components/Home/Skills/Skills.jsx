import React from 'react'
import react from '../../../assets/icons/react.png'
import express from '../../../assets/icons/express-js.svg'
import node from '../../../assets/icons/node-js.svg'
import mongoDB from '../../../assets/icons/mongodb.svg'
import firebase from '../../../assets/icons/firebase.png'
import tailwind from '../../../assets/icons/tailwind-css.svg'
import js from '../../../assets/icons/javascript.svg'
import jwt from '../../../assets/icons/jwt.svg'
import html from '../../../assets/icons/html.svg'
import css from '../../../assets/icons/css.svg'


const Skills = () => {
    return (
        <div>
            <section className="py-12 dark:text-gray-800">
                <div className="container p-4 mx-auto my-6 space-y-1 text-center">
                    <h2 className="pb-3 text-3xl font-bold md:text-4xl">My Skills</h2>
                    <p className='lg:w-6/12 mx-auto `lg:text-lg w-11/12'>Technologies at My Fingertips: Building with React, Node.js, Express.js, MongoDB, Firebase, JWT, JavaScript, Tailwind CSS, HTML5, and CSS3.</p>
                </div>
                <div className="container grid justify-center gap-4 mx-auto grid-cols-3 w-10/12 lg:grid-cols-5 lg:w-8/12">
                    <div className="flex flex-col px-8 py-6 justify-start items-center">
                        <img src={react} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">React</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center lg:border-none xl:border-solid">
                        <img src={node} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">Node JS</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center">
                        <img src={express} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">Express JS</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center">
                        <img src={mongoDB} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">Mongo DB</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center lg:border-none xl:border-solid">
                        <img src={firebase} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">Firebase</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center">
                        <img src={jwt} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">JWT</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center">
                        <img src={js} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">JavaScript</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center">
                        <img src={tailwind} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">Tailwind CSS</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center">
                        <img src={html} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">HTML5</h2>
                    </div>
                    <div className="flex flex-col px-8 py-6 justify-start items-center">
                        <img src={css} className="w-20 lg:w-24 mb-2" />
                        <h2 className="mb-2 lg:text-2xl font-bold text-xl title-font dark:text-gray-900">CSS3</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills