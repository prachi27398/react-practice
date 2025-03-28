import React from 'react'
import Logo from '../logo.svg'
import { Appform } from './Appform'

export const Header = () => {
  return (
    <header className='headtop'>
      <img src={Logo} width={100}/>
      <a href='/'>Home</a>
      <Appform/>
    </header>
  )
}

