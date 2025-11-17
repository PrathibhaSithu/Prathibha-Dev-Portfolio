import React, { useEffect, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Splash from './components/SplashScreen'
import Hero from './components/Hero'
import AboutMe from './components/About'
// import Skills from './components/Skills'
import Work from './components/WorkExperience'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { splashScreen } from './portfolio'
// import BackToTopButton from './custombuttons/BackToTopButton'



export default function App(){
const [showSplash, setShowSplash] = useState(!!splashScreen?.enabled)
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')


useEffect(()=>{
document.documentElement.setAttribute('data-theme', theme)
localStorage.setItem('theme', theme)
},[theme])


useEffect(()=>{
if(!splashScreen?.enabled) return setShowSplash(false)
const t = splashScreen?.duration || 1800
const id = setTimeout(()=> setShowSplash(false), t)
return ()=> clearTimeout(id)
},[])


if(showSplash) return <Splash />


return (
<div className="min-h-screen">
  <Navbar theme={theme} setTheme={setTheme} />
  
  <main className="max-w-5xl mx-auto py-8">
    <Hero />
    <AboutMe />
    <Work />
    <Education />
    <Projects />
    <Achievements />
    <Contact />
  </main>
    <Footer />
    {/* <BackToTopButton /> */}

    
  
  {/* <h1>Hello </h1> */}
</div>
)
}