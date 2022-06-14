import React, { useEffect} from 'react';
import aboutImg from '../assets/images/Michael.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';



const About = () => {
  const [ ref, inView] = useInView({threshold: 0.3});
  const scrollAnimation = useAnimation();

useEffect(() => {
  if (inView) {
    scrollAnimation.start({
      x: 0,
      transition: {
        type: "ease-in",
        duration: 0.2,
        bounce: 0.2
      }
    })
  }
  if (!inView) {
    scrollAnimation.start({
      x: "-100vw"
    })
  }
}, [inView, scrollAnimation])

  return (
    <section 
      ref={ref}
      id="about" 
      className='w-[90%] mx-auto min-h-screen flex flex-col
      items-center justify-center'
    >
      <div className='w-80 mb-16 flex items-center justify-center'>
        <div className='w-[50px] h-[2px] bg-cyan-200 bg-opacity-50'></div>
        <h3 className='text-textBase my-6 text-2xl mx-3'>About</h3>
        <div className='w-[50px] h-[2px] bg-cyan-200 bg-opacity-50'></div>
      </div>
      <motion.div
        // animate={scrollAnimation}
        className='w-full flex flex-col md:flex-row items-center justify-evenly'
      >
        <div>
          <div className='w-300 h-340 bg-cyan-200 rounded-md relative mr-8'>
            <img 
              src={aboutImg} 
              alt="developer" 
              className='w-full h-full rounded-lg object-cover -right-4 top-4 shadow-lg absolute'
            />
          </div>
        </div>
        
        <div 
          className='mt-10 flex flex-col items-center justify-center'
        >
          <h1 className='text-4xl text-textBase text-center'>
            Hi, <br /> 
            I'm Michael <br />
            Web developer
          </h1>
          <h2 className='text-textBase'>Frontend Developer || Javascript || Reactjs</h2>
          <motion.a href="#contact" 
          whileTap={{scale: 0.75}} className='w-[200px] relative cursor-pointer mt-8 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white '>
            <span>
              Contact Me
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default About