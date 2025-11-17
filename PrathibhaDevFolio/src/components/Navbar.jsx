
import ToggleSwitch from "../custombuttons/ToggleSwitch";
import '../styles/styles.css'
import {
  greeting,
} from "../portfolio";

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-1 py-4 flex items-center justify-between">
        
        <div className="text-5xl namefont tracking-wide text-white pr-10">
          Prathibha Sithumini
        </div>

        {/* ⭐ Menu */}
        <ul className="flex items-center gap-8 text-base font-medium text-slate-200">
            <li>
              <a href="#aboutme" className="hover:text-white transition">
                About Me
              </a>
            </li>

            <li>
              <a href="#experience" className="hover:text-white transition">
                Experiences
              </a>
            </li>
          
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact Me
            </a>
          </li>

          <li className="ml-4 flex items-center gap-4">
            {greeting?.resumeLink && (
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noreferrer"
                // Apply Uiverse Button Styles to the <a> tag
                className="cursor-pointer btn-color shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl btn-border border-slate-500 text-white font-medium group"
              >
                <div className="relative overflow-hidden">
                  {/* First Text: Slides up and out */}
                  <p
                    className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  >
                    Resume
                  </p>
                  {/* Second Text: Slides in from the bottom */}
                  <p
                    className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                  >
                    Resume
                  </p>
                </div>
              </a>
            )}
          </li>

          {/* ⭐ SINGLE Toggle Switch */}
          <li>
            <ToggleSwitch theme={theme} setTheme={setTheme} />

          </li>
        </ul>
      </div>
    </header>
  );
}
