import React from 'react'
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const metaConfig = {
  '/': {
    title: 'Home | My Portfolio',
    description: 'Welcome to my React portfolio homepage showcasing my work.',
  },
  '/about': {
    title: 'About Me | My Portfolio',
    description: 'Learn more about me, my background, and my passions.',
  },
  '/gallery': {
    title: 'Projects | My Portfolio',
    description: 'Browse through a gallery of my latest web development projects.',
  },
  '/contact': {
    title: 'Contact | My Portfolio',
    description: 'Get in touch with me via this contact page.',
  },
};

const PageMeta = () => {
  const location = useLocation();
  const route = location.pathname;
  const meta = metaConfig[route] || metaConfig['/'];

  return (
    <Helmet key={route}>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content="Your Portfolio" />
      <meta property="og:description" content="A React portfolio by..." />
      <meta property="og:image" content="link-to-preview-image.jpg" />
    </Helmet>
  );

}

export default PageMeta
