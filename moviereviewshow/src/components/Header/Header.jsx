import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className='navbar'>
        <h1>Movie Review Show</h1>
        <div className='navbar_links'>
            <a href=''>Most Famous Movies</a>
            <a href=''>Highly Rated</a>
            <a href=''> Coming Soon </a>
      </div>
    </nav>
  )
}

export default Header
