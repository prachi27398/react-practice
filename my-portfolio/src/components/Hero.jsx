import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className='hero-overlay'>
        <h1>Hey, I'm Prachi Patel</h1>
        <p>Full-Stack PHP Developer | Laravel & Codiegniter Specialist | React Enthusiast</p>
        <a href="/gallery" className="hero-button">See My Projects</a>
      </div>
    </section>
  )
}

export default Hero
