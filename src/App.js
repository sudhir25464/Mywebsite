import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Mainpage from './components/Mainpage'
import Footer from './pages/Footer'
import { useEffect } from 'react'
import Service from './pages/Service'
import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ProjectSlider from './pages/ProjectSlider'
// ..

function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
  <>
  <BrowserRouter>
  <Navbar/>

  <Routes>
  <Route path='/' element={<Mainpage/>}/>
  </Routes>
 
  <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App
