import '../styles/toggleswitch.css'
import { useEffect } from "react";

export default function ToggleSwitch({ theme, setTheme }) {
  const isDark = theme === "dark";

  const handleChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <label className="theme-switch" style={{ fontSize: 'var(--toggle-size)' }}>
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        className="theme-switch__checkbox"
        checked={isDark}
        onChange={handleChange}
      />

      {/* Toggle Container */}
      <div
        className="theme-switch__container relative w-[var(--container-width)] h-[var(--container-height)] rounded-[var(--container-radius)] overflow-hidden cursor-pointer"
      >
        {/* Day Elements */}
        <div className="theme-switch__clouds absolute w-[1.25em] h-[1.25em] bg-[var(--clouds-color)] rounded-[var(--container-radius)] bottom-[-0.625em] left-[0.312em]"></div>

        {/* Night Elements */}
        <div className="theme-switch__stars-container absolute text-[var(--stars-color)] left-[0.312em] w-[2.75em] h-auto">
          <svg fill="none" viewBox="0 0 144 55" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path fill="currentColor" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545Z" />
          </svg>
        </div>

        {/* Toggle Circle */}
        <div
          className="theme-switch__circle-container absolute bg-white/10 flex pointer-events-none"
          style={{
            width: 'var(--circle-container-diameter)',
            height: 'var(--circle-container-diameter)',
            left: 'var(--circle-container-offset)',
            top: 'var(--circle-container-offset)',
            borderRadius: 'var(--container-radius)',
          }}
        >
          <div
            className="theme-switch__sun-moon-container relative z-20 m-auto rounded-[var(--container-radius)] bg-[var(--sun-bg)] overflow-hidden pointer-events-auto"
            style={{
              width: 'var(--sun-moon-diameter)',
              height: 'var(--sun-moon-diameter)',
            }}
          >
            {/* Moon */}
            <div className="theme-switch__moon w-full h-full bg-[var(--moon-bg)] rounded-inherit relative">
              <div className="theme-switch__spot absolute bg-[var(--spot-color)]" style={{ top: '0.75em', left: '0.312em', width: '0.75em', height: '0.75em', borderRadius: 'var(--container-radius)' }}></div>
              <div className="theme-switch__spot absolute bg-[var(--spot-color)]" style={{ top: '0.937em', left: '1.375em', width: '0.375em', height: '0.375em', borderRadius: 'var(--container-radius)' }}></div>
              <div className="theme-switch__spot absolute bg-[var(--spot-color)]" style={{ top: '0.312em', left: '0.812em', width: '0.25em', height: '0.25em', borderRadius: 'var(--container-radius)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
