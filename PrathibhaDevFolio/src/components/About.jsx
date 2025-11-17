import React from "react";
import { skillsSection } from "../portfolio";
import myImage from "../assets/images/mypic.jpeg";

// 20 beautiful circle colors
const colors = [
   "#34495E"
];

export default function AboutMe() {
  if (!skillsSection?.display) return null;

  return (
    <section className="px-6 md:px-16 py-16" id="about">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* LEFT – Your image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={myImage}
            alt="About Me"
            className="w-64 h-64 md:w-72 md:h-72 rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT – Text + Skills */}
        <div className="md:w-2/3">
          {/* Title */}
          <h2 className="text-3xl font-bold tracking-wide text-white">
            {skillsSection.title}
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 mt-3 text-lg">
            {skillsSection.subTitle}
          </p>

          {/* Skill Icons */}
          <div className="mt-8 flex flex-wrap gap-5">
            {skillsSection.softwareSkills.map((sk, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-full flex flex-col justify-center items-center shadow-md hover:scale-110 transition-transform duration-300 text-white"
                style={{ backgroundColor: colors[i % colors.length] }}
                title={sk.skillName}
              >
                {sk.fontAwesomeClassname ? (
                  <i className={`${sk.fontAwesomeClassname} text-3xl`}></i>
                ) : (
                  <span className="text-sm font-semibold">{sk.skillName}</span>
                )}
              </div>
            ))}
          </div>

          {/* Bullet Skills */}
          <div className="mt-8 space-y-2">
            {skillsSection.skills.map((line, idx) => (
              <p key={idx} className="text-slate-300 text-base leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
