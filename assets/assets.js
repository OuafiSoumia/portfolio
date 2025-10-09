import user_image from './user-image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import spring from './springBoot.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import Sopra_Steria from './sopra-steria.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import reactpng from './react.png';
import node from './Node.png';
import AliDanTek from './alidantek.png';
import Tamtam from './tamtam.jpeg';
import vr_detail from './vr-detail.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    spring,
    firebase,
    figma,
    git,
    mongodb,
    reactpng,
    node,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    Sopra_Steria,
    AliDanTek,
    Tamtam,
    vr_detail
};
export const workData = [
  {
    title: 'VR/AR Virtual Museum',
    description: 'Immersive virtual reality experience for exploring historical monuments – in collaboration with UCA (Université Cadi Ayyad, Morocco).',
    bgImage: '/work-1.png',
  },
  {
    title: 'Medical Geolocation Platform',
    description: 'A web application to locate and manage healthcare centers – developed for AliDanTek (Canada).',
    bgImage: '/work-2.jpg',
  },
  {
    title: 'Budget Management Tool',
    description: 'Design and development of a financial tool for accountants and fiduciaries – project with Tamtam International (Belgium).',
    bgImage: '/work-3.png',
  },
  {
    title: 'Information System Maintenance',
    description: 'Maintenance and enhancement of the life insurance IS at Arkea – Sopra Steria (France).',
    bgImage: '/work-4.png',
  },
]

export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Backend Development', 
    description: 'Design and development of robust backend systems using Node.js, Spring Boot, and Symfony to ensure scalability, performance, and security.', 
    link: '' 
  },
  { 
    icon: assets.mobile_icon, 
    title: 'Frontend Development', 
    description: 'Creation of modern, responsive, and dynamic user interfaces using React.js and Next.js for seamless user experiences across all devices.', 
    link: '' 
  },
  { 
    icon: assets.ui_icon, 
    title: 'Databases', 
    description: 'Design, optimization, and management of relational and NoSQL databases such as MySQL, PostgreSQL, and MongoDB to ensure data integrity and efficiency.', 
    link: '' 
  },
  { 
    icon: assets.graphics_icon, 
    title: 'Best Practices and Management', 
    description: 'Implementation of software engineering best practices, version control (Git), CI/CD pipelines, and agile project management methodologies.', 
    link: '' 
  },
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, Node Js, Symfony, Spring boot, SQL, NoSQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Software Engineer with a State Engineering Degree and a Master’s in Software Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Worked on diverse projects across different domains with multinational companies from Canada, Belgium, and France.' }
];

export const toolsData = [
  { img: assets.spring, name: "Spring Boot" },
  { img: assets.node, name: "Node.js" },
  { img: assets.mongodb, name: "MongoDB" },
  { img: assets.figma, name: "Figma" },
  { img: assets.git, name: "Git" },
  { img: assets.reactpng, name: "React" },
];

export const experiences = [
    {
    title: "Sopra Steria — Brest, France",
    role: "Software Engineer Intern",
    url: 'https://www.soprasteria.com/fr',
    image: assets.Sopra_Steria,
    description: `Contributed to the maintenance of Arkéa’s life insurance information system. 
    Analyzed and resolved incident tickets, performed debugging, implemented code fixes, and wrote technical documentation.`,
    techs: ["Java/JEE", "COBOL", "DB2", "UNIX", "SQL"]
  },
  {
    title: "Tamtam International — Brussels, Belgium",
    role: "Software Engineer Intern",
    url: 'https://media.tamtam.pro/',
    image: assets.Tamtam,
    description: `Developed a budget management tool for accountants and fiduciaries. 
    Designed secure role-based access, implemented core features, and wrote unit tests for all key functionalities.`,
    techs: ["React", "Symfony", "Redux", "NGINX", "PHPUnit", "MySQL"]
  },
    {
    title: "AliDanTek — Montreal, Canada",
    role: "Full-Stack Developer Intern",
    url: 'https://www.alidantek.ca/',
    image: assets.AliDanTek,
    description: `Created a medical geolocation platform allowing users to locate healthcare centers in real-time. 
    Responsible for data scraping, cleaning, backend and frontend development, and deployment on Cyclic.`,
    techs: ["ReactJS", "NodeJS", "Express", "MongoDB", "Cyclic", "Swagger", "Selenium"]
  },
  {
    title: "Université Cadi Ayyad — Marrakech, Morocco",
    role: "Academic Project — Virtual Reality Developer",
    url: 'https://www.uca.ma/fr',
    image: assets.vr_detail,
    description: `Built an immersive virtual reality platform for exploring historical monuments, integrating a personalized 
    recommendation system based on user interactions.`,
    techs: ["NodeJS", "NextJS", "MongoDB", "Unity", "Blender", "C#", "VR/AR"]
  },
];