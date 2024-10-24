'use client';

import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Reviews from './Reviews/Reviews';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import AOS from "aos";
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: "top-bottom"
      });
    };

    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <section id="hero" className="pt-[100px] mt-[-100px]">
        <Hero />
      </section>

      <section id="about" className="pt-[100px] mt-[-100px]">
        <About />
      </section>

      <section id="services" className="pt-[100px] mt-[-100px]">
        <Services />
      </section>

      <section id="projects" className="pt-[100px] mt-[-100px]">
        <Projects />
      </section>

      <section id="skills" className="pt-[100px] mt-[-100px]">
        <Skills />
      </section>

      <section id="reviews" className="pt-[100px] mt-[-100px]">
        <Reviews />
      </section>

      <section id="blog" className="pt-[100px] mt-[-100px]">
        <Blog />
      </section>

      <section id="contact" className="pt-[100px] mt-[-100px]">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
