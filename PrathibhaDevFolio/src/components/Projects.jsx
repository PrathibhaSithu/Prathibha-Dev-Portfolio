import useReveal from '../utils/useReveal'
import { bigProjects } from '../portfolio'
import ProjectButton from '../custombuttons/GithubButton'
import '../styles/styles.css'

export default function Projects() {
    const ref = useReveal()
    if (!bigProjects?.display) return null

    return (
        <section className="mt-12" ref={ref} id="projects">
            <div className="reveal">
                <h3 className="headerfont text-5xl text-[#f0f0f0]">{bigProjects.title}</h3>
                <p className="text-[#f0f0f0] text-xl mt-2">{bigProjects.subtitle}</p>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {bigProjects.projects.map((p, idx) => (
                        <article key={idx} className="card p-4">
                            <div className="flex gap-4">
                                {p.image && (
                                    <img
                                        src={p.image}
                                        alt={p.projectName}
                                        className="w-28 h-20 object-cover rounded-md"
                                    />
                                )}

                                <div>
                                    <h4 className="font-semibold">{p.projectName}</h4>
                                    <p className="text-slate-300 mt-2">{p.projectDesc}</p>

                                    <div className="mt-3 flex gap-3 flex-wrap">
                                        {p.footerLink?.map((fl, i) => (
                                            <ProjectButton
                                                key={i}
                                                text={fl.name}
                                                url={fl.url}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <hr className="border-[#f0f0f0] mt-20 mb-6" />
        </section>
    )
}
