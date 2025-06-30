import {
  logo,
  backend,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  shadCn,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "ShadCn Ui",
    icon: shadCn,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "MySql",
  //   icon: mysql,
  // },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer – Full-Stack Contributor",
    company_name: "Codemonk",
    icon: "https://codemonk.io/favicon.ico",
    iconBg: "#383E56",
    date: "Jan 2024 – Present",
    points: [
      "Contributing to both frontend and backend with NestJS, Express.js, and MongoDB, handling complex approval logic and workflow automations.",
      "Designed a scalable frontend structure with modular architecture, reusable hooks, and efficient RTK Query integration.",
      "Enhanced UX with dynamic form validations, skeleton loaders, and accessibility improvements.",
      "Reduced app load time by 40% through route-based code-splitting, lazy loading, and Vite optimizations.",
      "Led frontend development for multiple scalable web applications using React.js, TypeScript, Redux, and Tailwind CSS. Built highly reusable UI libraries using ShadCN, integrated advanced data visualization tools like ECharts, and incorporated 3D models using Three.js.",
    ],
  },
  {
    title: "Software Engineer – Browser Extensions & Technical Leadership",
    company_name: "Codemonk",
    icon: "https://codemonk.io/favicon.ico",
    iconBg: "#383E56",
    date: "Sep 2023 – Jan 2024",
    points: [
      "Led frontend delivery for enterprise-grade Chrome Extensions integrated with platforms like Coupa, Ariba, and Microsoft Dynamics 365.",
      "Built extension tools with DOM scripting, cross-tab communication, and real-time data tracking.",
      "Architected reusable libraries using shadcn/ui, TanStack Table, and built with Vite and React 18.",
      "Implemented performance tuning through granular code-splitting, lazy-loading panels, and background service workers.",
      "Mentored junior engineers and led internal code reviews, fostering a culture of scalable and accessible design.",
    ],
  },
  {
    title: "Software Engineer – Frontend Lead & 3D Visualizations",
    company_name: "Codemonk",
    icon: "https://codemonk.io/favicon.ico",
    iconBg: "#383E56",
    date: "Sep 2021 – Sep 2023",
    points: [
      "Owned end-to-end delivery of a major dashboard project for Nanyang Technological University, visualizing energy and waste usage.",
      "Integrated Three.js to build real-time interactive 3D models of NTU campus for visualizing emissions data.",
      "Developed feature-rich React apps with TypeScript, Redux Toolkit, Tailwind CSS, and form validation strategies.",
      "Improved consistency and reliability across UI by contributing to internal component libraries and defining scalable design patterns.",
      "Collaborated closely with designers and backend engineers, enabling smoother releases and agile delivery cycles.",
      "Mentored peers, conducted code reviews, and reduced frontend defects by enforcing testing and accessibility standards.",
    ],
  },
  {
    title: "Software Engineer Intern – Web Foundations & Real-World Projects",
    company_name: "iBHubs / NxtWave",
    icon: "https://ibhubs.co/icons/icon-48x48.png?v=e6d862d8366ba8a4e422ff2eee65dd7d",
    iconBg: "#383E56",
    date: "Jul 2019 – Jul 2021",
    points: [
      "Built interactive web applications using React.js, Bootstrap, and Tailwind CSS — including a GitHub Profile Visualizer app.",
      "Practiced Agile delivery and participated in regular code reviews, debugging sessions, and peer programming.",
      "Delivered dynamic dashboards using Apache ECharts, empowering business teams with real-time analytics.",
      "Strengthened development foundations in JavaScript, Node.js, SQLite, and Python, preparing for full-time development roles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Chandrika proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Chandrika does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Chandrika optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
