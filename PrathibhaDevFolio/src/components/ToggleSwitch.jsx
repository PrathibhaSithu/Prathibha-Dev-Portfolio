import React from "react";

export default function ToggleSwitch({ theme, setTheme }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        className="sr-only peer"
      />
      <div
        className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer 
        peer-checked:bg-[#00aaff] transition-colors duration-300"
      ></div>
      <div
        className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full 
        transition-all duration-300 peer-checked:translate-x-5"
      ></div>
    </label>
  );
}
