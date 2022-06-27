import React from 'react';
import Spline  from '@splinetool/react-spline';

const Home = () => {
  return (
    <section id="home" className='w-[100%] min-h-full flex items-center justify-center mt-20 object-cover'>
      <Spline
        className='sm:h-[100vh]' 
        scene="https://prod.spline.design/KS99iXpXcwlm7fCp/scene.splinecode" 
      />
    </section>
    
  )
}

export default Home