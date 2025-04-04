import React from 'react'
import Logo from '../logo.svg'

export const Header = () => {

  return (
    <header className='headtop'>
      <img src={Logo} width={100} alt="logo"/>
      <a href='/'>Home</a>
    </header>
  )
}

