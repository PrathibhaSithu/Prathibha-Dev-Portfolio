import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/Welcome Animation.json"; 
import itmd from "./assets/images/itmd.png";
import sliituni from "./assets/images/sliit.png";
import vtaLogo from "./assets/images/vta.png"; 
import sjbLogo from "./assets/images/sjb.jpg"; 
import odysseyHolidayz from "./assets/images/projects/odysseyholidayz.png"; 
import hems from "./assets/images/projects/hems.jpg"; 
import cums from "./assets/images/projects/cums.png"; 
import bbh from "./assets/images/projects/bbh.jpg"; 
import ecoclean from "./assets/images/projects/ecoclean.jpg"; 
import voyagelk from "./assets/images/projects/voyagelk.jpg"; 
import petshop from "./assets/images/projects/petshop.png"; 
import miniport from "./assets/images/projects/miniport.png"; 
import awsCert from "./assets/images/aws.jpg"; 
import mongodbCert from "./assets/images/mongodb.jpg"; 

import myImage from "./assets/images/mypic.jpeg";
import animatedSplash from "./assets/lottie/Work at home.json";
import contactSplash from "./assets/lottie/Live chatbot.json";

// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Prathibha Sithumini",
  title: "Hello, I am",
  greet: "Have a great day! ",
  animated: animatedSplash,
  subTitle: emoji(
    "Dedicated Frontend Developer skilled in React.js, Vue.js, HTML, CSS, and Tailwind CSS, experienced in microservices architecture. AWS & Azure certified, passionate about performance, problem-solving, and creating seamless, scalable UI/UX experiences."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1upb7UunZ9m-ArmB3VOItlludNKv81odt/view?usp=sharing", 
  displayGreeting: true
};

// Social Media Links 

const socialMediaLinks = {
  socialMediaData: [
    {
      socialMediaName: "GitHub",
      socialLink: "https://github.com/PrathibhaSithu",
      fontAwesomeName: "fab fa-github"
    },
    {
      socialMediaName: "LinkedIn",
      socialLink: "https://www.linkedin.com/in/prathisithumini",
      fontAwesomeName: "fab fa-linkedin-in"
    },
    {
      socialMediaName: "Gmail",
      socialLink: "sithuminiprathiba@gmail.com",
      fontAwesomeName: "fas fa-envelope"
    },
    {
      socialMediaName: "GitLab",
      socialLink: "https://gitlab.com/sithuminiprathiba",
      fontAwesomeName: "fab fa-gitlab"
    },
    {
      socialMediaName: "Stack Overflow",
      socialLink: "https://stackoverflow.com/users/16870507/prathibha",
      fontAwesomeName: "fab fa-stack-overflow"
    },
    {
      socialMediaName: "Facebook",
      socialLink: "https://www.facebook.com/PrathibhaSithumini",
      fontAwesomeName: "fab fa-facebook-f"
    },
    {
      socialMediaName: "Instagram",
      socialLink: "https://www.instagram.com/prathibhasithumini/",
      fontAwesomeName: "fab fa-instagram"
    },
    // {
    //   socialMediaName: "Google Developer",
    //   socialLink: "https://developers.google.com/profile/u/prathibhasithumini_dev",
    //   fontAwesomeName: ""
    // },
  ],  
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  image: myImage,
  subTitle: "FRONTEND DEVELOPER WHO WANTS TO DEVELOP AWESOME WEB APPS",
  skills: [
    emoji(
      "Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("Develop responsive websites with best practices"),
    emoji(
      "Design and develop static websites"
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Cloud Computing",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Canva",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      skillName: "Visual Studio Code",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "IntelliJ IDEA",
      fontAwesomeClassname: "fas fa-lightbulb"
    },
    {
      skillName: "OOP Concepts",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Agile Methodology",
      fontAwesomeClassname: "fas fa-sync-alt"
    },
    {
      skillName: "Quality Assurance (QA)",
      fontAwesomeClassname: "fas fa-clipboard-check"
    }
  ],
  display: true
};

// Work experience section

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Frontend Developer",
      company: "ITMD - Finance Ministry Sri Lanka",
      companylogo: itmd,
      date: "August 2024 - August 2025",
      desc: "Develop responsive front-end applications using Vue.js and designing user-friendly interfaces in Figma, manual testing to ensure functionality, usability, and quality across the applications",
      descBullets: [
        "Develop Front-end using VueJs",
        "Design Interface using Figma with UI/UX principles",
        "Manual Testing",
        "Connect Front-end and backend using REST API"
      ]
    },
  ]
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "SLIIT University",
      logo: sliituni,
      subHeader: "BSc (Hons) in Information Technology",
      duration: "June 2021 - September 2025",
      desc: "Specializing in Information Technology",
      descBullets: [
        "Coursework: Cloud Computing principles, AWS Certificate course, Web Developments, Database Administration, Networking, Quality Assurance Principles, Manual and Automation Testing, SE",
      ]
    },
    {
      schoolName: "Vocational Training Authority of Sri Lanka",
      logo: vtaLogo,
      subHeader: "Information Technology Diploma",
      duration: "January 2020 - September 2022",
      desc: "Level 5 Diploma in Information Technology",
      descBullets: [
        "Coursework: Basic Web Developments, Database, Networking, MS Office, Communication Skills, Java"
      ]
    },
    {
      schoolName: "St.Joseph's Girls Collage - Kegalle",
      logo: sjbLogo,
      subHeader: "Engineering Technology",
      duration: "August 2019",
      desc: "Engineering Technology, Science for Technology, Information Technology",
      descBullets: [
        "A/L - ET - C, SFT -C, ICT - C",
        "O/L - English - A, Mathematics - B, ICT - B"
      ]
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects I have done in advance with 💻 & ❤️",
  projects: [
    {
      image: odysseyHolidayz, 
      projectName: "Odyssey Holidayz ",
      projectDesc: "Odyssey Holidayz is a travel website designed and developed to showcase tour packages, destinations, and travel experiences across Sri Lanka. The site features a user-friendly interface, responsive design, and visually rich galleries, allowing visitors to explore customized tours, adventures, and travel services with ease and seamless navigation.",
      footerLink: [
        {
          name: "My Github",
          url: "https://github.com/PrathibhaSithu"
        }
      ]
    },
    {
      image: hems, 
      projectName: "Home Energy Management System",
      projectDesc: "For my final year research project, I developed an AI and IoT-based smart management system integrating solar energy, fire and gas detection, water, and electricity management. The project focused on automation and efficiency, utilizing ReactJS for the interface and emphasizing teamwork, version control, and project management through GitHub and effective collaboration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrathibhaSithu/Home-Energy-Management-System-Com-Web.git"
        }
      ]
    },
    {
      image: cums, 
      projectName: "Common User Management System",
      projectDesc: "developed a Common User Management System with an admin panel for the Finance Ministry, enabling efficient management of user roles and permissions. The project was built using Vue.js and Tailwind CSS, ensuring a responsive and modern interface. I also performed manual testing and maintained version control using GitHub.",
      footerLink: [
        {
          name: "My Github",
          url: "https://github.com/PrathibhaSithu"
        }
      ]
    },
    {
      image: bbh, 
      projectName: "Benthota Baker Website Automation Testing",
      projectDesc: "I worked as a quality assurance engineer on the Bentota Baker Website, a bakery management platform developed using the MERN Stack. The project involved both manual and automated testing using Selenium to ensure functionality and reliability. I utilized GitHub for version control and collaboration, focusing on improving website performance, accuracy, and user experience.",
      footerLink: [
        {
          name: "My Github",
          url: "https://github.com/PrathibhaSithu"
        }
      ]
    },
    {
      image: ecoclean, 
      projectName: "Eco Clean Mobile Application",
      projectDesc: "I developed a mobile-based Garbage Management System featuring multi-user login and admin-level control to streamline waste collection and monitoring. The system integrated IoT devices with Arduino for real-time data tracking and used Firebase for backend management. Built with Flutter, the project emphasized smart automation and efficient city waste management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrathibhaSithu/Eco-Clean-MobileApp"
        }
      ]
    },
    {
      image: voyagelk,
      projectName: "Voyage LK Mobile Application",
      projectDesc: "I developed a mobile application that helps travelers discover travel destinations and accommodations while enabling hotel owners to promote their properties. Built using Kotlin and Firebase, the app offers real-time data management and seamless user experiences. GitHub was used for version control, enhancing collaboration and project organization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrathibhaSithu/VoyageLK-Mobile-Application"
        }
      ]
    },
    {
      image: petshop, 
      projectName: "Online Pet Clinic and Pet Accessory Shop Management",
      projectDesc: "I developed a fully functional full-stack web application for a pet clinic in Dehiwala, enabling appointment management, pet records, and service tracking. Leveraging the MERN stack, I collaborated with a team, participated in requirement gathering, and utilized GitHub for version control. The project enhanced my full-stack development and teamwork skills.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrathibhaSithu/Pet-Care-and-Pet-Accessories-Shopping-System.git"
        }
      ]
    },
    {
      image: miniport, 
      projectName: "Responsive Portfolio Website Template",
      projectDesc: "Designed a modern, responsive web page using HTML, CSS, and JavaScript to showcase personal and professional achievements, featuring a clean, professional layout that highlights skills, projects, and accomplishments effectively.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrathibhaSithu/Mini_Responsive_Portfolio_Template.git"
        }
      ]
    }
  ],
  display: true 
};

// Achievement Section

const achievementSection = {
  title: emoji("Certificates and Courses"),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "AWS Academy Cloud Foundations",
      subtitle:
        "Completed foundational training in AWS cloud concepts, core services, architecture, and best practices.",
      image: awsCert,
      imageAlt: "AWS Academy Cloud Foundations Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/prathisithumini/details/certifications/"
        },
      ]
    },
    {
      title: "MongoDB Certified",
      subtitle:
        "Demonstrated proficiency in building and maintaining applications using MongoDB, including data modeling, queries, aggregation, and performance optimization.",
      image: mongodbCert,
      imageAlt: "MongoDB Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/prathisithumini/details/certifications/"
        }
      ]
    },

    {
      title: "MongoDB Transactions",
      subtitle: "Gained practical knowledge of implementing and managing multi-document transactions in MongoDB to ensure data consistency and reliability in complex applications.",
      image: mongodbCert,
      imageAlt: "MongoDB Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/in/prathisithumini/details/certifications/"
        }
      ]
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true 
};

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle:
    "Let's craft smooth, responsive, and eye-catching designs drop me a line!",
  number: "+94 077 923 3384",
  email_address: "sithuminiprathiba@gmail.com",
  animated: contactSplash
};


const isHireable = true; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
  
};
