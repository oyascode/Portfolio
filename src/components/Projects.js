import React from 'react';
import{ projects } from '../data';
import{ motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section 
      id="project" 
      className="flex flex-wrap items-center justify-center gap-4 md:w-[80%] md:mx-auto"
    >
      {projects && (
        projects.map(project => (
          <div 
            key={project.id} 
            className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
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
          </div>
        ))
      )}
    </section>
  )
}

export default Projects