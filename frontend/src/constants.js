// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
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

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
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
    title: 'Streamify',
    description:
      'Streamify is a project I built to bring people closer through real-time chat and video calls. I used the Stream API to make conversations feel instant and seamless, whether it’s sending a quick message or jumping on a face-to-face call. The idea was to create something practical, interactive, and easy to use, while helping me explore how modern APIs power real-time communication.',
    image: streamifyLogo,
    tags: ['HTML', 'CSS', 'React', 'Node', 'Express', 'MongoDB', 'Stream API'],
    github: 'https://github.com/basantashrestha055/streamify',
    webapp: 'https://streamify-b2y6.onrender.com/',
  },
  {
    id: 1,
    title: 'Amazon',
    description:
      'An Amazon-inspired e-commerce web app where I practiced core JavaScript concepts by implementing features like product listings, a shopping cart, and a simple checkout flow.',
    image: amazonLogo,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/basantashrestha055/javascript-amazon-clone',
  },
];
