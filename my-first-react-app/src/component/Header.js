import React from 'react'
import Logo from '../logo.svg'

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt='' width={100}></img>
        <a href='/'>Home</a>
    </header>
  )
}

