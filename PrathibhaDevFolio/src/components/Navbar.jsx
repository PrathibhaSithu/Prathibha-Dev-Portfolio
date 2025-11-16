
import ToggleSwitch from "./ToggleSwitch";
import '../styles/styles.css'
import {
  viewSkills,
  viewExperience,
  viewProjects,
  viewResume,
} from "../portfolio";

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* ⭐ Signature Name */}
        <div className="text-5xl namefont tracking-wide text-white pr-10">
          Prathibha Sithumini
        </div>

        {/* ⭐ Menu */}
        <ul className="flex items-center gap-8 text-base font-medium text-slate-200">
          {viewSkills && (
            <li>
              <a href="#skills" className="hover:text-white transition">
                About Me
              </a>
            </li>
          )}

          {viewExperience && (
            <li>
              <a href="#experience" className="hover:text-white transition">
                Experiences
              </a>
            </li>
          )}

          {viewProjects && (
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
          )}

          {viewResume && (
            <li>
              <a href="#resume" className="hover:text-white transition">
                Resume
              </a>
            </li>
          )}

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact Me
            </a>
          </li>

          {/* ⭐ SINGLE Toggle Switch */}
          <li>
            {/* <ToggleSwitch theme={theme} setTheme={setTheme} /> */}
            <ToggleSwitch theme={theme} setTheme={setTheme} />

          </li>
        </ul>
      </div>
    </header>
  );
}
