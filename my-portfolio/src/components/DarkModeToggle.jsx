import React, { useState } from 'react'
import { Moon, Sun } from 'react-feather'
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleMode = () => {
        document.body.classList.toggle('dark-mode');
        setDarkMode(!darkMode);
      };

  return (
    <button className='dark-toggle-button' onClick={toggleMode}>
      {darkMode ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

export default DarkModeToggle
