import React from 'react'
import useReveal from '../utils/useReveal'
import { workExperiences } from '../portfolio'


export default function Work(){
    const ref = useReveal()
    if(!workExperiences?.display) return null
    return (
        <section className="mt-12" ref={ref}>
            <div className="reveal">
                <h3 className="uppercase text-sm text-slate-400">Experience</h3>
                <div className="mt-4 space-y-4">
                    {workExperiences.experience.map((e,idx)=> (
                    <div key={idx} className="card p-4 flex gap-4 items-start">
                        {e.companylogo && (
                            <img src={e.companylogo} alt={e.company} className="w-16 h-16 object-contain" />
                        )}
                        <div>
                            <div className="font-semibold">{e.role} — {e.company}</div>
                            <div className="text-sm text-slate-400">{e.date}</div>
                            <p className="mt-2 text-slate-300">{e.desc}</p>
                            {e.descBullets?.length > 0 && (
                                <ul className="list-disc pl-5 mt-2 text-slate-300">
                                    {e.descBullets.map((b,i)=> <li key={i}>{b}</li>)}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}