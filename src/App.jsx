import { useState } from 'react'
import './App.css'
import { Navbar, Header, Main, ContactUs } from './components'

function App() {

  return (
    <>
      <div className='gradient__background'>
        <Navbar/>
        <Header/>
      </div>
        <Main/>
        <ContactUs/>
    </>
  )
}

export default App
