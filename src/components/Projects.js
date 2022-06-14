import React, { useEffect } from 'react';
import{ projects } from '../data';
import{ motion, useAnimation } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer'; 


const Projects = () => {
  const [ref, inView2] = useInView({threshold: 0.3})
  const animation = useAnimation()

  useEffect(() => {
    if (inView2) {
      animation.start({
        x: 0,
        transition: {
          type: "ease-in",
          duration: 2,
          bounce: 0.3,
        }
      })
    }

    if(!inView2) {
      animation.start({x: "-100vw"})
    }
  }, [inView2, animation])

  return (
    <section 
      ref={ref}
      id="project"
      className='flex flex-col
      items-center justify-center mt-10'
    >
      <div className='w-80 flex items-center justify-center'>
        <div className='w-[50px] h-[2px] bg-cyan-200 bg-opacity-50'></div>
        <h3 className='text-textBase my-6 text-2xl mx-3'>Project</h3>
        <div className='w-[50px] h-[2px] bg-cyan-200 bg-opacity-50'></div>
      </div>
      <div
        className="flex flex-wrap items-center justify-center gap-4 md:w-[80%] md:mx-auto"
      >
        {projects && (
          projects.map(project => (
            <motion.div 
              animation={animation}
              key={project.id} 
              className="border border-zinc-800 rounded-md p-2 min-w-[250px] md:max-w-[275px] hover:border-zinc-600 duration-200 ease-in-out hover:shadow-md hover:scale-105 mt-10"
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
                <a href={project.link}>
                  <motion.div 
                    className='flex items-center justify-center border border-zinc-700 hover:border-zinc-500 hover:scale-95 py-1 px-2 -mb-3 rounded'
                    whileTap={{scale: "0.7s"}}
                  >
                    <p  className='cursor-pointer text-textBase text-xs mr-2'>Visit</p>
                    <p><FiExternalLink className='cursor-pointer text-textBase text-2xl'/></p>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  )
}

export default Projects