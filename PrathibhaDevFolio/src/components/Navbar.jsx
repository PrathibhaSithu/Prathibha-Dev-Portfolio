import React from 'react'
import { socialMediaLinks } from '../portfolio'


export default function Navbar({ theme, setTheme }){
    return (
        <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/5">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-lg font-semibold">{process.env.REACT_APP_NAME || 'Prathibha'}</div>
                <div className="flex items-center gap-3">
                    <a href="#projects" className="text-sm uppercase text-slate-300">Projects</a>
                    <a href="#contact" className="text-sm uppercase text-slate-300">Contact</a>
                    <button
                        onClick={()=> setTheme(prev=> prev === 'dark' ? 'light' : 'dark')}
                        className="px-3 py-1 rounded-md bg-gradient-to-r from-[#00aaff] to-[#ff7a59] text-white text-sm"
                    >{theme === 'dark' ? 'Light' : 'Dark'}</button>
                </div>
            </div>
        </header>
    )
}