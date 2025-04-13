import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies'

function App() {
 
  return (
    <div className='app'>
      <Header/>
      <main>
        <Movies/>
      </main>
    </div>
  )
}

export default App
