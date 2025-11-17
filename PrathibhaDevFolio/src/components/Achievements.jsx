import useReveal from '../utils/useReveal'
import { achievementSection } from '../portfolio'
import '../styles/styles.css'


export default function Achievements(){
    const ref = useReveal()
    if(!achievementSection?.display) return null
    return (
        <section className="mt-12" ref={ref}>
            <div className="reveal">
                <h3 className="headerfont text-5xl text-[#f0f0f0]">{achievementSection.title}</h3>
                <p className="text-slate-300 mt-1">{achievementSection.subtitle}</p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    {achievementSection.achievementsCards.map((a,idx)=> (
                    <div key={idx} className="card p-4">
                        {a.image && <img src={a.image} alt={a.title} className="w-full h-32 object-contain" />}
                        <h4 className="mt-3 font-semibold">{a.title}</h4>
                        <p className="text-slate-300 mt-2">{a.subtitle}</p>
                        {a.footerLink?.map((fl,i)=> <a key={i} className="text-[#00aaff] inline-block mt-3" href={fl.url}>{fl.name}</a>)}
                    </div>
                  ))}
                </div>
            </div>
        </section>
    )
}