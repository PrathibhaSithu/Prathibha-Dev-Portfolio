import useReveal from '../utils/useReveal'
import { bigProjects } from '../portfolio'
import '../styles/styles.css'

export default function Projects(){
    const ref = useReveal()
    if(!bigProjects?.display) return null
    return (
        <section className="mt-12" ref={ref} id="projects">
            <div className="reveal">
                <h3 className="headerfont text-5xl text-[#f0f0f0]">{bigProjects.title}</h3>
                <p className="text-[#f0f0f0] text-xl mt-2">{bigProjects.subtitle}</p>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {bigProjects.projects.map((p,idx)=> (
                        <article key={idx} className="card p-4">
                            <div className="flex gap-4">
                                {p.image && <img src={p.image} alt={p.projectName} className="w-28 h-20 object-cover rounded-md" />}
                                <div>
                                    <h4 className="font-semibold">{p.projectName}</h4>
                                    <p className="text-slate-300 mt-2">{p.projectDesc}</p>
                                    {p.footerLink?.map((fl,i)=> (
                                        <a key={i} href={fl.url || '#'} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm text-[#00aaff]">{fl.name}</a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}