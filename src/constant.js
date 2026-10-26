// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import csharpLogo from "./assets/tech_logo/appScriptLogo.png";
import resumeAnalyzer from "./assets/tech_logo/resumeAnalyzer.png";
import Inbound from "./assets/tech_logo/Inbound.png";
import MernEcom from "./assets/tech_logo/MernEcom.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Google App Script", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Software Developer",
    company: "Tracxn Technology, limited",
    date: "April 2024 - Present",
    desc: `Built an AI-powered research assistant using Claude, GPT, and Gemini, integrating RAG, tool-calling, web search, and document export. Developed scalable React.js and Redux applications serving thousands of users across SaaS products. Created 30+ reusable UI components, improved application performance by 20%, and reduced frontend bugs by 30%. Developed key features, integrated REST APIs, resolved 50+ production issues, and collaborated with cross-functional teams to deliver high-quality solutions.`,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Senior Automation Engineer",
    company: "Tracxn Technology, limited",
    date: "Apr 2021 - Mar 2024",
    desc: "Developed a Sales Automation Platform with email notifications, reporting tools, campaign plugins, and demo scheduling to reduce manual effort. Built CRM automation workflows, lead tracking, data processing, and news crawler services. Led and mentored a team of 2–3 developers, delivering end-to-end automation solutions. Technologies: JavaScript, React.js, Node.js, Python, HTML, and CSS.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: agcLogo,
    role: "Automation Engineer",
    company: "Tracxn Technology, limited",
    date: "Jun 2020 - Mar 2021",
    desc: "Developed automation solutions across 9 departments, reducing manual effort through workflow automation, reporting tools, CRM utilities, lead assignment, and email automation. Collaborated with business teams to build scalable solutions that improved operational efficiency. Technologies: JavaScript, Google Apps Script, Python, HTML, CSS, Data Structures, and Algorithms.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    date: "2019",
    desc: "I completed my Bachelor and Master of Technology (Dual Degree) in Electronics and Communication Engineering (ECE) from RGPV University, Bhopal (M.P.). During my academic journey, I developed a strong foundation in electronics, communication systems, programming, and engineering principles. My coursework and technical learning helped strengthen my analytical, problem-solving, and technical skills, contributing to my professional growth and career in software development.",
    degree: "Bachelor and Master of Technology (Dual Degree) in ECE",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Resume Analyzer & Interview Preparation Platform",
    description:
      "Developed a full-stack AI-powered interview preparation platform that analyzes PDF resumes and generates personalized technical and HR interview questions with intelligent feedback. Implemented Firebase Google Authentication, credit-based access, and Razorpay payment integration. Built responsive, animated interfaces using Framer Motion and deployed scalable backend APIs on Render. Technologies: React.js, Node.js, Express.js, MongoDB, Firebase, Razorpay, and Framer Motion.",
    image: resumeAnalyzer,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "Node Js",
      "ExpressJs",
      "MongoDB",
      "LLM",
    ],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Inbound Email And Lead Assigment",
    description:
      "Developed an automated inbound email and lead assignment system to capture incoming leads, send email notifications, and assign leads to the appropriate teams based on business rules. Streamlined lead management, reduced manual effort, and improved response time and operational efficiency using JavaScript and Google Apps Script.",
    image: Inbound,
    tags: [
      "React JS",
      "ES6",
      "Javascript",
      "App Script",
      "Email Process",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "MERN E-Commerce Project",
    description:
      "Developed a full-stack MERN E-Commerce application with product listings, category-based filtering, user authentication, and shopping cart functionality. Built REST APIs for product and user management, integrated MongoDB for data storage, and created a responsive React.js interface to deliver a seamless shopping experience. Technologies: MongoDB, Express.js, React.js, Node.js, and REST APIs.",
    image: MernEcom,
    tags: [
      "React JS",
      "ES6",
      "Javascript",
      "Express",
      "MongoDB",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
];
