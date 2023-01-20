/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dnyaneshwar's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Dnyaneshwar Shekade Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Dnyaneshwar Shekade",
  logo_name: "Dnyaneshwar_Shekade",
  nickname: "Danny",
  subTitle: " System Enginner and Ops",
  resumeLink:
  "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/dnyanesh3/masterPortfolio",
  githubProfile: "https://github.com/dnyanesh3",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/dnyanesh3",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dnyanesh1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@mazijivansafar",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:shekade31@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/shekade31",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/dnyaneshwar31/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dnyaneshwars_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "System Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡Designing, implementing and maintaining systems infrastructure, including servers, storage, networks, and applications",
        "⚡Ensuring the systems are reliable, efficient, and secure.",
        "⚡Identifying and troubleshooting system issues and implementing solutions.",
        "⚡Developing and maintaining system documentation and procedures.",
        "⚡Managing system backups and disaster recovery plans.",
        "⚡Collaborating with other teams to implement new systems and technologies.",
        "⚡Keeping up to date with new technologies and industry trends.",
        
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    
    {
     
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Master of Science in Computer Science ",
      subtitle: "Department of Computer Science, University Of Mumbai",
      logo_path: "udcs.png",
      alt_name: "udcs",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I have studied basic Cloud Computing, Big Data, Machine Lerning, Server And data centric Managment etc.",
      ],
      website_link: "https://udcs.mu.ac.in/",
    },
    {
      title: "Bachelor of Science in Computer Science",
      subtitle: "N.G.Acharya And D.K.Marathe College. chembur,University Of Mumbai",
      logo_path: "ngacharya.png",
      alt_name: "ngacharya",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic python programiming with HTML,CSS, Open Source Softwares And Linux Servers.",
      ],
      website_link: "https://www.acharyamarathecollege.in/",
    },
    {
      title: "Bachelor of Arts",
      subtitle: "N.G.Acharya And D.K.Marathe College. chembur,University Of Mumbai",
      logo_path: "Ycm_Logo.png",
      alt_name: "ycm",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I have studied basic python programiming with HTML,CSS, Open Source Softwares And Linux Servers.",
      ],
      website_link: "https://www.acharyamarathecollege.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Maharashtra State Certificate in Information Technology",
      subtitle: "- MS-CIT",
      logo_path: "mscit.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1h2tx0Ai4WV4z8BGtadaVrVw8A7sXqCD0/view?usp=share_link",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Cyber Security Professional Basic Cource ",
      subtitle: "- CSC Acadmy",
      logo_path: "Digital_India_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ogWuwgDbMkFuW-_r4uk4O9jF9JOFJwlX/view?usp=share_link",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Google Digital Unlocked",
      subtitle: "-Fundamentals of digital marketing",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1pO0Y6CNhV9BWRP0wjP9JScVMsCUn-rXf/view?usp=share_link",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Freelancing and Volunteership",
  description:
    "I have worked with green India to reduce E-waste by refubishiung laptop and desktops, Provide many services to my coustomers regarding hardware and software issues in their personal PC/Laptops. Working in own startup. I love organising events and that is why I am also involved with many funcations as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "System Engineer,Operations",
          company: " Reliance Industries Limited.",
          company_url: "https://www.ril.com/",
          logo_path: "Ril_Logo.png",
          duration: "Jan 2023 - PRESENT",
          location: "Ghansoli, Mumbai",
          description:
            "I am  responsible for designing, developing, and maintaining complex systems. This may include computer systems, software systems,  or a combination of these. The systems engineer is responsible for making sure that all the components of a system work together effectively and efficiently. This may involve specifying hardware and software requirements, designing interfaces and protocols, and testing and evaluating systems. They also work closely with other engineers, project managers, and stakeholders to ensure that the system meets the needs of the organization and its customers.",
          color: "#0879bf",
        },
        {
          title: "System Engineer",
          company: "Geekay Infotech Pvt.Ltd",
          company_url: "http://www.geekayinfotech.com/",
          logo_path: "Geekay_Logo.png",
          duration: "Jan 2023 - PRESENT",
          location: "Ghatkoper, Mumbai Maharashtra",
          description:
            "Join company as a syste Engineer to provide IT Services",
          color: "#9b1578",
        },
        {
          title: "Hardware Engineer",
          company: "VivaConnect Pvt Ltd.",
          company_url: "https://helo.ai",
          logo_path: "Viva_Logo.png",
          duration: "March 2022 - August 2022",
          location: "Andheri, Mumbai",
          description:
            "Working As a many profiles hardware Engineer,System Engineer,Linux Addministrotr,etc. Handel Network and Infra in this company. responsible for designing, developing, and testing the physical components of a system, such as circuit boards, computer systems, and other electronic equipment. They may also be responsible for maintaining and repairing these components ",
          color: "#fc1f20",
        },
        {
          title: "Freelancing ",
          company: "Dnyaneshwar Computers and repaires",
          company_url: "https://dnyaneshwarcomputers.business.site",
          logo_path: "Dnyanesh.png",
          duration: "Jan 2019 - Dec 2022",
          location: "Mankhurd, Mumbai",
          description:
            "Its My own startup to provide IT services to peoples regarding systems and Laptops,Electronic periferals. This starup has a partnership with Laptop bucket Shop,vashi which is working for green india envirment by reducing E-waste. With this I am Provide refurbish It Stuffs to peoples. ",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_dnyanesh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Buisness",
    subtitle:
      "For individual fundamental empowerment, I am startup my own buisness of computer reselling And Repairing.",
    link: "https://dnyaneshwarcomputers.business.site/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Room No 15 Sai baba, Maharashtra Nagar,Mankhurd, Mumbai 400088",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/HrhEej6hP26U1vZR7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7039997894",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
