import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero"); // make sure Hero section has this id
    if (!hero) return;

    const handleScroll = () => {
      // show button after user scrolls past hero section height
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY > heroBottom) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[20px] **right-[20px]** cursor-pointer relative 
           after:content-['scroll_to_top'] after:text-white after:absolute 
           after:text-nowrap after:scale-0 hover:after:scale-100 
           after:duration-200 w-16 h-16 rounded-full 
           border border-4 border-sky-200 bg-black 
           flex items-center justify-center duration-300 
           hover:rounded-[50px] hover:w-36 
           group/button overflow-hidden active:scale-90
           transition-all
           ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <svg
        className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
        viewBox="0 0 384 512"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
      </svg>
    </button>
  );
}