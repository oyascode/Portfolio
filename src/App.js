import banner from './assets/images/banner.jpeg';
import aboutImg from './assets/images/Michael.jpg';
import { CgMenu } from 'react-icons/cg';
import { VscGithubInverted } from 'react-icons/vsc';
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, projects, socialLinks } from './data';
import { AnimatePresence, motion} from 'framer-motion'


function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <AnimatePresence initial={false}>
      <div className='flex w-screen min-h-screen items-center justify-center flex-col relative bg-primary pb-20'>
        {/* Header */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full bg-navBar md:w-880 p-4 rounded-2xl flex items-center ">
            <p className="text-lg text-slate-200 font-medium">Portfolio</p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out">Home</a>
              <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out">About</a>
              <a href="#project" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out">Project</a>
              <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out">Contact</a>
              <button className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out ml-auto border border-textBase px-2 py-1 rounded-xl">Download</button>
            </div>
            <motion.div 
              whileTap={{scale: 0.5}}
              className='block ml-auto md:hidden cursor-pointer'
              onClick={handleClick}
            >
              <CgMenu className='text-2xl text-textBase '/>
            </motion.div>
            {isActive && (
              <motion.div 
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1.1}}
                exit={{opacity: 0, scale: 0.5}}
                transition={{type: "ease-in", delay: "0.1s"}}
                className="flex flex-col items-center justify-evenly gap-6 p-4 top-24 bg-navBar w-300 rounded-lg fixed right-16">
                <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out" onClick={() => setIsActive(false)}>Home</a>
                <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out" onClick={() => setIsActive(false)}>About</a>
                <a href="#project" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out" onClick={() => setIsActive(false)}>Project</a>
                <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out" onClick={() => setIsActive(false)}>Contact</a>
                <button className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-out border border-textBase px-2 py-1 rounded-xl" onClick={() => setIsActive(false)}>Download</button>
              </motion.div>
            )}
          </div>
        </nav>
        {/* Banner */}
        <div className="relative" id="home">
          <img src={banner} alt="banner" />
        </div>
        {/* Main section */}
        <main className='w-[80%] mt-5'>
          {/* about */}
          <section className='grid grid-cols-1 md:grid-cols-2 gap-4 my-24' id="about">
            {/* About image */}
            <div className='w-full h-420 flex items-center justify-center'>
              <div className='w-275 h-340 bg-cyan-200 rounded-md relative'>
                <img 
                  src={aboutImg} 
                  alt="about author" 
                  className='w-full h-full rounded-lg object-cover -right-4 top-4 shadow-lg absolute'
                />
              </div>
            </div>
            {/* About description */}
            <div className='w-full h-420 flex flex-col items-center justify-center'>
              <p className='text-lg text-textBase text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem fuga illum error dolor alias molestiae et debitis iste minima!
              </p>
              <button className='w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600'>
                <span>
                  Download
                </span>
              </button>
            </div>
          </section>
          {/* Timeline */}
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {experiences && (
                experiences.map(experience => (
                  <VerticalTimelineElement
                  key={experience.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(21, 24, 31)', color: '#999' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
                    date={experience.date}
                    iconStyle={{ background: 'rgb(21, 24, 31)', color: '#999' }}
                    icon={experience.iconSource}
                  >
                    <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
                    <p>
                      {experience.description}
                    </p>
                  </VerticalTimelineElement>
                ))
              )}
            </VerticalTimeline>
          </section>
          {/* Projects */}
          <section id="project" className="flex flex-wrap items-center justify-center gap-4 my-24">
            {projects && (
              projects.map(project => (
                <div key={project.id} className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600    duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase uppercase font-medium">{project.name}</p>
                  <img src={project.imgUrl} alt="project tile" className='w-full h-full rounded-md my-4 object-cover' />
                  <div className="flex items-center justify-between flex-1">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {project.techs}
                      </span>
                    </p>
                    <a href="http://www.google.com">
                      <motion.div whileTap={{scale: "0.7s"}}>
                        <VscGithubInverted className='cursor-pointer text-textBase text-3xl'/>
                      </motion.div>
                    </a>
                  </div>
                </div>
              ))
            )}
          </section>
          {/* Contact section */}
          <section 
            id="contact" className='flex flex-col items-center justify-center w-full my-24'
          >
            <p className='text-2xl text-gray-400 capitalize'> 
            Follow me on
            </p>
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4"
            >
              {socialLinks && (
                socialLinks.map(socialLink => (
                <motion.a 
                whileTap={{scale: "0.7s"}}
                key={socialLink.id} href="https://www.google.com" className='w-full md:w-auto px-2 md:px-8 py-3 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out flex items-center justify-center gap-3'
                >
                {socialLink.iconSrc}
                <p className='text-lg text-textBase'>{socialLink.name}</p>
                </motion.a>
                ))
                )}
            </div>
              
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
