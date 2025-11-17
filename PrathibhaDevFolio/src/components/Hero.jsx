import useReveal from '../utils/useReveal';
import { greeting, socialMediaLinks } from '../portfolio';
import SocialMedia from './SocialMedia';
import { Player } from '@lottiefiles/react-lottie-player';
import '../styles/styles.css';

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="grid md:grid-cols-2 gap-4 items-center py-1" ref={ref} id="hero">
      {/* Left Content */}
      <div className="reveal flex flex-col justify-center">
        <p className="uppercase text-sm text-slate-400">{greeting?.title}</p>
        <h1 className="text-5xl font-bold mt-2">{greeting?.username}</h1>
        <h2 className="text-2xl text-slate-300 mt-2">{greeting?.greet}</h2>
        <p className="mt-4 text-slate-300">{greeting?.subTitle}</p>

        {/* Social Media Icons */}
        <div className="mt-6">
          <SocialMedia />
        </div>

        {/* Resume & GitHub */}
        <div className="mt-6 flex items-center gap-4">
            {greeting?.resumeLink && (
            <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="relative group cursor-pointer"
            >
                <div className="relative px-8 py-4 border-2 border-blue-500 text-blue-500 font-bold text-lg rounded-lg transform transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1 shadow-[6px_6px_10px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.1)] group-hover:shadow-[8px_8px_15px_rgba(0,0,0,0.8),-8px_-8px_15px_rgba(255,255,255,0.15)]">
                    Download My Resume
                </div>

                <div className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Flashing Dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-ping shadow-lg"></div>
                <div className="absolute top-1/3 left-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
                <div className="absolute top-2/3 right-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
            </a>
            )}        
        </div>
      </div>

      {/* Right Content: Animated Avatar */}
      <div className="reveal flex justify-center">
        <div className="w-full overflow-hidden flex items-center justify-center">
          {greeting?.animated ? (
            <Player
              autoplay
              loop
              src={greeting.animated}
              style={{ height: '100%', width: '100%' }}
            />
          ) : (
            <div className="text-center p-4">No Avatar</div>
          )}
        </div>
      </div>
    </section>
  );
}
