import React from 'react';
import Spline  from '@splinetool/react-spline';

const Home = () => {
  return (
    <section id="home" className='flex flex-col items-center justify-center w-full md:object-contain mx-auto min-h-screen'>
      <Spline scene="https://prod.spline.design/daMVFMfydJctVrKA/scene.splinecode" />
    </section>
  )
}

export default Home