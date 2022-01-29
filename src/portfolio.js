/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Fares Anes Portfolio",
  description:
    "A passionate UI/UX and front-end web developer who believes that digital literacy is a human right and always thrives to impacts on  meangiful projects.",
  og: {
    title: "fares anes Portfolio",
    type: "website",
    url: "https://fares-anes.vercel.app/#/",
  },
};

//Home Page
const greeting = {
  title: "Fares Anes",
  logo_name: "cptfares",
  nickname: "cpt-fares",
  subTitle:
    "A passionate UI/UX and front-end web developer who believes that digital literacy is a human right and always thrives to impacts on  meangiful projects.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://www.facebook.com/messages/t/100040102630008/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/cptfares",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/fares-anes-3213061a1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:itsfares11@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100017002397845",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/cpt_fares/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front end Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using Angular and ReactJs",
        "⚡ Creating  high performance web application",
        "⚡ improving your website using the latest technologies ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
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
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "houcien bouzien high school",
      subtitle: "computer science",
      logo_path: "iiitk1_logo.png",
      alt_name: "houcien bouzien",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I have studied basic computer science subjects like DS, Algorithms, DBMS etc.",
        "⚡ Apart from this, I have done courses on math , Physics , English , French etc...",
        "⚡ somthing about to rise... ",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "front end developemnt",
      subtitle: "mentornations",
      logo_path: "stanford1_logo.png",
      certificate_link: "https://mentornations.org/#/",
      alt_name: "Stanford University",
      color_code: "#00",
    },
    {
      title: "beapirate challange",
      subtitle: "moonshotpirate",
      logo_path: "deeplearning_ai_logo.svg",
      certificate_link: "https://moonshotpirates.com/moonshot/win2win/",
      alt_name: "deeplearning.ai",
      color_code: "#0C9D5899",
    },
    {
      title: "peer mentorship",
      subtitle: "moonshotpirate",
      logo_path: "deeplearning_ai_logo.svg",
      certificate_link: "https://moonshotpirates.com/global-peer-mentorship/",
      alt_name: "Google",
      color_code: "#0000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "freelancer",
          company: "upwork",
          company_url: "",
          logo_path: "legato_logo1.png",
          duration: "may 2021 - july 2021 ",
          location: "gafsa, tunisa",
          description:
            "I have working with sereval clients worldwide in multiple projects, the biggest one was a platfrom of a bank i did the frontend part from zero.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "IOT developer Intern",
          company: "sss",
          company_url: ".",
          logo_path: "delhivery_logo1.png",
          duration: "jan 2021 - mar 2021",
          location: "gafsa, tunisa",
          description:
            "I have worked on project named E-Gouvernement designed to make smart cities i was working on the web part.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "mentor",
          company: "asociation Jeunes Science de Tunisie",
          company_url: "",
          logo_path: "microsoft_logo1.png",
          duration: "feb 2021 - july 2021",
          location: "gafsa, tunisa",
          description:
            " i have done multiple mentorships with a groups of high school students desgined to help them discover the web development and IOT filed.",
          color: "#D83B01",
        },
        {
          title: "Evolve club gafsa",
          company: "president",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo1.png",
          duration: "Dec 2020 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "I'm the president and founder of evolve club gafsa which is a high school that provided workshop and bootcamp to share with youth the latest technologies in many fileds  ",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "chabeb street gafsa 2100, tunisia",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/dir//Rue+El+Amine+Bey%D8%8C+Gafsa%E2%80%AD/@34.430987,8.7748349,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12f896ebfd53d23f:0xf65cd8a94a239de4!2m2!1d8.7749862!2d34.4312192",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+216 25741320",
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
  contactPageData,
};
