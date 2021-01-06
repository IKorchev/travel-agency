import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Jumbotron from './components/Jumbotron'
import Home from './pages/Home'
import './App.css'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Contact />
    </>
  );
}

export default App;
