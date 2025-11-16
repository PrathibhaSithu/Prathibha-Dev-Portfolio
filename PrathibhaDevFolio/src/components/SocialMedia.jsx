import { socialMediaLinks, icons } from "../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;

  return (
    <div className="flex gap-4 justify-center md:justify-start mt-4">
      {icons.map((item) => {
        const url = socialMediaLinks[item.key];
        if (!url) return null;

        // If email, use mailto:
        const href = item.email ? `mailto:${url}` : url;

        return (
          <a
            key={item.key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl"
          >
            <i className={item.icon}></i>
          </a>
        );
      })}
    </div>
  );
}
