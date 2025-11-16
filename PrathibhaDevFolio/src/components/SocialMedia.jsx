import { socialMediaLinks } from "../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;

  const data = socialMediaLinks.socialMediaData;

  const colorMap = {
    GitHub: "bg-[#000]",
    LinkedIn: "bg-[#0A66C2]",
    Gmail: "bg-[#D44638]",
    GitLab: "bg-[#FC6D26]",
    StackOverflow: "bg-[#F48024]",
    Facebook: "bg-[#1877F2]",
    Instagram: "bg-[#C13584]"
  };

  return (
    <div className="flex gap-4 mt-1">
      {data.map((item) => {
        const link =
          item.socialMediaName === "Gmail"
            ? `mailto:${item.socialLink}`
            : item.socialLink;

        if (!link) return null;

        const bgColor = colorMap[item.socialMediaName] || "bg-gray-800";

        return (
          <a
            key={item.socialMediaName}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center 
                        rounded-full text-white text-xl shadow-md 
                        hover:scale-110 transition-transform duration-300
                        ${bgColor}`}
          >
            <i className={item.fontAwesomeName}></i>
          </a>
        );
      })}
    </div>
  );
}
