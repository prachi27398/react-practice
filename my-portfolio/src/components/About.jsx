import React from 'react'
import './About.css'

const About = () => {
  return (
    <main className="about-page">
        <h2>Hello, I'm Prachi Patel</h2>
        <section className="about-section">
          <p>
            I'm a passionate and experienced back-end developer with over 3 years of experience specializing in PHP, Laravel, CodeIgniter, and RESTful API integration. I thrive on building scalable, secure, and high-performing web applications.
          </p>
          <p>
            My journey has taken me from leading development at companies in India to working with international clients as a freelancer in the UK. I've recently completed my Master's in Management at the University of Essex and continue to expand my technical skills — especially in React and Python.
          </p>
        </section>

        <section className="about-section">
          <h3>Professional Summary</h3>
          <p>
            I've worked with clients across the globe — from startups to full-scale platforms. I recently earned my M.Sc. in Management from Essex University in the UK. I take pride in writing clean code, optimizing performance, and delivering scalable solutions that meet real business goals.
          </p>
        </section>

        <section className="about-section">
          <h3>Technical Skills</h3>
          <ul className="skills-list">
            <li>PHP, Laravel, CodeIgniter, Yii2</li>
            <li>MySQL, Query Optimization, DB Design</li>
            <li>RESTful APIs, Web Services</li>
            <li>React.js, JavaScript, HTML5, CSS3</li>
            <li>Git, GitHub, Postman, VS Code</li>
            <li>Cloud (AWS - Basic), Agile, TDD</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>Education</h3>
          <p><strong>M.Sc. Management</strong> - University of Essex, UK (2023)</p>
          <p><strong>B.E Computer Science</strong> - Gujarat Technical University, India (2019)</p>
        </section>

        <section className="about-section">
          <h3>Work Philosophy</h3>
          <p>
            I believe in writing clean, maintainable code, continuously learning, and collaborating with teams to create powerful user experiences. I’m committed to delivering real business value through tech.
          </p>
        </section>

        <section className="about-section">
          <h3>Fun Fact</h3>
          <p>When I'm not coding, I love exploring nature, reading tech blogs, and working on personal projects that challenge me.</p>
        </section>
    </main>
  )
}

export default About
