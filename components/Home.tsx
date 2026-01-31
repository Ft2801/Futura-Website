import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Partners from './Partners';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Stats from './Stats';
import Contact from './Contact';
import About from './About';
import Process from './Process';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="w-full">
        <Partners />
        <About /> {/* Kept the summary version on home */}
        <Services /> {/* Kept the summary version on home */}
        <Process /> {/* Kept the summary version on home */}
        <Stats />
        <Projects /> {/* Kept the summary version on home */}
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Home;