import React from 'react'
import './Gallery.css';

import Drank1 from '../assets/247Drank-1.png';
import Drank2 from '../assets/247Drank-2.png';
import studietrainer1 from '../assets/studie-trainer-1.png';
import studietrainer2 from '../assets/studie-trainer-2.png';
import studietrainer3 from '../assets/studie-trainer-3.png';
import reclycar1 from '../assets/reclycar-1.png';
import reclycar2 from '../assets/reclycar-2.png';
import reclycar3 from '../assets/reclycar-3.png';
import celeste1 from '../assets/celeste-1.png';
import celeste2 from '../assets/celeste-2.png';
import celeste3 from '../assets/celeste-3.png';
import celeste4 from '../assets/celeste-4.png';
import movie1 from '../assets/movie-1.png'
import movie2 from '../assets/movie-2.png'
import ts1 from '../assets/ts-1.png'
import ts2 from '../assets/ts-2.png'
import ts3 from '../assets/ts-3.png'
import ts4 from '../assets/ts-4.png'
import ts5 from '../assets/ts-5.png'
import password1 from '../assets/password-1.png'
import password2 from '../assets/password-2.png'
import password3 from '../assets/password-3.png'
import password4 from '../assets/password-4.png'
import password5 from '../assets/password-5.png'

const projects = [
  {
    name: 'ReclyCar (Laravel)',
    description: 'Migrated an entire legacy system from core PHP to Laravel, enhancing code maintainability, scalability, and security. Integrated third-party REST APIs for vehicle management and implemented the Mollie payment gateway for seamless checkout experiences.',
    images: [reclycar1, reclycar2, reclycar3],
    link: 'https://reclycar.com/'
  },
  {
    name: '247Drank (Laravel)',
    description: 'Built secure APIs for mobile apps including payment gateways (Stripe, PayPal), document checks, guest checkout, and authentication. Optimized backend logic, leading to a 10% increase in user conversion. Created auto-billing system.',
    images: [Drank1, Drank2],
    link: 'https://247drank.com'
  },
  {
    name: 'Studie Trainer (CodeIgniter)',
    description: 'Developed a full educational platform with custom database design, high performance optimization, and mobile responsiveness. Ensured smooth user experience for both students and instructors.',
    images: [studietrainer1, studietrainer2, studietrainer3],
    link: 'https://studietrainer.nl/'
  },
  {
    name: 'Freelance WordPress Work',
    description: 'Created custom WordPress themes and plugins for UK-based clients, focusing on security, SEO, and third-party API integrations.',
    images: [celeste1, celeste2, celeste3,celeste4],
    link: 'https://celesteuk.com/'
  },
  {
    name: 'Movie Review App (React)',
    description: 'A dynamic movie review and discovery app built with React. Integrated third-party APIs to fetch movie data in real time, including ratings, descriptions, and posters. Features include a responsive design, search functionality, and detailed movie pages with user-friendly layouts.',
    images: [movie1, movie2],
    link: 'https://github.com/prachi27398/react-practice/tree/master/moviereviewshow'
  },
  {
    name: 'Task Schedule React App',
    description: 'A task scheduling app built with React that allows users to add, update, and delete tasks with deadlines. Designed to help manage daily routines or project planning. Built with React hooks and dynamic UI updates. Includes form validation and optional localStorage support for persistent task management.',
    images: [ts1, ts2, ts3,ts4,ts5],
    link: 'https://github.com/prachi27398/react-practice/tree/master/task_scheduled'
  },
  {
    name: 'Password Generator React App',
    description: 'A simple yet powerful password generator built with React. Users can customize password length and character types (uppercase, lowercase, numbers, symbols). Includes a "Copy to Clipboard" feature for user convenience. Built for practicing React state management and user interaction handling.',
    images: [password1, password2,password3,password4,password5],
    link: 'https://github.com/prachi27398/react-practice/tree/master/passwordAppGenerator'
  },
  
];

const Gallery = () => {
  return (
    <main className="main-content">
      <h2>My Projects</h2>
      
      <div className='project-gallery'>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-images">
              {project.images.map((img, i) => (
                <img src={img} alt={`${project.name} screenshot ${i + 1}`} key={i} />
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="view-btn">
              {project.link.includes('github.com') ? 'View on GitHub' : 'View Live'}
            </a>
          </div>
        ))}

        <div className="project-card">
          <h3>React Portfolio</h3>
          <p>
            This very portfolio! Built using React, React Router, and styled for both light and dark themes. Includes routing, responsive design, and dynamic metadata handling.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Gallery
