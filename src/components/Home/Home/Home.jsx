import React from 'react'
import Banner from '../Banner/Banner'
import AboutMe from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>

    )
}

export default Home