import useReveal from '../utils/useReveal'
import { educationInfo } from '../portfolio'
import '../styles/styles.css'


export default function Education(){
    const ref = useReveal()
    if(!educationInfo?.display) return null
    return (
        <section className="mt-5" id='education' ref={ref}>
            <div className="reveal">
                <h3 className=" text-5xl text-[#f0f0f0] headerfont">Education</h3>
                <div className="mt-4 space-y-4">
                    {educationInfo.schools.map((s,idx)=> (
                        <div key={idx} className="card p-4 flex gap-4 items-start">
                            {s.logo && (<img src={s.logo} alt={s.schoolName} className="w-16 h-16 object-contain" />)}
                            <div>
                                <div className="font-semibold">{s.schoolName}</div>
                                <div className="text-sm text-slate-400">{s.subHeader} • {s.duration}</div>
                                <p className="mt-2 text-slate-300">{s.desc}</p>
                                {s.descBullets && <ul className="list-disc pl-5 text-slate-300 mt-2">{s.descBullets.map((d,i)=><li key={i}>{d}</li>)}</ul>}
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="border-[#f0f0f0] mt-20 mb-6" />
            </div>
        </section>
    )
}