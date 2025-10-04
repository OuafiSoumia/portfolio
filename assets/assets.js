import user_image from './user-image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpeg';
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
import react from 'react';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
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
    right_arrow_bold_dark
};
export const workData = [
  {
    title: 'VR/AR Virtual Museum',
    description: 'Immersive virtual reality experience for exploring historical monuments – in collaboration with UCA (Université Cadi Ayyad, Morocco).',
    bgImage: '/work-1.png',
    url: 'https://www.uca.ma/fr'
  },
  {
    title: 'Medical Geolocation Platform',
    description: 'A web application to locate and manage healthcare centers – developed for AliDanTek (Canada).',
    bgImage: '/work-2.jpg',
    url: 'https://www.alidantek.ca/'
  },
  {
    title: 'Budget Management Tool',
    description: 'Design and development of a financial tool for accountants and fiduciaries – project with Tamtam International (Belgium).',
    bgImage: '/work-3.png',
    url: 'https://media.tamtam.pro/'
  },
  {
    title: 'Information System Maintenance',
    description: 'Maintenance and enhancement of the life insurance IS at Arkea – Sopra Steria (France).',
    bgImage: '/work-4.png',
    url: 'https://site.arkea-banque-ei.com/'
  },
]

export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Full-Stack Web Development', 
    description: 'Building complete web applications with React, Node.js, Spring Boot, and Symfony — from frontend interfaces to backend APIs and databases.', 
    link: '' 
  },
  { 
    icon: assets.mobile_icon, 
    title: 'Custom Platforms', 
    description: 'Design and development of tailored platforms such as medical geolocation systems, budget management tools, and digital learning solutions.', 
    link: '' 
  },
  { 
    icon: assets.ui_icon, 
    title: 'Interactive Solutions', 
    description: 'Creating user-friendly and engaging interfaces, including immersive VR museum tours and personalized recommendation systems.', 
    link: '' 
  },
  { 
    icon: assets.graphics_icon, 
    title: 'API & System Integration', 
    description: 'Development and integration of REST/GraphQL APIs, database management (SQL & NoSQL), and deployment of scalable solutions.', 
    link: '' 
  },
]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, Node Js, Symfony, Spring boot, SQL, NoSQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Software Engineer with a State Engineering Degree and a Master’s in Software Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Worked on diverse projects across different domains with multinational companies from Morocco, Canada, Belgium, and France.' }
];

export const toolsData = [
    assets.vscode, assets.node, assets.mongodb, assets.figma, assets.git, assets.reactpng
];