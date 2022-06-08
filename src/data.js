import { CgCodeSlash } from "react-icons/cg"
import { VscGithubInverted } from 'react-icons/vsc';
import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoTwitter } from 'react-icons/io'

export const experiences = [
  {
    id: 1,
    date: "2009 - 2013",
    location: "Lagos Nigeria",
    title: "To be decided",
    iconSource: <CgCodeSlash />,
    description: "lorem lorem ipsum ipsum dolor dolor and so on and so forth"
  },
  {
    id: 2,
    date: "2009 - 2013",
    location: "Lagos Nigeria",
    title: "To be decided",
    iconSource: <CgCodeSlash />,
    description: "lorem lorem ipsum ipsum dolor dolor and so on and so forth"
  },
  {
    id: 3,
    date: "2009 - 2013",
    location: "Lagos Nigeria",
    title: "To be decided",
    iconSource: <CgCodeSlash />,
    description: "lorem lorem ipsum ipsum dolor dolor and so on and so forth"
  },
  {
    id: 4,
    date: "2009 - 2013",
    location: "Lagos Nigeria",
    title: "To be decided",
    iconSource: <CgCodeSlash />,
    description: "lorem lorem ipsum ipsum dolor dolor and so on and so forth"
  },
]


export const projects = [
  {
    id: 1,
    name: "ChatUp",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654624689/chatup450_pfl9ff.jpg",
    techs: "ReactJs, Firebase",
    github: "#"
  },
  {
    id: 2,
    name: "Crypto Tracker",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654624690/crypto450_kdaoxn.jpg",
    techs: "ReactJs, Material-Ui, Firebase",
    github: "#"
  },
  {
    id: 3,
    name: "Portfolio",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654624690/portfolio450_p03ruy.jpg",
    techs: "ReactJs, Tailwindcss",
    github: "#"
  },
  {
    id: 4,
    name: "Profile",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654624689/profile450_ee9jev.jpg",
    techs: "ReactJs",
    github: "#"
  },
  {
    id: 5,
    name: "Hotel Mockup",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654624690/hotel450_ckt96z.jpg",
    techs: "HTML, CSS",
    github: "#"
  },
  {
    id: 6,
    name: "Internship App Mockup",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654624689/Internship450_h4yeyt.jpg",
    techs: "React, Material-Ui",
    github: "#"
  },
]

export const socialLinks = [
  {
    id: 1,
    iconSrc: <VscGithubInverted className="text-textBase text-3xl cursor-pointer" />,
    name: "Github",
    link: "#"
  },
  {
    id: 3,
    iconSrc: <IoLogoLinkedin className="text-blue-700 text-3xl cursor-pointer" />,
    name: "LinkedIn",
    link: "#"
  },
  {
    id: 2,
    iconSrc: <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />,
    name: "LinkedIn",
    link: "#"
  },
  {
    id: 4,
    iconSrc: <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />,
    name: "WhatApp",
    link: "#"
  },
]