import React from 'react'
import useReveal from '../utils/useReveal'
import { skillsSection } from '../portfolio'


export default function Skills(){
    const ref = useReveal()
    if(!skillsSection?.display) return null
    return (
        <section className="mt-12" ref={ref}>
            <div className="reveal">
                <h3 className="kicker uppercase text-sm text-slate-400">{skillsSection.title}</h3>
                <h4 className="text-2xl font-semibold mt-2">{skillsSection.subTitle}</h4>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div className="card p-5">
                        <ul className="space-y-3">
                            {skillsSection.skills.map((s,i)=> (
                                <li key={i} className="text-slate-300">{s}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card p-5">
                        <h5 className="font-semibold">Tools & Technologies</h5>
                        <div className="mt-3 flex flex-wrap gap-3">
                            {skillsSection.softwareSkills.map((sk,idx)=> (
                                <span key={idx} className="px-3 py-1 rounded-md bg-black/20 text-sm">{sk.skillName}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}