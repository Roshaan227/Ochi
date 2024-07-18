import React from 'react'
import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Eyes from './components/Eyes.jsx'
import Feature from './components/Feature.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/footer.jsx' 
function App() {
  return (
    <div className='w-full min-h-screen bg-[black] text-white'>
     <Navbar/>
     <Landing/>     
     <Marquee/>
     <About/>
     <Eyes/>
     <Feature/>
     <Cards/>
     <Footer/>
    </div>
  )
}

export default App