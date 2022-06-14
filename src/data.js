import { VscGithubInverted } from 'react-icons/vsc';
import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoTwitter } from 'react-icons/io'
import { AiFillHome } from 'react-icons/ai'
import { MdWork } from 'react-icons/md'
import { FaUser, FaEnvelope } from 'react-icons/fa'


export const projects = [
  {
    id: 1,
    name: "ChatUp",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654840152/chatup400_goxoq6.jpg",
    techs: "ReactJs, Firebase",
    link: "https://splendid-biscotti-1448f8.netlify.app"
  },
  {
    id: 2,
    name: "Crypto Tracker",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654840152/crypto400_hq77da.jpg",
    techs: "ReactJs, Material-Ui, Firebase",
    link: "https://quizzical-albattani-da0535.netlify.app"
  },
  {
    id: 3,
    name: "Portfolio",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654840152/portfolio400_hrb0fp.jpg",
    techs: "ReactJs, Tailwindcss",
    link: "https://spontaneous-pixie-5ebfe6.netlify.app"
  },
  {
    id: 4,
    name: "Profile",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654840152/profile400_za3vja.jpg",
    techs: "ReactJs CSS",
    link: "https://sage-melomakarona-3e6dd8.netlify.app"
  },
  {
    id: 5,
    name: "Hotel Mockup",
    imgUrl: "https://res.cloudinary.com/dux2rlfzu/image/upload/v1654840152/hotel400_fmjzey.jpg",
    techs: "HTML, CSS",
    link: "https://vigilant-thompson-cf649b.netlify.app"
  },
]

export const socialLinks = [
  {
    id: 1,
    iconSrc: <VscGithubInverted className="text-textBase text-3xl cursor-pointer" />,
    name: "Github",
    link: "https://github.com/oyascode"
  },
  {
    id: 3,
    iconSrc: <IoLogoLinkedin className="text-blue-700 text-3xl cursor-pointer" />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michael-john-1ab5b593/"
  },
  {
    id: 2,
    iconSrc: <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />,
    name: "Twitter",
    link: "#"
  },
  {
    id: 4,
    iconSrc: <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />,
    name: "WhatsApp",
    link: "#"
  },
]

export const navLinks = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome className="mr-2" />,
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className="mr-2" />,
    href: "#about",
  },
  {
    id: 3,
    name: "Project",
    icon: <MdWork className="mr-2" />,
    href: "#project"
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelope className="mr-2" />,
    href: "#contact"
  },
] 