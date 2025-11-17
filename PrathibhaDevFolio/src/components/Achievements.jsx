import useReveal from '../utils/useReveal'
import { achievementSection } from '../portfolio'
import AnimatedButton from '../custombuttons/AnimatedButton'
import '../styles/styles.css'

export default function Achievements() {
    const ref = useReveal()
    if (!achievementSection?.display) return null

    return (
        <section className="mt-12" ref={ref}>
            <div className="reveal">

                {/* Title */}
                <h3 className="headerfont text-5xl text-[#f0f0f0]">
                    {achievementSection.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[#f0f0f0] text-m mt-5">
                    {achievementSection.subtitle}
                </p>

                {/* Cards */}
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    {achievementSection.achievementsCards.map((a, idx) => (
                        <div
                            key={idx}
                            className="card p-4 flex flex-col h-full"
                        >

                            {/* Image */}
                            {a.image && (
                                <img
                                    src={a.image}
                                    alt={a.title}
                                    className="w-full h-32 object-contain"
                                />
                            )}

                            {/* Title */}
                            <h4 className="mt-3 font-semibold">{a.title}</h4>

                            {/* Subtitle */}
                            <p className="text-slate-300 mt-2">
                                {a.subtitle}
                            </p>

                            {/* BUTTON AT BOTTOM */}
                            <div className="mt-auto pt-5 justify-items-center ">
                                {a.footerLink?.map((fl, i) => (
                                    <AnimatedButton
                                        key={i}
                                        url={fl.url}
                                        label={fl.name}
                                        tooltip="View Certificate"
                                        icon={
                                            fl.name.toLowerCase().includes("git")
                                                ? "fab fa-github"
                                                : fl.name.toLowerCase().includes("web")
                                                ? "fas fa-globe"
                                                : fl.name.toLowerCase().includes("cert")
                                                ? "fas fa-certificate"
                                                : "fas fa-arrow-right"
                                        }
                                    />
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <hr className="border-[#f0f0f0] mt-20 mb-6" />
        </section>
    )
}
