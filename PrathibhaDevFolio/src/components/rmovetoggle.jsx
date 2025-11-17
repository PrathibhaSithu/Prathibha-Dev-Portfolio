import React from "react";
import { Sun, Moon } from "lucide-react"; // uses lucide-react icons

export default function ToggleSwitch({ theme, setTheme }) {
  const isDark = theme === "dark";

  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        checked={isDark}
        onChange={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        className="sr-only peer"
      />

      {/* Track */}
      <div
        className="w-14 h-7 bg-gray-300 peer-checked:bg-[#00aaff] 
        rounded-full transition-all duration-300"
      ></div>

      {/* Knob */}
      <div
        className="absolute top-[3px] left-[3px] w-6 h-6 bg-white rounded-full 
        flex items-center justify-center text-black
        transition-all duration-300 
        peer-checked:translate-x-7"
      >
        {/* Icon inside knob */}
        {isDark ? (
          <Moon size={16} className="text-[#00aaff]" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}
      </div>

      {/* Static Icons on the Track (Optional — Looks Cool) */}
      <Sun
        size={14}
        className="absolute left-1 top-1/2 -translate-y-1/2 text-yellow-400 
        transition-opacity duration-300 
        peer-checked:opacity-0"
      />
      <Moon
        size={14}
        className="absolute right-1 top-1/2 -translate-y-1/2 text-white 
        opacity-0 transition-opacity duration-300 
        peer-checked:opacity-100"
      />
    </label>
  );
}
