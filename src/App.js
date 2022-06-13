import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <AnimatePresence intial={false}>
      <div className='w-[90%] mx-auto min-h-screen flex flex-col items-center justify-center'>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </AnimatePresence>
  );
}

export default App;
