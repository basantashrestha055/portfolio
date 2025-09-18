// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import zustandLogo from './assets/tech_logo/zustand.jpg';
import tanstackLogo from './assets/tech_logo/tanstack.jpg';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import socketioLogo from './assets/tech_logo/socketio.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cloudinaryLogo from './assets/tech_logo/cloudinary.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

// Education Section Logo's
import citeLogo from './assets/education_logo/cite.jpg';
import xavierLogo from './assets/education_logo/xavier.png';

// Project Section Logo's
import streamifyLogo from './assets/work_logo/streamify.png';
import amazonLogo from './assets/work_logo/amazon.png';
import blinkitLogo from './assets/work_logo/blinkit.png';
import chatifyLogo from './assets/work_logo/chatify.png';
import instaLogo from './assets/work_logo/insta.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Zustand', logo: zustandLogo },
      { name: 'Tanstack Query', logo: tanstackLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Cloudinary', logo: cloudinaryLogo },
      { name: 'Socket.io', logo: socketioLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Cloudinary', logo: cloudinaryLogo },
      { name: 'Socket.io', logo: socketioLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [{ name: 'JavaScript', logo: javascriptLogo }],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: citeLogo,
    school: 'College of Information Technology and Engineering, Tinkune',
    date: '2016 - Current',
    desc: 'During my time in the Bachelors program, I learned the fundamentals of web development and applied them through hands-on projects. Although I have not been able to complete my degree yet due to health challenges that kept me from exams, the experience has shaped my skills and growth in the field.',
    degree: 'Bachelor in Information Technology - BIT',
  },
  {
    id: 1,
    img: xavierLogo,
    school: 'Xavier International College, Kalopul',
    date: '2014 - 2016',
    desc: 'I pursued my +2 education with a major in Computer Science, which gave me an early foundation in programming and technology',
    degree: 'Computer Science',
  },
];

export const projects = [
  {
    id: 0,
    title: 'Amazon',
    description:
      'An Amazon-inspired e-commerce web app where I practiced core JavaScript concepts by implementing features like product listings, a shopping cart, and a simple checkout flow.',
    image: amazonLogo,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/basantashrestha055/javascript-amazon-clone',
  },
  {
    id: 1,
    title: 'BinkeyIt',
    description:
      'I built an e-commerce web app using the MERN stack, recreating core features to practice full-stack development in a real-world setting. The project helped me connect frontend, backend, and database seamlessly while also deploying it for live use.',
    image: blinkitLogo,
    tags: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Tailwind',
      'Cloudinary',
      'Stripe',
    ],
    github: 'https://github.com/basantashrestha055/blinkit',
    webapp: 'https://blinkit-x4ew.onrender.com/',
  },
  {
    id: 2,
    title: 'Streamify',
    description:
      'Streamify is a project I built to bring people closer through real-time chat and video calls. I used the Stream API to make conversations feel instant and seamless, whether it’s sending a quick message or jumping on a face-to-face call. The idea was to create something practical, interactive, and easy to use, while helping me explore how modern APIs power real-time communication.',
    image: streamifyLogo,
    tags: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Stream',
      'Tanstack Query',
      'Tailwind',
      'Daisy UI',
    ],
    github: 'https://github.com/basantashrestha055/streamify',
    webapp: 'https://streamify-b2y6.onrender.com/',
  },
  {
    id: 3,
    title: 'Chatify',
    description:
      'Chatify is a real-time messaging app built with the MERN stack. I used Socket.io to handle live messaging between users, and tools like Zustand, Cloudinary, and Tailwind to manage state, media, and design. I focused on keeping the design simple and clean, while also learning how real-time features work behind the scenes.',
    image: chatifyLogo,
    tags: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Arcjet',
      'Zustand',
      'Tailwind',
      'Daisy UI',
      'Cloudinary',
      'Socket.io',
    ],
    github: 'https://github.com/basantashrestha055/chatify',
    webapp: 'https://chatify-0z3pm.sevalla.app/',
  },
  {
    id: 4,
    title: 'Instagram',
    description: 'Coming Soon...',
    image: instaLogo,
    tags: [],
  },
];
