import { skillsSection } from "../portfolio";
import myImage from "../assets/images/mypic.jpeg";


export default function AboutMe() {
  if (!skillsSection?.display) return null;

  return (
    <section className="mt-12" id="aboutme">
      <div className="reveal flex flex-col md:flex-row items-center gap-8">
        {/* Left side: Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={myImage}
            alt="About Me"
            className="rounded-xl shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Right side: Skills */}
        <div className="md:w-2/3">
          <h3 className="kicker uppercase text-sm text-slate-400">{skillsSection.title}</h3>
          <h4 className="text-2xl font-semibold mt-2">{skillsSection.subTitle}</h4>

          {/* Software skills icons */}
          <div className="mt-4 flex flex-wrap gap-4">
            {skillsSection.softwareSkills.map((sk, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-20 h-20 bg-black/20 rounded-full text-white text-2xl shadow-md hover:scale-110 transition-transform duration-300"
                title={sk.skillName}
              >
                <i className={sk.fontAwesomeClassname}></i>
              </div>
            ))}
          </div>

          {/* Text skills */}
          <div className="mt-6 grid gap-2">
            {skillsSection.skills.map((s, i) => (
              <p key={i} className="text-slate-300">
                {s}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
