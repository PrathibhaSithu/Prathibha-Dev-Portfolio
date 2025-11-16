import useReveal from '../utils/useReveal'
import { greeting, socialMediaLinks } from '../portfolio'


export default function Hero(){
    const ref = useReveal()
    return (
        <section className="grid md:grid-cols-2 gap-8 items-center" ref={ref}>
            <div className="reveal">
                <p className="uppercase text-sm text-slate-400">Hello, I'm</p>
                <h1 className="text-4xl font-bold mt-2">{greeting?.username}</h1>
                <h2 className="text-xl text-slate-300 mt-2">{greeting?.title}</h2>
                <p className="mt-4 text-slate-300">{greeting?.subTitle}</p>
                <div className="mt-6 flex items-center gap-4">
                    {greeting?.resumeLink && (
                        <a href={greeting.resumeLink} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gradient-to-r from-[#00aaff] to-[#ff7a59] text-white">Resume</a>
                    )}
                    {socialMediaLinks?.github && (
                        <a href={socialMediaLinks.github} target="_blank" rel="noreferrer" className="text-sm text-slate-300">GitHub</a>
                    )}
                </div>
            </div>


            <div className="reveal flex justify-center">
                <div className="w-80 h-80 card overflow-hidden rounded-2xl flex items-center justify-center">
                    {greeting?.avatar ? (
                        <img src={greeting.avatar} alt="avatar" className="object-cover w-full h-full" />
                    ) : (
                        <div className="text-center p-4">No Avatar</div>
                    )}
                </div>
            </div>
        </section>
    )
}