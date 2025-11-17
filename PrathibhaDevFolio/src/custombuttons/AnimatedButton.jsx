// export default function ({ icon, title, subtitle, url }) {
export default function AnimatedButton({ icon, label, tooltip, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group hover:bg-sky-600 relative bg-sky-700 rounded-4xl text-neutral-50 duration-500 font-bold 
      flex justify-start gap-2 items-center p-2 pr-6 cursor-pointer w-fit"
    >
      {/* Icon */}
      <div className="w-8 h-8 flex items-center justify-center">
        <i className={`text-white text-2xl ${icon}`}></i>
      </div>

      {/* Divider + Label */}
      <span className="border-l-2 px-2">{label}</span>

      {/* Tooltip */}
      <div
        className="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm 
        font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm
        before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
      >
        {tooltip}
      </div>
    </a>
  );
}
